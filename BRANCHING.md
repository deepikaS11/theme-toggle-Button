git rm --cached .sf/orgs/00Dd200000rmEF3EAM/metadata-catalog/catalog.json# Branching Strategy
- main: always stable, never commit directly
- feature/<name>: one branch per feature, branched from main
- Merge into main with --no-ff after review
- Commit format: type: short summary (feat, fix, docs, chore)
