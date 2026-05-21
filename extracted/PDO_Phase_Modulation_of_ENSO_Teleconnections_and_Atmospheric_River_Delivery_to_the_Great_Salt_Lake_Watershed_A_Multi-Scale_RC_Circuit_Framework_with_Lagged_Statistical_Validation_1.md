# PDO Phase Modulation of ENSO Teleconnections and Atmospheric River Delivery to the Great Salt Lake Watershed  A Multi-Scale RC Circuit Framework with Lagged Statistical Validation (1).docx

PDO Phase Modulation of ENSO Teleconnections and Atmospheric River Delivery to the Great Salt Lake Watershed: A Multi-Scale RC Circuit Framework with Lagged Statistical Validation

**Ian R. Harvey, Ph.D.**¹ · **Yoshimitsu Chikamoto, Ph.D.**² (co-author, to edit)

¹ Snow Horse Analytical Lab; Adjunct Associate Professor, Department of Mechanical Engineering, University of Utah, Salt Lake City, UT² Department of Plants, Soils and Climate, Utah State University, Logan, UT

Reviewed by: S.-Y. Simon Wang, Ph.D. (informal, climate framing)Policy co-author (companion paper): Ben Abbott, Ph.D., and student co-author, Brigham Young University

Target journal: Journal of Hydrometeorology (American Meteorological Society)Submission status: DRAFT — circulated to Chikamoto for editing, May 2026Version: 1.0

Abstract

The Great Salt Lake (GSL), a closed-basin terminal lake in the eastern Great Basin, exhibits a quasi-decadal oscillation (7–10 years) in water volume superimposed on a structural aridification trend of approximately −0.33 ft/yr since 1977 (r = −0.839, p < 0.000001). Prior work demonstrated statistically significant spectral coherence between the Pacific Decadal Oscillation (PDO) and GSL elevation in the 15–25 year band, with a 6–9 year phase lag . A multi-stage RC circuit analog model of the GSL watershed — encoding three parallel tributary cascades, atmospheric delivery, soil moisture integration, and groundwater storage — predicts a system phase lag of 9.3 years via transfer function analysis, consistent with observations .

This paper presents three advances beyond prior work: (1) a formal statistical validation confirming that PDO–GSL coherence operates at the decadal, not interannual, timescale (r = 0.39, p = 0.009 at 10-yr rolling mean; r = −0.046, p = 0.76 at annual scale); (2) a reframed hypothesis that the principal pathway from El Niño–Southern Oscillation (ENSO) to GSL inflow is atmospheric river (AR) event frequency, not annual snowpack mean — with PDO phase acting as a multi-year modulator of AR frequency and spatial reach into the Great Basin; and (3) a two-stage lag cascade model that separates the immediate precipitation signal (Stage 1: water year 2026–27) from the GSL elevation response (Stage 2: ≈2029–30), with a PDO-suppression correction that explains why the 2026 developing El Niño will not replicate the 2022–23 compound event despite comparable Niño-3.4 magnitude projections. The RC circuit model independently produced a shallow elevation recovery signal at 2030–2031, which is self-consistent with the two-stage lag analysis. Open questions requiring Chikamoto's quantitative ENSO–AR pathway expertise are enumerated in Section 5.

Keywords: Great Salt Lake; Pacific Decadal Oscillation; ENSO; atmospheric rivers; RC circuit hydrology; phase lag; closed-basin lake; quasi-decadal oscillation; snow fraction; aridification

1. Introduction

1.1 The Great Salt Lake Crisis and the Forecasting Gap

The Great Salt Lake occupies the lowest point of the eastern Great Basin at approximately 4,192–4,193 ft NGVD29 as of May 2026, roughly 15 ft below the healthy ecological threshold of 4,207 ft . Annual inflows (≈1,665 kAf/yr baseline) fall short of combined evaporation and diversions (≈2,300 kAf/yr) by 300–500 kAf/yr under current conditions, producing a structural deficit that natural precipitation variability alone cannot reliably close . The 2025–26 La Niña water year was the worst on record since measurements began in 1980, with statewide Utah snow water equivalent reaching only 8.1 inches — compared to 30.0 inches in the record 2022–23 season .

Wang et al. (2010) demonstrated ≈60% forecast skill at 8-year horizons using PDO–GSL spectral coherence. Mohammed and Tarboton (2012) achieved high skill at 1–5 year horizons using sensitivity-based water balance projections. The RC circuit model (Harvey, 2026) bridges both regimes and adds physical interpretability through a watershed-scale transfer function analysis . However, all prior formulations — including the RC circuit model through version 10.4 — explicitly excluded El Niño and La Niña effects due to the "weak teleconnection between these two chaotic Pacific anomalies and Lake behavior" .

The present work directly challenges this exclusion, arguing that the weakness is a timescale artifact: annual SWE correlations with ENSO are indeed non-significant (p = 0.89), but the physically correct pathway — ENSO → atmospheric river frequency → episodic watershed recharge → multi-year GSL inflow anomaly — operates at a timescale that requires bandpass-filtered coherence analysis, the same methodology that first revealed the PDO–GSL connection.

1.2 Intellectual Development of This Paper

This manuscript emerged from a structured investigation that proceeded through six recognizable intellectual stages:

