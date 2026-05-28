const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const htmlPath = path.join(root, 'gsl-simulator-v14.1.html');
let html = fs.readFileSync(htmlPath, 'utf8');

function replaceAll(find, repl) {
  html = html.split(find).join(repl);
}

function replaceRegex(regex, repl) {
  html = html.replace(regex, repl);
}

replaceAll('<title>GSL Elevation Simulator v14</title>', '<title>GSL Elevation Simulator v14.1</title>');
replaceAll('GSL Elevation Simulator v14', 'GSL Elevation Simulator v14.1');
replaceAll('GSL Simulator v14', 'GSL Simulator v14.1');
replaceAll('Private Draft', 'v14.1 Final Review');
replaceAll('v14 Private Draft', 'v14.1 Final Review');
replaceAll('v14 private draft', 'v14.1 final review');
replaceAll('v14 private simulator draft', 'v14.1 final review');
replaceAll('Lag-Corrected PDO/ENSO/AR Framework', 'Lag-Corrected PDO/ENSO/Atmospheric-River Framework');
replaceAll('PDO/ENSO/AR', 'PDO/ENSO/Atmospheric-River');
replaceAll('ENSO/AR', 'ENSO/Atmospheric-River');
replaceAll('AR pathway', 'Atmospheric-river pathway');
replaceAll('AR multiplier', 'Atmospheric-river multiplier');
replaceAll('AR multipliers', 'Atmospheric-river multipliers');
replaceAll('AR-catalog', 'atmospheric-river catalog');
replaceAll('AR frequency', 'atmospheric-river frequency');
replaceAll('AR event', 'atmospheric-river event');
replaceAll('Forecast (1977&ndash;2034)', 'Forecast (1977&ndash;2036)');
replaceAll('GSL Elevation 1977&ndash;2034 (NGVD29)', 'GSL Elevation 1977&ndash;2036 (NGVD29)');
replaceAll('widening to &plusmn;2.5 ft by 2034', 'widening through the 2036 risk horizon');
replaceAll('Projected 2034 Elev.', '2036 Risk Horizon');
replaceAll('<th>2034 &Delta;</th>', '<th>2036 &Delta;</th>');
replaceAll('Combined Model Comparison (2025&ndash;2034)', 'Combined Model Comparison (2025&ndash;2036)');
replaceAll('Model Comparison: Two-Model Trajectory (2025&ndash;2034)', 'Model Comparison: Two-Model Trajectory (2025&ndash;2036)');
replaceAll('2034 Performance Curve: Conservation Effects (Augmentation) on GSL Elevation (NGVD29)', '2034 Milestone Performance Curve: Conservation Effects (Augmentation) on GSL Elevation (NGVD29)');
replaceAll("text:'2034 Elevation (ft NGVD29)'", "text:'2034 Milestone Elevation (ft NGVD29)'");
replaceAll('2034 RC Projection', '2036 RC Projection');

replaceRegex(/<h1>&#127754; GSL Elevation Simulator v14\.1<\/h1>\s*<p>(.*?)<\/p>/s,
`<h1>&#127754; GSL Elevation Simulator v14.1</h1>
<p>Education Overview &bull; Strike Team Policy Levers &bull; Editable Year-by-Year Accounting &bull; Lag-Corrected PDO/ENSO/Atmospheric-River Framework &bull; Tarboton Stochastic Envelope &bull; USGS NGVD29 Bathymetry</p>`);

replaceRegex(/<\/style>/, `
.data-vintage{background:#f6fbfc;border:1px solid var(--border);border-left:4px solid var(--primary);border-radius:8px;padding:12px 14px;font-size:0.78em;color:var(--text-sec);line-height:1.5}
.data-vintage h4{font-size:0.82em;color:var(--primary);text-transform:uppercase;letter-spacing:0.4px;margin:0 0 6px}
.data-vintage .dv-row{display:flex;justify-content:space-between;gap:12px;border-top:1px solid #e8eef0;padding-top:4px;margin-top:4px}
.data-vintage .dv-row:first-of-type{border-top:none;margin-top:0;padding-top:0}
.accounting-input{width:74px;padding:4px 6px;border:1px solid var(--border);border-radius:5px;text-align:right;font-size:0.86em}
.accounting-input.manual{background:#fff8e1;border-color:#ff9800;font-weight:700}
.accounting-reset-row{display:flex;flex-wrap:wrap;gap:8px;margin:10px 0}
.btn-mini{padding:6px 10px;font-size:0.76em;border-radius:5px;border:1px solid var(--border);background:#fff;color:var(--primary);cursor:pointer}
.btn-mini:hover{background:#e0f2f5}
.guardrail-note{background:#fff8e1;border-left:4px solid #ff9800;border-radius:6px;padding:10px 12px;font-size:0.84em;color:#5d4037;margin:12px 0}
</style>`);

