# VWO Tableau Power BI Decision Evidence Room

Decision evidence room for VWO, Tableau, and Power BI proof packets before board-facing readouts.

![ci](https://github.com/mizcausevic-dev/vwo-tableau-powerbi-decision-evidence-room/actions/workflows/ci.yml/badge.svg)

## What this ships

This repo is a static Kinetic Gain evidence surface, not a placeholder page. It packages VWO, Tableau, Power BI signals into a board-readable operating view with decision workflow, board-pack copy, related links, and validation checks:

- Exposure: where workflow, platform, or communications risk can become visible.
- Savings: where duplicate effort, drift, or manual coordination can be reduced.
- Investment: which next action deserves funding, ownership, or escalation.
- Story: how the evidence should be explained to executives or investors.

## Operating workflow

1. Ingest current platform signals, ownership notes, exception records, and timing windows.
2. Score exposure, savings, and investment pressure separately.
3. Route every lane to one accountable owner, one audience, and one next action.
4. Brief the decision in language that can survive board, investor, or diligence review.

## Live surface

- Product page: https://mizcausevic-dev.github.io/vwo-tableau-powerbi-decision-evidence-room/
- Repository: https://github.com/mizcausevic-dev/vwo-tableau-powerbi-decision-evidence-room
- Portfolio atlas: https://portfolio.kineticgain.com/

## Evidence lanes

- experiment integrity
- holdout trust
- dashboard lineage
- semantic model confidence
- revenue lift evidence
- board readout readiness

## Related surfaces

- [VWO Tableau Power BI Campaign Risk Waterfall](https://mizcausevic-dev.github.io/vwo-tableau-powerbi-campaign-risk-waterfall/)

## Local verification

```bash
npm test
```

The validation script checks the data payload, generated page, interactive evidence table, related links, and footer links.
