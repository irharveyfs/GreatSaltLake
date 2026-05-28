const { chromium } = require('/Users/nephiharvey/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const errors = [];
  page.on('pageerror', err => errors.push(err.message));
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.goto('http://127.0.0.1:8080/gsl-simulator-v14.1.html', { waitUntil: 'domcontentloaded', timeout: 30000 });
  await page.waitForTimeout(2500);

  const checks = [];
  async function check(name, fn) {
    try {
      const ok = await fn();
      checks.push({ name, ok: Boolean(ok) });
    } catch (err) {
      checks.push({ name, ok: false, error: err.message });
    }
  }

  await check('title is v14.1', () => page.title().then(t => /v14\.1/.test(t)));
  await check('forecast horizon is 2025-2036', () => page.evaluate(() => FCST_YEARS.length === 12 && FCST_YEARS[0] === 2025 && FCST_YEARS[11] === 2036));
  await check('2036 uncertainty wider than 2034', () => page.evaluate(() => FCST_CI[FCST_YEARS.indexOf(2036)] > FCST_CI[FCST_YEARS.indexOf(2034)]));
  await check('overview has 2034 and 2036 KPI cards', () => page.evaluate(() => !!document.getElementById('overview2034') && !!document.getElementById('overview2036')));
  await check('overview slider changes 2036 KPI', async () => {
    const before = await page.locator('#overview2036').innerText();
    await page.$eval('#overviewConservation', el => { el.value = '300'; el.dispatchEvent(new Event('input', { bubbles: true })); });
    await page.waitForTimeout(250);
    const after = await page.locator('#overview2036').innerText();
    return before !== after;
  });
  await check('sim tab annual accounting renders editable horizon', async () => {
    await page.evaluate(() => switchTab('sim'));
    await page.waitForTimeout(500);
    return page.locator('#annualAccountingBody input.accounting-input').count().then(n => n === 84);
  });
  await check('annual edit marks manual and changes forecast', async () => {
    const before = await page.locator('#proj2034').innerText();
    const target = page.locator('#annualAccountingBody input.accounting-input').nth(83);
    await target.fill('1000');
    await target.dispatchEvent('change');
    await page.waitForTimeout(500);
    const manual = await page.locator('#annualAccountingBody input.accounting-input').nth(83).evaluate(el => el.classList.contains('manual'));
    const after = await page.locator('#proj2034').innerText();
    return manual && before !== after;
  });
  await check('cross-validation combined chart uses 2036 labels', async () => {
    await page.evaluate(() => switchTab('xval'));
    await page.waitForTimeout(500);
    return page.evaluate(() => combinedChartObj && combinedChartObj.data.labels.length === 12 && combinedChartObj.data.labels.at(-1) === 2036);
  });
  await check('white paper links are present', async () => {
    await page.evaluate(() => switchTab('wp'));
    await page.waitForTimeout(200);
    return page.evaluate(() => document.body.innerText.includes('Open Final Review PDF') && document.body.innerText.includes('Open Final Review DOCX'));
  });

  await page.screenshot({ path: 'rendered-white-paper-pdf/v14.1-simulator-smoke.png', fullPage: false });
  await browser.close();

  const failed = checks.filter(c => !c.ok);
  console.log(JSON.stringify({ checks, errors, failed }, null, 2));
  if (failed.length || errors.length) process.exit(1);
})();