replaceRegex(/<script>\n\/\/ ==================== DATA ====================/,
`<script>
/*
GSL MODEL GUARDRAILS:
- Primary datum is NGVD29.
- Forecast anchors to live USGS Saltair when available; do not restore v12 BASE=4187.5.
- PDO is a regime indicator / atmospheric-bridge index, not a literal forcing knob.
- Annual accounting must drive forecast output; structural baseline gains are not policy water.
- 2034 is the milestone; 2036 is the lower-skill risk horizon.
- Atmospheric-river multipliers are provisional until reviewed calibration.
- Long-range PDO opportunity graphics are conceptual, not lake-elevation forecasts.
See AI-MAINTENANCE-GUIDE.md before changing forecast logic.
*/
// ==================== DATA ====================`);

replaceRegex(/const FCST_YEARS=\[[^\]]+\];/, 'const FCST_YEARS=[2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035,2036];');
replaceRegex(/const BASELINE=\[[^\]]+\];/, 'const BASELINE=[4192.10,4191.35,4190.45,4189.80,4189.50,4189.85,4190.95,4191.25,4190.15,4189.35,4188.90,4188.55];');
replaceRegex(/const FCST_CI=\[[^\]]+\];/, 'const FCST_CI=[0.50,0.65,0.85,1.05,1.30,1.55,1.80,2.00,2.15,2.30,2.55,2.85];');
replaceRegex(/const DANGER=4189;/, 'const DANGER=4189;\\nconst MILESTONE_YEAR=2034;\\nconst RISK_HORIZON_YEAR=2036;');
replaceRegex(/const TARB_BASE_MEAN=\[[^\]]+\];/, 'const TARB_BASE_MEAN=[4191.0,4191.05,4191.01,4191.01,4190.97,4190.96,4191.06,4191.08,4191.13,4191.13,4191.14,4191.12];');
replaceRegex(/const TARB_BASE_Q05=\[[^\]]+\];/, 'const TARB_BASE_Q05=[4191.0,4189.44,4188.4,4187.81,4187.43,4187.05,4186.9,4186.85,4186.56,4186.25,4186.05,4185.85];');
replaceRegex(/const TARB_BASE_Q25=\[[^\]]+\];/, 'const TARB_BASE_Q25=[4191.0,4189.98,4189.34,4189.05,4189.11,4188.92,4188.96,4188.85,4188.9,4188.94,4188.88,4188.80];');
replaceRegex(/const TARB_BASE_Q75=\[[^\]]+\];/, 'const TARB_BASE_Q75=[4191.0,4192.33,4192.13,4192.75,4192.71,4192.72,4192.83,4193.01,4193.23,4193.32,4193.38,4193.42];');
replaceRegex(/const TARB_BASE_Q95=\[[^\]]+\];/, 'const TARB_BASE_Q95=[4191.0,4193.32,4194.72,4195.05,4195.36,4195.97,4196.35,4196.15,4196.14,4196.36,4196.55,4196.70];');
replaceRegex(/const TARB_250_MEAN=\[[^\]]+\];/, 'const TARB_250_MEAN=[4191.0,4191.45,4191.74,4192.04,4192.25,4192.45,4192.73,4192.9,4193.08,4193.18,4193.24,4193.28];');
replaceRegex(/const TARB_800_MEAN=\[[^\]]+\];/, 'const TARB_800_MEAN=[4191.0,4192.3,4193.29,4194.15,4194.81,4195.37,4195.91,4196.3,4196.64,4196.88,4197.05,4197.18];');
replaceRegex(/const TARB_800_Q05=\[[^\]]+\];/, 'const TARB_800_Q05=[4191.0,4190.75,4190.9,4191.31,4191.8,4192.19,4192.65,4193.14,4193.25,4193.44,4193.58,4193.70];');
replaceRegex(/const TARB_800_Q25=\[[^\]]+\];/, 'const TARB_800_Q25=[4191.0,4191.27,4191.75,4192.48,4193.3,4193.8,4194.4,4194.67,4195.04,4195.22,4195.38,4195.52];');
replaceRegex(/const TARB_800_Q75=\[[^\]]+\];/, 'const TARB_800_Q75=[4191.0,4193.54,4194.35,4195.57,4196.21,4196.65,4197.22,4197.66,4198.13,4198.36,4198.58,4198.78];');
replaceRegex(/const TARB_800_Q95=\[[^\]]+\];/, 'const TARB_800_Q95=[4191.0,4194.48,4196.61,4197.59,4198.39,4199.33,4199.92,4200.29,4200.55,4200.79,4201.02,4201.24];');