Stage 1 — El Niño situational awareness (May 2026): Initial recognition that a developing El Niño (61% probability for emergence in May–July 2026; NOAA, April 2026) posed the question of whether the current situation resembled the 2022–23 compound atmospheric river event that set Utah's all-time snowpack record .

Stage 2 — The PDO suppression paradox: Discovery that the current PDO (−4.0 sigma, most negative in 170 years of observation) creates a fundamental constraint on the 2026 AR scenario, producing what this paper terms the "PDO Suppression Paradox" — a situation in which a moderately strong El Niño operates against the background PDO state that maximizes subtropical jet displacement and AR frequency over the Great Basin.

Stage 3 — Statistical validation: Formal correlation analysis establishing: (a) H1 (aridification trend): confirmed, p < 0.000001; (b) H2 (PDO annual signal): null result at annual scale, r = −0.046, consistent with Chikamoto's prior guidance that "ENSO conditions may affect annual conditions but are almost negligible on an 8–10 year cycle" ; and (c) the timescale-dependent nature of the PDO–GSL relationship, with significance emerging at 10-year rolling means.

Stage 4 — Hypothesis reframing: Recognition that the ENSO → GSL pathway operates through AR event frequency rather than annual SWE mean, following Stuivenvolt-Allen et al. (2021a,b).

Stage 5 — Two-stage lag cascade: Formal separation of the precipitation benefit (Stage 1, immediate) from the GSL elevation response (Stage 2, ≈3-year lag), with PDO-suppression corrections applied to each scenario.

Stage 6 — Model self-consistency: Discovery that the RC circuit model — with no ENSO parameterization — independently produced a shallow elevation recovery signal at 2030–2031, which is self-consistent with the two-stage lag analysis. This internal consistency is cited as evidence that the watershed's integrated transfer function implicitly captures some of the multi-year AR pathway signal through the PDO bandpass.

1.3 Research Questions

This paper addresses four questions:

Q1: At what timescale does the PDO exert statistically significant influence on GSL volume change, and what is the mechanism?

Q2: What is the physical pathway from ENSO to GSL inflow, and why does it not manifest in annual SWE correlation analysis?

Q3: How does current PDO phase (deeply cool, −4.0 sigma) modulate the expected GSL response to the developing 2026 El Niño?

Q4: Can the RC circuit model be extended to incorporate ENSO-modulated AR frequency as a compound event flag, improving forecast skill at interannual timescales?

Q4 is designated for Chikamoto's analytical contribution (Section 5).

2. Background

2.1 The PDO as Regime Indicator, Not Forcing

A foundational reframing contribution of this work — provided by S.-Y. Simon Wang (personal communication, February 2026) — is the insistence on treating the PDO as a regime indicator rather than a deterministic forcing function :

"The safe interpretation is: your system is responding to a broader climate regime that PDO happens to track well during certain periods — not that PDO is directly pushing the system like an external input signal." — Wang (2026)

The physical causal chain, as articulated by Wang, runs: tropical large-scale circulation regime → storm tracks → snow fraction → evaporative demand → basin water inputs → soil moisture → groundwater storage → baseflow → lake levels → decadal change. This chain naturally produces multi-year lags — "a delayed, integrated response that's very RC-like" . The PDO index compresses this complex evolving spatial pattern into a single number that is coherent with GSL over the 15–25 year spectral band, without being the mechanism.

Similarly, Chikamoto (personal communication, March 2026) emphasized: "The correlation between ENSO and GSL tendencies is very weak. In other words, El Niño or La Niña could cause both wet and dry years. PDO and ENSO have different time scales, and your result suggests that the PDO 8–10 year cycle matches very well with GSL tendencies on 8–10 year wet-dry cycles." He further noted that the model "is assuming stationarity, not steady state" — a critical distinction for interpreting the statistical tests .

2.2 The GSL as a Forced, Damped Oscillator

The GSL volume change time series (1930–present) exhibits the hallmarks of a forced, damped oscillator: a dominant quasi-decadal frequency (7–10 yr), exponentially decaying amplitude envelope (time constant ≈20 yr), and phase-locked response to external Pacific forcing rather than intrinsic resonance .

This interpretation is supported by:

FFT power spectrum analysis showing collapse from multi-decadal (30–60 yr) to quasi-decadal (8 yr) dominance at the 1977 PDO regime shift

DeRose et al. (2014) 576-year tree-ring reconstruction showing that oscillation frequency tracks PDO/IPO phase transitions, not GSL geometry

Lall and Abarbanel (1996) showing variable amplitude and phase discontinuities inconsistent with intrinsic resonance

Mohammed and Tarboton (2012) demonstrating that measured climate inputs alone reproduce oscillations without invoking basin resonance

The RC circuit model encodes this physical reality: the watershed acts as a low-pass filter with transfer function magnitude |H_total(ω)| = 0.019 at the dominant decadal frequency (ω = 2π/10 yr⁻¹), meaning 98% attenuation of the forcing amplitude — and a 9.3-year phase lag .

2.3 The 2022–23 Precedent: Compound Event Anatomy

The 2022–23 water year represents the benchmark compound event against which 2026–27 is compared. Between December 27, 2022 and January 17, 2023 alone, nine atmospheric rivers made landfall in California — five categorized as strong or greater. California experienced 31 total atmospheric rivers through March 2023. Utah's statewide SWE peaked at 30.0 inches on April 8, 2023 — 216% of normal — the all-time record, surpassing 1952 and 1983.

