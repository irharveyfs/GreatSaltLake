# AI Maintenance Guide for the GSL Simulator

This guide is for future human editors and AI coding tools working on the Great Salt Lake simulator. The simulator is not just a UI; it encodes scientific interpretation, policy accounting, and public-facing risk communication. Treat forecast logic changes as scientific edits, not cosmetic edits.

The full guide should live in this repository. A compressed summary of the non-negotiable guardrails should also be embedded as a block comment near the forecast constants in the production HTML, so future editors see the rules even if they open only the single-file simulator.

Terminology: AR means atmospheric river. The simulator glossary should define atmospheric river before using the abbreviation in public-facing tabs.

## Non-Negotiable Guardrails

1. Preserve Ian R. Harvey as author unless Ian explicitly changes authorship.
2. Keep AI assistance separate from authorship. Perplexity and Codex may be cited as assistance tools, not scientific authors.
3. Use NGVD29 as the simulator's primary elevation datum unless a specific UI element clearly says otherwise.
4. Do not restore the v12 hard-coded `4187.5` baseline. Forecast anchoring should use live USGS Saltair data when available, with the v10.4/v14 baseline fallback.
5. Treat PDO as a regime indicator or atmospheric-bridge index, not a literal direct forcing of lake level.
6. Keep the canonical lag table consistent everywhere: about 3 years for precipitation-to-lake response, 6 years for the two-stage QDO/PDO chain, 7-8 years for statistical lag framing, and about 9.3 years for full RC cascade framing.
7. Keep atmospheric-river multipliers labeled provisional until a documented atmospheric-river catalog calibration is completed and reviewed.
8. Do not double-count structural baseline gains such as US Magnesium-type avoided depletion.
9. Do not present the 2020-2060 PDO opportunity schematic as an elevation forecast.
10. Keep diagnostic-only methods, such as atmospheric-river multiplier calibration, out of the public simulator UI unless they become reviewed scientific features.

## Implementation Invariants

- One forecast engine should drive Overview, Simulator, Cross-Validation, reports, and annual accounting outputs.
- Overview sliders are simplified controls, but they must still feed the same forecast logic as the main Simulator.
- Annual accounting values must drive the forecast. They must never be display-only decoration.
- Editable annual overrides should be visibly marked and resettable.
- Structural baseline gain should display as accounting context, not as new annual policy water.
- 2034 is the milestone year. 2036 is the extended risk horizon. Do not collapse them into one KPI.
- The uncertainty cone must widen with forecast horizon.
- Long-range conceptual graphics must be visually distinct from forecast-grade charts.
- Known PDO/ENSO windows must use different visual cues from scenario windows, provisional windows, and conceptual long-range regime windows.

## Source Hierarchy

Use this order when claims conflict:

1. Official data feeds and primary sources: USGS, NOAA CPC, NOAA/NCEI, peer-reviewed papers.
2. Reviewed local project documents: planning dossier, extracted white-paper addenda, Ian-approved decisions.
3. Existing simulator code and embedded datasets.
4. Generated or watermarked draft figures.
5. AI-generated synthesis, which must remain reviewable and subordinate to sources above.

## Required Checks Before Changing Forecast Logic

Run or manually verify:

- Overview conservation changes the graph and KPI.
- Overview augmentation changes the graph and KPI.
- Each Simulator lever changes annual accounting and forecast output.
- Annual table edits change the forecast once editable overrides exist.
- Newfoundland or other one-time sources do not recur indefinitely unless the scenario explicitly includes refill or partial refill.
- Stable recurring levers continue annually after ramp-up.
- Structural baseline gain is not included in modeled policy water.
- Cross-Validation updates when scenario assumptions change.
- 2036 uncertainty is wider than 2034 uncertainty.
- Preserved v10.4 tabs still render.

## Diagnostic Tools

Atmospheric-river multiplier calibration is a diagnostic/research workflow, not a simulator feature. Do not embed live calibration in the static HTML. If calibration work is added, it should live in a separate `calibration/` script or notebook with documented input data, method, outputs, and review status. The simulator may import reviewed coefficients after they are approved.

Catalog selection and multiplier calibration should be flagged for Prof. Chikamoto review before coefficients are treated as reviewed or calibrated.

## HTML Embedded Comment

Add a short comment near the forecast constants, not the full guide:

```html
<!--
GSL MODEL GUARDRAILS:
- Primary datum is NGVD29.
- Forecast anchors to live USGS Saltair when available; do not restore v12 BASE=4187.5.
- PDO is a regime indicator / atmospheric-bridge index, not a literal forcing knob.
- Annual accounting must drive forecast output; structural baseline gains are not policy water.
- 2034 is the milestone; 2036 is the lower-skill risk horizon.
- Atmospheric-river multipliers are provisional until reviewed calibration.
- Long-range PDO opportunity graphics are conceptual, not lake-elevation forecasts.
See AI-MAINTENANCE-GUIDE.md before changing forecast logic.
-->
```

## Citation Language

Front citation block should include Codex once v14.1 is implemented:

```text
Created with AI-assisted research, planning, and coding tools, including Perplexity AI and OpenAI Codex.
```

AI disclosure should stay separate:

```text
AI tools assisted with research synthesis, code integration, review, and implementation planning. Final scientific interpretation, model design, parameter selection, and authorship remain Ian R. Harvey's.
```

## Change Style

Prefer small, reviewable changes. When changing a model coefficient, lag, source, or forecast equation, add a short code comment that explains:

- what changed,
- why it changed,
- what source or decision supports it,
- what verification should be run.

Avoid dense line-by-line narration. Comments should protect scientific intent and implementation invariants.