replaceRegex(/const ACCOUNTING_PROFILES=\{[\s\S]*?\n\};/,
`const ACCOUNTING_PROFILES={
  ag:[0.50,0.35,0.25,0.55,0.75,1.00,0.85,0.55,0.65,0.75,0.65,0.55],
  mi:[0.25,0.50,0.75,1.00,1.00,1.00,1.00,1.00,1.00,1.00,1.00,1.00],
  ph:[0.20,0.40,0.65,0.85,1.00,1.00,1.00,1.00,1.00,1.00,1.00,1.00],
  nf:[1.00,0.40,0.15,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00,0.00],
  mn:[0.50,0.75,1.00,1.00,1.00,1.00,1.00,1.00,1.00,1.00,1.00,1.00],
  rs:[1.00,0.60,0.20,0.00,0.50,0.80,0.30,0.10,0.40,0.60,0.35,0.20],
  au:[0.00,0.05,0.10,0.20,0.35,0.50,0.65,0.80,0.90,1.00,1.00,1.00]
};
let annualOverrides={};`);

replaceRegex(/function buildAnnualAccounting\(v\)\{[\s\S]*?\n\}\n\nfunction avgAccounting/,
`function annualOverrideKey(year,key){return year+'_'+key;}
function setAnnualOverride(year,key,value){
  const n=Math.max(0,Math.round(Number(value)||0));
  annualOverrides[annualOverrideKey(year,key)]=n;
  runSim();
}
function clearAnnualOverrides(){
  annualOverrides={};
  runSim();
}
function clearLeverOverrides(key){
  Object.keys(annualOverrides).forEach(k=>{if(k.endsWith('_'+key))delete annualOverrides[k];});
  runSim();
}
function applyAnnualOverrides(row){
  ['ag','mi','ph','nf','mn','rs','au'].forEach(key=>{
    const oKey=annualOverrideKey(row.year,key);
    if(Object.prototype.hasOwnProperty.call(annualOverrides,oKey))row[key]=annualOverrides[oKey];
  });
  row.modeledTotal=row.ag+row.mi+row.ph+row.nf+row.mn+row.rs+row.au;
  return row;
}
function buildAnnualAccounting(v){
  return FCST_YEARS.map((year,i)=>{
    const row={
      year,
      ag:Math.round(v.ag*profileAt('ag',i)),
      mi:Math.round(v.mi*profileAt('mi',i)),
      ph:Math.round(v.ph*profileAt('ph',i)),
      nf:Math.round(v.nf*profileAt('nf',i)),
      mn:Math.round(v.mn*profileAt('mn',i)),
      rs:Math.round(v.rs*profileAt('rs',i)),
      au:Math.round(v.au*profileAt('au',i)),
      structural:STRUCTURAL_BASELINE_GAIN_KAF
    };
    row.modeledTotal=row.ag+row.mi+row.ph+row.nf+row.mn+row.rs+row.au;
    return applyAnnualOverrides(row);
  });
}

function avgAccounting`);

replaceRegex(/function updateAnnualAccounting\(rows,forecast\)\{[\s\S]*?\n\}\n\n\/\/ ==================== OVERVIEW/,
`function updateAnnualAccounting(rows,forecast){
  const body=document.getElementById('annualAccountingBody');
  if(!body) return;
  const inputCell=(row,key)=>{
    const oKey=annualOverrideKey(row.year,key);
    const manual=Object.prototype.hasOwnProperty.call(annualOverrides,oKey);
    return '<input class="accounting-input '+(manual?'manual':'')+'" type="number" min="0" step="1" value="'+row[key]+'" onchange="setAnnualOverride('+row.year+',\\''+key+'\\',this.value)" title="'+(manual?'Manual override':'Preset value; edit to override')+'">';
  };
  body.innerHTML=rows.map((row,i)=>'<tr>'+
    '<td>'+row.year+'</td>'+
    '<td>'+inputCell(row,'ag')+'</td>'+
    '<td>'+inputCell(row,'mi')+'</td>'+
    '<td>'+inputCell(row,'ph')+'</td>'+
    '<td>'+inputCell(row,'nf')+'</td>'+
    '<td>'+inputCell(row,'mn')+'</td>'+
    '<td>'+inputCell(row,'rs')+'</td>'+
    '<td>'+inputCell(row,'au')+'</td>'+
    '<td><strong>'+row.modeledTotal+'</strong></td>'+
    '<td class="accounting-structural">'+row.structural+'</td>'+
    '<td>'+(forecast[i] ? forecast[i].toFixed(1) : '')+'</td>'+
  '</tr>').join('');
}

// ==================== OVERVIEW`);