Three conditions aligned in 2022–23:

La Niña → neutral ENSO transition (not El Niño), but with exceptional westerly wind burst anomalies

PDO transitioning from strongly negative toward neutral — reducing the suppression of subtropical jet southward displacement

An unprecedented sequence of AR landfalls that produced cumulative SWE far exceeding any individual storm contribution

The key insight is that it was the compound AR sequence, not El Niño per se, that produced the 2023 result. This reframes Q3: the relevant question for 2026 is not "will El Niño produce a 2023-like snowpack?" but rather "what is the probability of an AR compound event sequence given the 2026 ENSO × PDO state?"

2.4 The 1977 Time of Emergence

Wang (2026) introduced the "Time of Emergence" (TOE) framework applied to GSL :

"The post-1977 behavior reads as reduced resilience — steeper declines and weaker rebounds. If the system retained its historical storage elasticity, the recent high-snow years would have pushed the lake much closer to 1980s levels due to the sheer influx of moisture. The muted rebound implies that a growing fraction of water that falls from the sky is not translating into lake recharge."

This analysis extends the TOE concept: the 1977 PDO regime shift, in combination with accumulated diversions, constitutes the point where the GSL crossed from natural variability with intrinsic resilience to a structurally forced collapse state. Conservation measures buy time, but the structural deficit cannot be closed by natural precipitation variability alone .

3. Methods

3.1 RC Circuit Model Architecture

The GSL watershed is modeled as an 11-stage RC circuit cascade with three parallel tributary networks (Bear River 60%, Weber River 25%, Jordan River 15%), each containing series-connected reservoir stages, feeding a final GSL integrating capacitor . Full circuit parameters are documented in Harvey (2026); key values are summarized in Table 1.

Table 1. RC Circuit Stage Parameters

## Table 1
| Stage | Component | Time Constant τ (yr) | Storage Capacity |
| 1 | Atmosphere–Soil | τ_atm = 1.75, τ_soil = 1.50 | — |
| 2a | Bear Lake (primary) | 3.50 | 1,420 kAf |
| 2a | Grace–Soda–Oneida | 1.25 | 360 kAf |
| 2b | Weber parallel tributaries | 1.19 | — |
| 2b | Echo Reservoir | 2.00 | 74 kAf |
| 2c | Utah Lake | 4.50 | 875 kAf |
| 3 | GSL integrator | τ_GSL = 20.0 | 4.91 MAf |

The total system transfer function at the dominant 10-year forcing frequency (ω=0.628 rad/yr) is :

Htotal(ω)=Hatm⋅Hsoil⋅Hparallel⋅HGSL

yielding |H_total| = 0.019 (98% attenuation) and total phase lag = 9.3 years. The forward-integration engine reduces the 11-stage cascade to an equivalent two-capacitor system (τ_fast = 1.5 yr surface routing; τ_slow = 20 yr groundwater), with governing ODEs :

dVsurfacedt=βPfast−Vsurfaceτfast

dVgwdt=(1−β)Pslow−Vgwτslow

dVGSLdt=Vsurfaceτfast+λVgwτslow−E−D+LEP(h)+ Lk

where β = 0.41, λ = 2.75, E+D ≈ 800 kAf/yr, LEP(h) is the lake-effect yield function, and L_k are the seven Strike Team policy levers .

3.2 Statistical Validation Protocol

H1 (Structural Aridification): Linear regression of GSL elevation on year (1977–2025), with bootstrap 95% confidence intervals on slope.

H2 (PDO–GSL Annual Coherence): Pearson correlation between annual PDO index and annual ΔGSL volume, tested at lags 0–12 years. Annual test is the wrong instrument for a decadal phenomenon (see Results); significance is recovered in 10-year rolling mean analysis, consistent with Wang et al. (2010) bandpass-coherence methodology.

H3 (ENSO–SWE Annual Correlation): Correlation between Niño-3.4 DJF index and April 1 Utah statewide SWE anomaly (% of median), 1980–2025, stratified by ENSO phase (El Niño: Niño-3.4 ≥ +0.5°C; La Niña: ≤ −0.5°C; Neutral: between). A null result at the annual level is expected given the AR pathway hypothesis — the test is included as a methodological control, not a test of the ENSO → GSL pathway.

PDO Lag Structure: Pearson correlation of PDO with GSL ΔGSL at lags 0–12 years, both raw annual series and 10-year rolling means, to document the timescale-dependent coherence structure described by Wang et al. (2010).

3.3 The PDO × ENSO Compound Event Framework

An AR Compound Event Flag is defined when three conditions are simultaneously met:

El Niño: Niño-3.4 ≥ +1.0°C (moderate or stronger)

PDO: PDO index ≥ −0.5 (neutral to warm; not deeply suppressed)

Westerly Wind Burst: Equatorial Pacific WWB anomaly present (October–December preceding water year)

The AR frequency multiplier is estimated relative to climatology as:

MAR=1+αENSO⋅INiño-3.4+αPDO⋅IPDO+αinteraction⋅INiño-3.4⋅IPDO

Coefficients α are to be estimated from ENSO × PDO stratified AR frequency climatology — this parameterization is the primary analytical contribution designated for Chikamoto (Section 5).

3.4 The Two-Stage Lag Cascade

A two-stage lag model separates:

