# HTML Structure: gsl-simulator-v12.html

## Tabs
- Overview `switchTab('simple')`
- Simulator `switchTab('simulator')`
- Water Budget `switchTab('waterbudget')`
- Cross-Validation `switchTab('validation')`
- Model & Methods `switchTab('about')`
- Version History `switchTab('history')`

## Panels And Headings
## panel-simple
- How do we save Great Salt Lake?

## panel-simulator


## panel-waterbudget
- Great Salt Lake Water Budget (1989–2024)

## panel-validation
- Reframed Hypotheses — Statistical Validation Results
- Lag-Corrected Statistical Summary

## panel-about
- Model Architecture — RC Circuit Analogy
- ENSO × PDO × AR Interaction Framework
- Precipitation Character Transition
- Known Model Limitations
- Annotated Bibliography

## panel-history
- Version History

## Inputs
- id=s-conserv, type=range, min=0, max=400, step=10, value=200, oninput=updateSimple()
- id=s-augment, type=range, min=0, max=300, step=10, value=50, oninput=updateSimple()

## JavaScript Functions
- `buildLevers`
- `buildSimChart`
- `buildSimpleChart`
- `buildValidChart`
- `buildWBChart`
- `calcTraj`
- `getClimate`
- `switchTab`
- `togYT`
- `updLever`
- `updateSim`
- `updateSimple`

## Top-Level Constants
- `BASE`
- `LEVERS`
- `a`
- `aridL`
- `badge`
- `c`
- `chip`
- `ctx`
- `e`
- `el`
- `em`
- `ensoPrec`
- `evap`
- `inflow`
- `l`
- `net`
- `obs`
- `p`
- `pdoGSL`
- `pm`
- `polFt`
- `polG`
- `proj`
- `proj2036`
- `rc`
- `t`
- `t05`
- `t95`
- `tabsBuilt`
- `tot`
- `traj`
- `tt`
- `yrs`