replaceRegex(/<p style="font-size:0\.88em;color:var\(--text-sec\)">Read-only annual delivery table driven by the Simulator sliders\. Recurring levers ramp in over time; episodic and one-time levers follow preset delivery profiles\. The structural baseline gain is shown for accounting transparency but is not double-counted as new policy water\.<\/p>/,
`<p style="font-size:0.88em;color:var(--text-sec)">Editable annual delivery table driven initially by Simulator slider presets. Edit any annual kAf cell to create a local manual override; all downstream forecast charts and KPIs update immediately. Structural baseline gain remains read-only and is not double-counted as new policy water.</p>
<div class="accounting-reset-row">
<button class="btn-mini" onclick="clearAnnualOverrides()">Reset all overrides</button>
<button class="btn-mini" onclick="clearLeverOverrides('ag')">Reset Ag</button>
<button class="btn-mini" onclick="clearLeverOverrides('mi')">Reset M&amp;I</button>
<button class="btn-mini" onclick="clearLeverOverrides('ph')">Reset Phrag.</button>
<button class="btn-mini" onclick="clearLeverOverrides('nf')">Reset Newfoundland</button>
<button class="btn-mini" onclick="clearLeverOverrides('mn')">Reset Mineral</button>
<button class="btn-mini" onclick="clearLeverOverrides('rs')">Reset Reservoir</button>
<button class="btn-mini" onclick="clearLeverOverrides('au')">Reset Aug.</button>
</div>`);

replaceRegex(/<div class="accounting-note">Preset logic:[\s\S]*?<\/div>/,
`<div class="accounting-note">Preset logic: agricultural leasing is water-year limited, Newfoundland is treated as a front-loaded/refillable stock source only when a scenario explicitly includes refill, reservoir operations are episodic, M&amp;I/phragmites/mineral reductions are recurring after ramp-up, and augmentation follows a construction-style ramp. Edited cells are local temporary scenario assumptions, not vetted source data. US Magnesium-type gains appear as structural baseline gains already realized.</div>`);

replaceRegex(/<div class="data-feed-box">[\s\S]*?<\/div>\n<\/div>\n<\/div>\n\n<div class="chart-area">/,
`<div class="data-feed-box">
<strong>&#128225; Real-Time Data Feeds:</strong> Lake elevation from <a class="ext-link" href="https://waterservices.usgs.gov/nwis/iv/?sites=10010000&parameterCd=62614&format=json&period=P1D" target="_blank" rel="noopener noreferrer">USGS Gage 10010000</a> (Saltair). PDO index from <a class="ext-link" href="https://www.ncei.noaa.gov/pub/data/cmb/ersst/v5/index/" target="_blank" rel="noopener noreferrer">NOAA NCEI ERSST v5</a>. ENSO (ONI) from <a class="ext-link" href="https://origin.cpc.ncep.noaa.gov/products/analysis_monitoring/ensostuff/ONI_v5.php" target="_blank" rel="noopener noreferrer">CPC ONI</a>. Climate: <a class="ext-link" href="https://open-meteo.com/" target="_blank" rel="noopener noreferrer">Open-Meteo</a> (ERA5-Land ET&#8320; monthly climatology).
</div>
<div class="data-vintage" id="dataVintage">
<h4>Data Vintage</h4>
<div class="dv-row"><span>USGS Saltair elevation</span><strong id="dvUSGS">Live fetch pending; fallback 4,192.1 ft NGVD29</strong></div>
<div class="dv-row"><span>CPC ENSO discussion</span><strong>2026-05-14; El Nino Watch</strong></div>
<div class="dv-row"><span>CPC strength probabilities</span><strong>May 2026 table; no peak category &gt;37%</strong></div>
<div class="dv-row"><span>NCEI PDO</span><strong>ERSST v5 complete through Apr 2026 in review draft</strong></div>
<div class="dv-row"><span>Mode</span><strong id="dvMode">Using fallback constants until live fetch succeeds</strong></div>
</div>
</div>
</div>

<div class="chart-area">`);