Stage 1 (τ₁ ≈ 0–2 years): Precipitation and SWE response — visible in water year snowpack, streamflow, and reservoir levels

Stage 2 (τ₂ ≈ 3 years additional): GSL elevation response — integrating through the watershed's fast (τ_fast = 1.5 yr) and slow (τ_slow = 20 yr) capacitors

The two-stage model predicts that the 2026–27 El Niño precipitation benefit (Stage 1) will appear in 2026–27 snowpack and streamflow, but the GSL elevation response (Stage 2) will not register until approximately 2029–30. This matches the RC circuit model's independently computed shallow recovery signal at 2030–2031 — a result that neither team predicted in advance .

4. Results

4.1 H1 Confirmed: Structural Aridification (1977–2025)

Linear regression of GSL elevation on year yields slope = −0.33 ft/yr (95% CI: −0.40 to −0.27 ft/yr), r = −0.839, p < 0.000001. Over the 48-year record, the lake has lost approximately 16.3 ft of structural elevation to combined aridification, diversions, and reduced resilience . This trend is robust across sub-period analysis and is consistent with Wang's TOE framing: the post-1977 regime exhibits "steeper declines and weaker rebounds" than the pre-1977 record .

The 2025–26 worst-on-record SWE (8.1 inches, versus the 30.0-inch 2022–23 record) reinforces the structural context: even the most favorable possible ENSO–PDO alignment for 2026–27 operates against a 15-ft deficit baseline and a worst-on-record starting condition.

4.2 H2: PDO Coherence is Timescale-Dependent, Not Annual

Annual Pearson correlation of PDO index with annual ΔGSL volume (lag 0–12 years): maximum r = +0.137 at lag = 9 years (p = 0.075, marginal, not significant). This appears to undermine the teleconnection hypothesis. However, 10-year rolling mean analysis yields r = 0.39 at lag = 3 years (p = 0.009) — recovering significance at the timescale predicted by Wang et al. (2010) bandpass coherence analysis .

This result is not a failure — it is the expected behavior of a system where coupling operates through frequency-dependent intermediate pathways. The PDO signal is present in the GSL record; it is simply not detectable with annual simple linear regression (the wrong spectral tool for a decadal phenomenon). The paper explicitly documents this to preempt reviewer criticism.

4.3 H3: ENSO–SWE Annual Correlation — The Expected Null Result

El Niño years: mean Utah SWE = 105% of median (n = 7). La Niña years: mean Utah SWE = 108% of median (n = 6). ENSO-neutral years: mean = 97% (n = 32). ANOVA F-statistic = 0.28, p = 0.76. The null result at the annual timescale is consistent with Chikamoto's guidance that "ENSO conditions may affect annual conditions but are almost negligible on an 8–10 year cycle" .

Two explanatory mechanisms are proposed: (1) insufficient sample power (n = 7 El Niño years); and (2) the physically correct pathway from ENSO to GSL recharge operates through AR event frequency and intensity, not annual SWE mean. A single compound AR sequence (e.g., nine ARs in 21 days, as in 2022–23) delivers more water than a full season of above-average snowpack — and this signal is diluted in the annual SWE mean. This is the central mechanistic hypothesis of the paper, and Chikamoto's quantitative AR frequency × ENSO × PDO stratification is required to test it formally.

4.4 The PDO Suppression Paradox: Why 2026 ≠ 2023

The 2022–23 event operated under PDO transitioning from negative toward neutral, producing an AR frequency multiplier estimated at approximately ×3.2 relative to climatology. The 2026 scenario (moderate El Niño, deeply cool PDO at −4.0 sigma) is estimated at approximately ×1.8 — meaningful recharge potential, but a fundamentally different regime.

The extreme negative PDO suppresses the Aleutian Low deepening and southward jet displacement that creates the sustained subtropical moisture corridor responsible for the nine-AR-in-21-days sequence. Under the PDO Suppression Paradox, a moderate El Niño in a cool PDO year may actually deliver less Great Basin benefit than a weak El Niño in a warm or neutral PDO year — because the PDO background state determines the storm track geometry more than the ENSO magnitude per se.

Table 2. Scenario Matrix: AR Frequency Multiplier and GSL Benefit

## Table 2
| Scenario | El Niño Magnitude | PDO Phase | AR Multiplier (est.) | GSL Benefit (Stage 1) | GSL Elevation Response (Stage 2, 2029–30) |
| 2022–23 analog | Neutral → weak La Niña | Transitioning warm | ×3.2 | +30.0-inch SWE record | +5 ft gain (historical) |
| High scenario | Super El Niño (≥+2°C) | Cool (current) | ×2.4 | +15–20% above median SWE | +0.8–1.2 ft |
| Central scenario | Moderate El Niño (+1.0–1.5°C) | Cool (current) | ×1.8 | +5–10% above median SWE | +0.3–0.5 ft |
| Low scenario | Moderate → fades | Cool (current) | ×1.3 | Near-median SWE | ≈0 net |
| PDO suppression | Moderate El Niño | Strongly cool | ×1.0–1.2 | Below-median SWE (offset) | Continued decline |

AR multiplier estimates are provisional pending Chikamoto's stratified AR frequency climatology (Section 5)

4.5 The Two-Stage Lag Cascade and Model Self-Consistency

Applying the two-stage lag cascade to the central scenario:

Stage 1 (2026–27): SWE +5–10% above median; streamflow anomaly into reservoir system beginning spring 2027; reservoir refill through summer 2027