replaceRegex(/<div class="overview-kpis">[\s\S]*?<\/div>\n<\/div>\n<\/div>\n<\/div>/,
`<div class="overview-kpis">
<div class="overview-kpi"><h4>Total Action</h4><div class="kpi-val" id="overviewTotal">0</div><div class="stat-sub">kAf/yr</div></div>
<div class="overview-kpi"><h4>2034 Milestone</h4><div class="kpi-val" id="overview2034">4189.4</div><div class="stat-sub">ft NGVD29</div></div>
<div class="overview-kpi"><h4>2036 Risk Horizon</h4><div class="kpi-val" id="overview2036">4188.6</div><div class="stat-sub">ft NGVD29</div></div>
<div class="overview-kpi"><h4>Gap to Target</h4><div class="kpi-val" id="overviewGap">9.4</div><div class="stat-sub">ft below 4,198</div></div>
</div>
</div>
</div>
</div>`);

replaceRegex(/const finalElev=forecast\[forecast\.length-1\];\n  const gap=Math\.max\(0,HEALTHY-finalElev\);\n  document\.getElementById\('overview2034'\)\.textContent=finalElev\.toFixed\(1\);/,
`const milestoneIdx=FCST_YEARS.indexOf(MILESTONE_YEAR);
  const finalElev=forecast[forecast.length-1];
  const milestoneElev=milestoneIdx>=0?forecast[milestoneIdx]:finalElev;
  const gap=Math.max(0,HEALTHY-finalElev);
  document.getElementById('overview2034').textContent=milestoneElev.toFixed(1);
  document.getElementById('overview2036').textContent=finalElev.toFixed(1);`);

replaceRegex(/const finalElev=forecast\[forecast\.length-1\];\n\n  lastTarbMean=getTarbMean/,
`const finalElev=forecast[forecast.length-1];
  const milestoneIdx=FCST_YEARS.indexOf(MILESTONE_YEAR);
  const milestoneElev=milestoneIdx>=0?forecast[milestoneIdx]:finalElev;

  lastTarbMean=getTarbMean`);
replaceAll("document.getElementById('proj2034').textContent=finalElev.toFixed(1);", "document.getElementById('proj2034').textContent=finalElev.toFixed(1);");

replaceRegex(/<div class="stat-card"><h4>2036 Risk Horizon<\/h4><div class="stat-val" id="proj2034">4188\.5<\/div><div class="stat-sub">Feet NGVD29<\/div><\/div>/,
`<div class="stat-card"><h4>2034 Milestone</h4><div class="stat-val" id="proj2034Milestone">4189.4</div><div class="stat-sub">Feet NGVD29</div></div>
<div class="stat-card"><h4>2036 Risk Horizon</h4><div class="stat-val" id="proj2034">4188.6</div><div class="stat-sub">Feet NGVD29</div></div>`);
replaceAll("document.getElementById('proj2034').textContent=finalElev.toFixed(1);", "document.getElementById('proj2034').textContent=finalElev.toFixed(1); if(document.getElementById('proj2034Milestone')) document.getElementById('proj2034Milestone').textContent=milestoneElev.toFixed(1);");

replaceRegex(/<div id="copyright-notice"[\s\S]*?<\/div>\n\n<\/div>\n\n<!-- ===================== DAMPED OSCILLATOR/,
`<div id="copyright-notice" style="border-top:2px solid #336699;margin-top:40px;padding:20px 30px 10px 30px;font-family:'Segoe UI',Arial,sans-serif;font-size:13px;color:#555;line-height:1.6">
  <p style="font-weight:bold;color:#333;font-size:14px;margin-bottom:8px">&copy; 2024&ndash;2026 Ian Harvey. All Rights Reserved.</p>
  <p><strong>Great Salt Lake Forced Damped Oscillator Simulator v14.1 Final Review</strong><br>Author: Ian Harvey &nbsp;|&nbsp; GreatSaltRiver.org<br>Created with AI-assisted research, planning, and coding tools, including Perplexity AI and OpenAI Codex.</p>
  <p>This work&mdash;including all original text, code, analytical framework, data compilations, visualizations, and interactive elements&mdash;is the intellectual property of Ian Harvey.</p>
  <p><strong>Data Sources &amp; Attribution:</strong> USGS lake elevation records (NGVD29); NOAA NCEI ERSST v5 (PDO); NOAA CPC ENSO outlooks; USGS Bathymetry (Baskin 2005, 2006); Great Salt Lake Strike Team 2026 Data &amp; Insights Summary; Tarboton elevation&ndash;volume relationships; ARTMIP atmospheric-river catalogues pending Chikamoto catalog selection; Open-Meteo (ERA5-Land ET&#8320; monthly climatology).</p>
  <p><strong>License:</strong> <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons Attribution 4.0 International (CC BY 4.0)</a> for non-commercial scientific, educational, and policy purposes.</p>
  <p><strong>Suggested Citation:</strong><br>Harvey, I. (2026). <em>Great Salt Lake Forced Damped Oscillator Simulator, v14.1 final review.</em> GreatSaltRiver.org.</p>
  <p style="font-size:11px;color:#888">AI Disclosure: AI tools assisted with research synthesis, code integration, review, and implementation planning. Final scientific interpretation, model design, parameter selection, and authorship remain Ian R. Harvey's.</p>
</div>

</div>

<!-- ===================== DAMPED OSCILLATOR`);

replaceRegex(/<div class="wp-frame" id="wpContent">[\s\S]*?<\/div>\n<div class="references">\n<h3>References &mdash; White Paper<\/h3>[\s\S]*?<\/div>\n<footer>&copy; 2024&ndash;2026 Ian R\. Harvey\. All Rights Reserved\.<\/footer>\n<\/div>\n\n<!-- ===================== GLOSSARY/,
`<div class="wp-frame" id="wpContent">
<h2>Great Salt Lake Water Level Forecasting via RC Circuit Analogy</h2>
<p><strong>Subtitle:</strong> A Lag-Corrected, Teleconnection-Informed Framework for Deterministic Planning</p>
<p><strong>Author:</strong> Ian R. Harvey</p>
<p><strong>Status:</strong> v14.1 final review version. Prepared as a foundation document for climatology/hydrology review and companion policy/education translation.</p>
<p><strong>Data vintage:</strong> May 22, 2026. Current-data statements should be refreshed before public or scientific circulation.</p>
<p style="font-size:0.86em;color:var(--text-sec)"><strong>AI assistance note:</strong> Earlier research and drafting support included Perplexity AI. OpenAI Codex assisted with private code review, integration planning, implementation planning, and drafting of this v14.1 review document. Final scientific interpretation, model choices, and authorship remain Ian R. Harvey's.</p>
<div class="download-box" onclick="window.open('GSL-RC-White-Paper-v14.1-final-review.pdf','_blank')"><h3>&#128196; Open Final Review PDF</h3><p>Formatted manuscript with figures and captions.</p></div>
<div class="download-box" onclick="window.open('GSL-RC-White-Paper-v14.1-final-review.docx','_blank')"><h3>&#128221; Open Final Review DOCX</h3><p>Word review file: Times New Roman 12 pt body, justified paragraphs.</p></div>

<h3>Abstract</h3>
<p>Water managers responsible for Great Salt Lake planning face a severe information disadvantage: most available forecasts are either short-horizon hydrologic outlooks or retrospective stochastic envelopes built from historical analogs. The RC circuit framework adds a forward-looking physical component by treating the watershed as a multi-stage, damped hydrologic transfer function driven by quasi-decadal Pacific climate variability and modified by episodic atmospheric-river delivery.</p>
<p>The approach is not a claim of high-certainty long-range prediction. It is a claim that known Pacific regime information, lagged through physically interpretable watershed storage, can provide planning skill that hindsight-only stochastic methods cannot supply. The evidentiary claim is cross-validated against three independent views of annual lake-volume change: front-end inflow/evaporation accounting in the style used by Great Salt Lake Strike Team planning, USGS/Tarboton elevation-area-volume data published through HydroShare, and directly measured annual delta-V used to build the damped oscillator model.</p>

<h3>Core Scientific Claim</h3>
<p>The RC model is more than curve fitting, and certainly more than simple extrapolation. It does not merely extend the last slope of lake elevation into the future. It asserts a causal structure, exposes physical parameters, predicts lagged timing, and can fail in specific ways if the expected delayed response does not appear.</p>
<p>Fourier/power-spectrum analysis provides an important reason to take the hypothesis seriously. In the pre-1977 record, lake-volume variability is spread across a broad multi-decadal band. In the post-1977 annual delta-V record, after the modern structural regime shift, the spectrum sharpens into a pronounced quasi-decadal peak near eight years. That peak does not mean the lake mechanically repeats itself every eight years; it means annual change in lake volume contains concentrated energy at a period consistent with a forced, damped system responding to low-frequency climate structure.</p>

<h3>Lag Accounting</h3>
<table>
<tr><th>Lag number</th><th>Meaning</th><th>Use</th></tr>
<tr><td>About 1 year</td><td>ENSO-to-precipitation timing for some northern Utah teleconnection pathways</td><td>Seasonal/near-term precipitation opportunity framing</td></tr>
<tr><td>About 3 years</td><td>Precipitation or snowpack anomaly to visible GSL elevation response</td><td>Public-facing water now, lake later lag</td></tr>
<tr><td>3 + 3 = 6 years</td><td>Pacific QDO/PDO to precipitation plus precipitation to GSL chain</td><td>Explanatory text and figure captions</td></tr>
<tr><td>7&ndash;8 years</td><td>Cross-correlation/regression optimum depending on variable and method</td><td>Statistical validation and model fitting</td></tr>
<tr><td>About 9.3 years</td><td>Full RC transfer-function/cascade framing</td><td>Complete-system RC analogy</td></tr>
</table>

<h3>Atmospheric-River Data Requirement</h3>
<p>This paper should not ask Prof. Chikamoto to review a live simulator calibration. It should ask him to identify and validate the atmospheric-river catalog and stratification method used for the scientific paper. Likely candidate sources include ARTMIP, especially DOI-backed Tier 1 MERRA-2 catalogues distributed through UCAR/NCAR data services. Because federal research data infrastructure can change, the project should freeze the selected product, DOI, event definition, spatial mask, season, period of record, local archived subset, checksum, and processing code.</p>

<h3>Draft Figures</h3>
<figure class="wp-figure"><img src="../imported-email/attachments/2.10/c249614b.png" alt="Lag-corrected stochastic fan"><figcaption><strong>Figure 1.</strong> Lag-corrected stochastic forecast fan showing Stage 1 (near-term precipitation, snowpack, streamflow, and reservoir-storage response) and Stage 2 (delayed Great Salt Lake elevation response after basin routing, groundwater retention, baseflow delivery, and lake integration). Takeaway: a wet 2026&ndash;27 signal can be real and still fail to appear in lake elevation until approximately 2029&ndash;2031.</figcaption></figure>
<figure class="wp-figure"><img src="../imported-email/attachments/2.12/25dcca36.png" alt="PDO lag verification"><figcaption><strong>Figure 2.</strong> PDO lag-verification comparison showing why zero-lag annual correlation is the wrong diagnostic for a decadal hydrologic transfer function.</figcaption></figure>
<figure class="wp-figure"><img src="../imported-email/attachments/2.14/cfcf2f02.png" alt="PDO and Great Salt Lake lag correlation sensitivity"><figcaption><strong>Figure 3.</strong> Sensitivity of PDO-GSL correlation to lag choice. The takeaway is not that there is a single magic lag, but that statistically meaningful coherence appears when the lag structure matches the physical storage pathway.</figcaption></figure>
<figure class="wp-figure"><img src="../imported-email/attachments/2.16/c2b947db.png" alt="Snow fraction transition"><figcaption><strong>Figure 4.</strong> Declining snow fraction in the Great Basin recharge system. The scientific takeaway is that precipitation character matters: a shift from snow-dominated storage and melt toward rain-dominant or pulse-dominant delivery can reduce capture efficiency even when total precipitation does not decline.</figcaption></figure>
<figure class="wp-figure"><img src="../imported-email/attachments/2.18/6d0dd7d6.png" alt="PDO ENSO atmospheric-river matrix"><figcaption><strong>Figure 5.</strong> Conceptual PDO x ENSO atmospheric-river matrix. The figure expresses the working hypothesis that ENSO affects episodic moisture supply while PDO-indexed atmospheric bridge geometry affects whether that moisture is routed efficiently toward California and the Great Basin. Numeric multipliers remain provisional until tied to a vetted atmospheric-river catalog.</figcaption></figure>
<figure class="wp-figure"><img src="../imported-email/attachments/2.20/72d49389.png" alt="Long-range PDO opportunity/risk schematic"><figcaption><strong>Figure 6.</strong> Conceptual long-range PDO opportunity/risk schematic. This figure is not an elevation forecast. It should use distinct visual cues for observed/current PDO/ENSO windows, near-term forecast assumptions, provisional scenarios, and long-range conceptual regime windows.</figcaption></figure>
</div>
<footer>&copy; 2024&ndash;2026 Ian R. Harvey. All Rights Reserved.</footer>
</div>

<!-- ===================== GLOSSARY`);