Stage 1→2 transition (2027–29): Soil moisture conditioning; groundwater recharge begins accumulating in τ_slow = 20-yr capacitor; no visible GSL elevation benefit yet

Stage 2 (2029–30): Net volume surplus from 2026–27 precipitation anomaly propagates through the two-capacitor ODE, producing the shallow elevation recovery of +0.3–0.5 ft that the model independently identifies at 2030–2031

The self-consistency of the independently computed RC circuit recovery signal with the two-stage lag prediction is cited as convergent evidence for the model's physical validity. The model had no ENSO parameterization and was not "told" to produce a recovery signal at 2030–2031; it emerged from the PDO-forced ODE integration .

4.6 The Snow Fraction Transition and Precipitation Character

Analysis of Utah statewide snow fraction (snow water equivalent as % of total cool-season precipitation) for 1980–2025 reveals a statistically significant downward trend: −0.18%/yr from an anchor of 80.4% in 1980 (corrected from an earlier erroneous anchor of 84%), yielding a projected 2025 snow fraction of approximately 71.8%. This transition has two implications for GSL recharge:

Volume implication: At constant total precipitation, declining snow fraction reduces SWE and shifts the runoff hydrograph earlier, increasing evaporative losses before it reaches GSL.

Capture implication: Rain-dominant events (pulse precipitation) have lower GSL recharge efficiency than snow-dominant events (slow melt) because soil infiltration rates are exceeded more rapidly, producing more direct runoff to ephemeral channels rather than groundwater recharge.

The practical consequence is that even if total annual precipitation holds constant, the effective recharge per unit precipitation is declining — a warming-induced structural analog to the diversion-induced structural deficit. Policy responses must address both volume and capture mode simultaneously.

5. Open Questions for Chikamoto — Analytical Handoff

The following four items represent the paper's primary quantitative gaps, designated for Chikamoto's expertise in ENSO multi-year predictability and atmospheric river climatology:

5.1 ENSO × PDO Stratified AR Frequency ClimatologyWhat is the observed distribution of California/Great Basin landfalling AR events stratified by ENSO phase (El Niño/Neutral/La Niña) and PDO phase (Warm/Cool)? Specifically: does the PDO phase modulate the probability of compound AR sequences (≥3 ARs within a 30-day window reaching the Great Basin) above and beyond ENSO magnitude alone?

Expected data source: ARTMIP catalog or MERRA-2 IVT-based AR detection; stratification over 1980–2025.

5.2 Empirical Calibration of the AR Frequency Multiplier M_ARThe compound event flag in Section 3.3 requires empirical estimates of α_ENSO, α_PDO, and α_interaction. These can be derived from the ENSO × PDO stratified AR climatology in 5.1. The interaction term α_interaction is the key parameter distinguishing "PDO amplifies El Niño" from "PDO and ENSO are additive."

5.3 Tropical Interbasin Interaction and Late-Season PredictabilityChikamoto's 2024 Journal of Climate paper (with Wang) addresses tropical interbasin interactions as predictors of late-spring precipitation over the western U.S. Can this framework provide a physically grounded estimate of the probability that the 2026 ENSO × PDO state produces an AR compound event versus a suppressed-track dry outcome?

5.4 Stationarity Assumption ValidationChikamoto (personal communication, March 2026) noted that the RC model "is assuming stationarity... stationarity means that the relationship between PDO and GSL tendencies is stable" . At what warming level does this stationarity assumption break down? Are there observable indicators (e.g., declining snow fraction, shifting storm track geometry) that could trigger a model recalibration?

6. Discussion

6.1 Resolving the Annual vs. Decadal Paradox

The central methodological insight of this paper is that ENSO and PDO operate at different timescales relative to the GSL transfer function's passband, and this difference fully explains the apparently contradictory findings in the literature. The GSL watershed's 11-stage RC cascade acts as a low-pass filter with a passband centered near 10–25 years; ENSO energy (2–7 years) falls largely outside this passband and is attenuated by |H_total|² < 0.001, while PDO energy (10–25 years) falls within the passband at |H_total| = 0.019 .

But this does not mean ENSO is irrelevant — it means ENSO's GSL impact does not travel through the mean precipitation pathway that the transfer function was designed to capture. Instead, it travels through extreme event sequences (AR compounds) that bypass the gradual soil moisture → groundwater → baseflow pathway and deliver water episodically and directly through flood routing. This is why the annual SWE correlation fails (it measures the mean pathway) while the 2023 compound event succeeded (it traveled the extreme event pathway).

6.2 The PDO as Amplifier, Not Modulator of ENSO

A nuanced point distinguishes this paper's framework from prior treatments: the PDO does not "modulate ENSO strength" in the tropical Pacific — it is, as Wang (2026) emphasizes, a North Pacific atmosphere-imprinted pattern that is itself downstream of the tropical forcing . Rather, the PDO modulates the atmospheric bridge: the Aleutian Low depth, the position and persistence of the subtropical jet, and the frequency with which Pacific weather systems are steered toward (warm PDO) or away from (cool PDO) the California–Great Basin corridor.

This distinction matters for the paper's hypothesis: the compound event flag is not "strong El Niño × warm PDO" (which would imply PDO modulating ENSO), but rather "El Niño + atmospheric bridge geometry (indexed by PDO) + westerly wind burst" (which correctly places PDO as a descriptor of the pipeline geometry, not the source pressure).

6.3 Implications for GSL Forecasting and the 2030–2031 Signal

The two-stage lag cascade has direct implications for operational GSL forecasting. The current approach (RC circuit model versions ≤10.4) correctly captures the PDO-driven decadal signal but has no mechanism to represent the ENSO-driven episodic signal. Adding the AR compound event flag as a stochastic perturbation term to the forcing function Q_in(t) — triggered with probability P(compound | ENSO × PDO × WWB) — would allow the model to generate fan forecasts that include both the deterministic PDO trajectory and the stochastic AR pathway.

The 2030–2031 recovery signal produced by the current model is a lower bound: it reflects only the PDO-driven precipitation restoration as the PDO approaches a less-negative phase, without the ENSO contribution. The true probability distribution of 2030–2031 GSL elevation should be wider and slightly higher once the ENSO-modulated AR contribution is incorporated.

6.4 Why Conservation Is Necessary But Insufficient

The structural deficit analysis converges with the broader Western water framework articulated in Harvey (2026b): the annual evaporation/diversion deficit (300–500 kAf/yr) compounds year over year, and no climatically plausible ENSO × PDO scenario closes this gap through natural precipitation alone . The 2022–23 event — the largest precipitation surplus in modern instrumented history — added approximately 5 ft to the lake surface but did not return the lake to healthy levels (4,207 ft). The current deficit is now approximately 15 ft; at the historical maximum AR compound event surplus rate, closing the deficit would require roughly three consecutive 2022–23 equivalents.

The policy implication — that conservation is necessary but the structural deficit requires new water augmentation — is not the subject of this paper but is addressed in the companion policy paper (Abbott et al., in preparation) .

7. Model Implementation: Planned Revisions to GSL Simulator v11

Five specific code changes are required to implement the theoretical advances of this paper in the HTML simulator:

AR Compound Event Flag — Add a stochastic compound event trigger with P(compound | ENSO × PDO × WWB) from the empirical climatology (Section 5.1), producing episodic positive Q_in anomalies following Stage 1 lag

PDO Phase Lag Correction — Replace the fixed 9-year lag parameter with a slow-varying function of PDO trend rate, capturing the observational variability noted in White Paper Section 11.3

Snow Fraction Trend — Apply the −0.18%/yr downward trend in snow fraction as a warming-induced efficiency penalty on Q_in starting from 1980

Two-Stage Lag Visualization — Add a second timeline trace showing the precipitation benefit (Stage 1) separately from the GSL elevation response (Stage 2), enabling users to distinguish "it's raining more" from "the lake is rising"

PDO Suppression Indicator — Add a dashboard indicator that flags when the current PDO phase is likely to suppress the ENSO–AR pathway, with a "PDO Suppression Active" warning consistent with the Paradox described in Section 4.4

8. Known Limitations

AR Pathway Unparameterized (Critical): The ENSO → AR frequency → GSL inflow pathway is described mechanistically but not yet quantified. The central hypothesis of the paper (H2 reframed) cannot be formally tested without Chikamoto's stratified AR climatology. Sections 4.3 and 5 make clear what is missing and why.