replaceRegex(/<div class="glossary-item"><dt>ENSO \(El Ni&ntilde;o&ndash;Southern Oscillation\)<\/dt><dd>[\s\S]*?<\/dd><\/div>\n<div class="glossary-item"><dt>Teleconnection/,
`<div class="glossary-item"><dt>ENSO (El Ni&ntilde;o&ndash;Southern Oscillation)</dt><dd>Interannual climate pattern driven by tropical Pacific sea-surface temperature. In the v14.1 scientific framing, ENSO affects episodic atmospheric-river probability and intensity; it is not treated as a simple annual snowpack knob.</dd></div>
<div class="glossary-item"><dt>Atmospheric River</dt><dd>A long, narrow corridor of concentrated water vapor transport. In this simulator, atmospheric-river sequences are the hypothesized pathway by which ENSO can produce episodic Great Basin recharge opportunities.</dd></div>
<div class="glossary-item"><dt>Atmospheric Bridge Geometry</dt><dd>The spatial arrangement of jet-stream, pressure, and vapor-transport patterns that determines whether a tropical Pacific signal is routed toward California, the Sierra Nevada, the Wasatch, and the Great Basin interior.</dd></div>
<div class="glossary-item"><dt>Teleconnection`);

replaceRegex(/<div class="card"><h3>v14\.1 Final Review[\s\S]*?<\/ul><\/div>/,
`<div class="card"><h3>v14.1 Final Review — May/June 2026 candidate</h3><ul style="margin-left:20px;line-height:1.7">
<li>Extends the main forecast arrays, uncertainty cone, annual accounting, and Tarboton comparison arrays to the 2036 risk horizon while preserving the 2034 milestone.</li>
<li>Adds editable annual accounting overrides; edited year/lever cells immediately drive all downstream forecast output and are visibly marked.</li>
<li>Adds a Data Vintage panel for USGS Saltair, CPC ENSO, CPC strength probabilities, and NCEI PDO assumptions.</li>
<li>Embeds maintenance guardrails for future human and AI contributors.</li>
<li>Updates citation language to include OpenAI Codex as AI assistance while preserving Ian R. Harvey as author.</li>
<li>Promotes the final v14.1 scientific white paper PDF/DOCX and updates figure captions to distinguish forecast-grade charts from conceptual regime timing.</li>
</ul></div>`);