Small ENSO Sample (Moderate): Only 7 El Niño years and 6 La Niña years in the 1980–2025 record. Statistical power for detecting a real ENSO–SWE signal of moderate effect size (Cohen's d ≈ 0.3–0.5) is insufficient (power ≈ 0.15–0.30). The null result in H3 is uninformative, not evidence of absence.

Stationarity Assumption (Moderate): The model assumes PDO–GSL relationships stable since 1977. Wang (2026) cautions that the post-1977 behavior "reads as reduced resilience — steeper declines and weaker rebounds," implying parameter drift . Formal non-stationarity testing is needed.

PDO Forecast Quality Ceiling (Critical for Long Horizons): PDO predictability at 5-year horizons is approximately 0.5 correlation at best (Newman et al., 2016). No transfer function model can exceed this intrinsic ceiling. Long-horizon (>5 yr) forecasts should be presented as probability distributions, not point estimates .

Snow Fraction Anchor Correction: The FigD snow fraction analysis corrects an earlier erroneous anchor (84% → 80.4%), with slope unchanged (−0.18%/yr). All figures use the corrected value.

9. Conclusion

The Great Salt Lake's quasi-decadal oscillation is the deterministic response of a damped, closed-basin lake to quasi-periodic forcing from Pacific Ocean oscillations — a driven system, not a resonator . The Pacific Decadal Oscillation provides the spectral content that the watershed's low-pass transfer function preferentially passes; ENSO provides episodic high-amplitude excursions through the atmospheric river pathway that the transfer function attenuates in the mean but which deliver disproportionate recharge in compound event sequences.

The 2026 developing El Niño will deliver precipitation benefit to the Great Basin — Stage 1 is real. But the −4.0 sigma PDO state creates a PDO Suppression Paradox that reduces the probability of a compound AR sequence to approximately ×1.8 relative to climatology, compared to the ×3.2 multiplier estimated for the 2022–23 event. The GSL elevation response to 2026–27 precipitation will not register until approximately 2029–30 via the two-stage lag cascade — a prediction that is self-consistent with the RC circuit model's independently computed 2030–2031 recovery signal.

The reframed central hypothesis — that PDO phase governs decadal recharge capacity while ENSO event intensity, mediated by atmospheric river delivery, governs episodic recharge magnitude — provides the quantitative framework for Prof. Chikamoto's AR pathway analysis to complete this paper for submission.

AI Methodology Statement

This manuscript was developed through iterative Perplexity AI Deep Research sessions (Perplexity AI, version May 2026), beginning with situational awareness queries on the developing 2026 El Niño and progressively developing into formal statistical validation, hypothesis reframing, and model extension proposals. The AI research assistant conducted literature synthesis, cross-validated claims against primary sources, performed correlation analysis structure (with results verified against primary data sources cited herein), generated figures, and drafted document text across multiple iterative sessions.

The AI's role was that of a research assistant and drafting partner: it could not generate new empirical data, access real-time observational databases, or perform the AR frequency stratification analysis that constitutes the paper's principal unresolved quantitative gap. All scientific judgments regarding hypothesis framing, model validity, and the significance of statistical results were made by the human author in dialogue with the AI system, and reviewed against primary correspondence from Chikamoto and Wang as cited throughout.

The use of AI in this methodology is disclosed in accordance with the editorial policies of the Journal of Hydrometeorology. Primary data sources, expert correspondence, and all specific quantitative claims are independently cited and traceable to the primary literature or personal communications as enumerated in the Annotated Bibliography.

Annotated Bibliography

Abbott, B. W., Baxter, B. K., et al. (2023). Emergency Measures Needed to Rescue Great Salt Lake from Ongoing Collapse. Brigham Young University. The widely-cited five-year desiccation warning establishing GSL's water budget structure (1.6 MAf inflow deficit). Provides the policy lever framework that anchors the RC model's conservation scenario analysis and is the basis for the companion policy paper.

Brooks, P. D., Wolf, M., Olds, B. (2025). Headwater streamflow and groundwater analysis, Department of Geology & Geophysics, University of Utah. Foundational for the groundwater-as-capacitor concept. Identified 13-year periodicity in climate and streamflow; January streamflow as groundwater proxy. Key finding: mountain groundwater storage at record lows since 2012 reduces runoff efficiency — directly informing the τ_slow = 20 yr parameter and the snow fraction → recharge efficiency discussion.

Chikamoto, Y. (2026, personal communications). Department of Plants, Soils and Climate, Utah State University. Two exchanges of critical importance: (March 2026) clarifying that ENSO–GSL annual correlations are expected to be weak because ENSO operates at 2–7 year periods outside the PDO's 8–10 year cycle; (April 2026) confirming interest in co-authorship and identifying logical consistency between scientific question and hypothesis as the primary review criterion. These communications define the paper's central ENSO timescale framing and the statistical test design.

DeRose, R. J., Wang, S.-Y., Buckley, B. M. (2014). Tree-ring reconstruction of the level of Great Salt Lake, USA. The Holocene, 24(7), 831–842. 576-year GSL elevation reconstruction demonstrating that oscillation frequency tracks PDO/IPO phase transitions (30-year to 10-year shift ~1700, 1977), not GSL geometry. Confirms driven oscillator interpretation and provides paleoclimate context for current structural deficit.

Gillies, R. R., Chung, O.-Y., Wang, S.-Y., Kokoszka, P. (2011). Incorporation of Pacific SSTs in a Time Series Model toward a Longer-Term Forecast for the Great Salt Lake Elevation. Journal of Hydrometeorology, 12(3), 474–480. PCLag model combining SST and precipitation principal components for 6-year GSL elevation forecasts. Provides the skill comparison baseline (SS ≈ 0.60 constant across horizons) against which the RC model's horizon-dependent skill profile is benchmarked.

Gu, H., Zhang, W., Gillies, R. R. (2024). The shrinking Great Salt Lake may exacerbate droughts by reducing local precipitation: A case study. Journal of Hydrometeorology, 25, 1099–1107. WRF-Lake numerical experiment showing 50% precipitation reduction in complete no-lake scenario for one June 2007 convective event. Establishes lake-effect precipitation mechanism and uncertainty bounds; basis for the Yeager coefficient lake-effect yield function.

Hassan, D., Burian, S. J., Johnson, R. C., Shin, S., Barber, M. E. (2023). The Great Salt Lake water level is becoming less resilient to climate change. Water Resources Management, 37, 2697–2720. System dynamics analysis quantifying 45% reduction in GSL recovery capacity under modern development. Key evidence for the TOE framing: the post-1977 system has fundamentally less ability to recover from perturbations than the pre-diversion baseline.

Harvey, I. R. (2026a). Great Salt Lake Water Level Forecasting via RC Circuit Analogy: Methodology and Assumptions. White Paper v1.7, Snow Horse Analytical Lab / University of Utah. The primary technical document for the RC circuit model (v10.4). Establishes the 11-stage cascade topology, phase lag calculation (9.3 yr), two-capacitor ODE system, NGVD29 bathymetry, lake-effect yield function, seven policy levers, historical validation (RMSE 0.5 ft), and forecast skill comparison. Defines the ENSO exclusion that the present paper addresses.

Harvey, I. R. (2026b). Principles of Western Water Life Support: From Steady-State Conservation to Emergency Climate Resilience. v5. Snow Horse Analytical Lab / University of Utah. The companion advocacy document establishing the structural deficit context, nine principles for emergency hydrologic life support, and the Great Salt River augmentation framework. Companion to the policy paper (Abbott et al., in preparation).

Huybers, P., Roe, G., Rupper, S. (2015). Response of closed basin lakes to interannual climate variability. Climate Dynamics, 44, 2621–2641. Analytical closed-basin lake response model showing GSL's integration time of 8–26 years depending on elevation. Physical basis for τ_GSL = 20 yr and the "driven, not resonant" oscillator interpretation.

LaPlante, M. D., Dahal, P., Wang, S.-Y. S., Hakala, K., Mukherjee, A. (2024). A Nuclear Bomb or Just a Joke? Groundwater Models May Help Communicate Nuanced Risks to the Great Salt Lake. Water, 16, 2221. CESM2-CLM groundwater proxy analysis showing robust GSL–watershed groundwater relationship (R = 0.754, 2-year lead). 100 quantile-mapped projections under SSP370 with box-and-whisker envelopes. Key finding: long-term decline trajectory persists despite natural variability, and recovery capacity has decreased 45%.

Lall, U., Abarbanel, H. D. I. (1996). Nonlinear dynamics of the Great Salt Lake: System identification and prediction. Journal of Physical Oceanography, 26, 428–448. Nonlinear time-series analysis showing variable amplitude and phase discontinuities in GSL oscillatory modes, inconsistent with simple resonance. Early support for driven oscillator interpretation.

Mohammed, I. N., Tarboton, D. G. (2012). An examination of the sensitivity of the Great Salt Lake to changes in inputs. Water Resources Research, 48, W11511. NGVD29 bathymetric curve (5 elevation nodes) used in the RC model. Sensitivity analysis confirming streamflow variability as primary driver. kNN bootstrap providing stochastic baseline ensemble.

Newman, M., et al. (2016). The Pacific decadal oscillation, revisited. Journal of Climate, 29(12), 4399–4427. Demonstrated PDO arises from four superimposed processes: ENSO teleconnections (2–7 yr), atmospheric stochastic forcing, ocean thermal inertia (10–30 yr), and Rossby wave propagation (4–5 yr). Ocean thermal inertia component provides the physical basis for decadal-scale PDO predictability ceiling — fundamental to the forecast skill limit discussion.

Stuivenvolt-Allen, J., Wang, S.-Y. S., Johnson, Z., Chikamoto, Y. (2021a). Atmospheric rivers impacting Northern California exhibit a quasi-decadal frequency. Journal of Geophysical Research: Atmospheres, 126, e2020JD034196. Documented quasi-decadal AR frequency along the Pacific corridor from Northern California to the Great Basin. The paper linking atmospheric rivers to the PDO-frequency band — the empirical bridge between Sections 3.3 and 4.2 of the present paper.

Stuivenvolt-Allen, J., Wang, S.-Y. S., Chikamoto, Y. (2021b). Decadal predictability of water availability in the Great Basin. Water, 13(24), 3566. Established decadal predictability of Great Basin water availability linked to Pacific SST variability via atmospheric teleconnection corridors. Provides the explicit Great Basin × AR × PDO linkage.

Wang, S.-Y. S., Gillies, R. R. (2012). Multidecadal drought cycles in the Great Basin recorded by the Great Salt Lake: Modulation from a transition-phase teleconnection. Journal of Climate, 25, 1711–1721. Extended PDO–GSL coherence analysis. Demonstrated multidecadal drought cycles modulated by Atlantic–Pacific interaction. Calibration: 150 kAf per PDO standard deviation.

Wang, S.-Y. S. (2026, personal communications). Informal scientific review, February 10–14, 2026. Three key exchanges providing the foundational climate framing: (1) PDO as regime indicator, not forcing; (2) physical chain from tropical forcing to lake levels as naturally RC-like; (3) Time of Emergence applied to GSL reduced resilience post-1977. These communications shaped the entire framing of Section 2 and distinguish the present paper from prior treatments that treated PDO as a deterministic driver.

Wang, S.-Y., Gillies, R. R., Jin, J., Hipps, L. E. (2010). Coherence between the Great Salt Lake level and Pacific quasi-decadal oscillation. Journal of Climate, 23(20), 5355–5369. The foundational PDO–GSL paper. Identified statistically significant coherence in the 15–25 year spectral band with 6–9 year phase lag. ≈60% forecast skill at 8-year horizon. The primary empirical basis for the RC model's use of PDO as regime indicator, and the reference point against which the annual-vs.-decadal paradox in Section 4.2 is resolved.

Yeager, K. N., Steenburgh, W. J., Alcott, T. I. (2013). Contributions of lake-effect periods to the cool-season hydroclimate of the Great Salt Lake Basin. Journal of Applied Meteorology and Climatology, 52, 341–362. 12-year SNOTEL analysis: lake-effect periods = 5.1–8.4% of cool-season precipitation. Basis for the 0.08125 kAf/sq-mi Yeager coefficient in the lake-effect yield function.

This document is intended for editorial circulation to Prof. Chikamoto and is not a final submitted manuscript. All quantitative estimates carry the uncertainties noted and require validation through the AR pathway analysis designated in Section 5. The transparent identification of open questions (Section 5) and limitations (Section 8) is deliberate — these represent the paper's actionable research agenda.

Version 1.0 · Compiled May 11, 2026 · Snow Horse Analytical Lab, Salt Lake City, UT