// If the v14 history card still exists, add v14.1 ahead of it.
replaceRegex(/<h2>Version History<\/h2>\n<div class="card"><h3>v14\.1 Final Review/,
`<h2>Version History</h2>
<div class="card"><h3>v14.1 Final Review`);
if (!html.includes('v14.1 Final Review — May/June 2026 candidate')) {
  replaceRegex(/<h2>Version History<\/h2>/, `<h2>Version History</h2>
<div class="card"><h3>v14.1 Final Review — May/June 2026 candidate</h3><ul style="margin-left:20px;line-height:1.7">
<li>Extends the main forecast arrays, uncertainty cone, annual accounting, and Tarboton comparison arrays to the 2036 risk horizon while preserving the 2034 milestone.</li>
<li>Adds editable annual accounting overrides; edited year/lever cells immediately drive all downstream forecast output and are visibly marked.</li>
<li>Adds a Data Vintage panel for USGS Saltair, CPC ENSO, CPC strength probabilities, and NCEI PDO assumptions.</li>
<li>Embeds maintenance guardrails for future human and AI contributors.</li>
<li>Updates citation language to include OpenAI Codex as AI assistance while preserving Ian R. Harvey as author.</li>
<li>Promotes the final v14.1 scientific white paper PDF/DOCX and updates figure captions to distinguish forecast-grade charts from conceptual regime timing.</li>
</ul></div>`);
}

replaceAll('<h2>GSL Simulator v14.1 &mdash; Scenario Report</h2>', '<h2>GSL Simulator v14.1 &mdash; Scenario Report</h2>');

replaceRegex(/document\.getElementById\('liveTime'\)\.textContent='ft NGVD29 \\u2022 '\+dt\.toLocaleDateString\(\)\+' '\+dt\.toLocaleTimeString\(\[\],\{hour:'2-digit',minute:'2-digit'\}\);/,
`document.getElementById('liveTime').textContent='ft NGVD29 \\u2022 '+dt.toLocaleDateString()+' '+dt.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
        if(document.getElementById('dvUSGS'))document.getElementById('dvUSGS').textContent=Number(val).toLocaleString(undefined,{minimumFractionDigits:1})+' ft NGVD29, '+dt.toLocaleDateString();
        if(document.getElementById('dvMode'))document.getElementById('dvMode').textContent='Live USGS value loaded; climate/PDO/ENSO text uses stated vintage';`);

replaceRegex(/document\.getElementById\('liveTime'\)\.textContent='ft NGVD29 \(cached\)';/,
`document.getElementById('liveTime').textContent='ft NGVD29 (cached)';
      if(document.getElementById('dvMode'))document.getElementById('dvMode').textContent='USGS live fetch failed; using fallback constants';`);

replaceAll('RC v10.4', 'RC v14.1');
replaceAll('RC Circuit v10.4', 'RC Circuit v14.1');

fs.writeFileSync(htmlPath, html);
console.log(`Updated ${htmlPath}`);
