# arca-agent-landing

Public Next.js landing for A.R.C.A, Adrian Infantes' agentic engineering harness.

It presents the current Claude Code incarnation of ARCA: 59 specialist agents,
148 skills, 65 hooks, the ML / HTB / ART pipelines and the dynamic orchestration
mode.

## Commands

```bash
npm install
npm run dev
npm run build
```

The production deployment is expected to run on Vercel at:

```text
https://arca-agent-landing.vercel.app
```

## Content Sync

The displayed counts must be checked against `arca-claude-code/scripts/validate.sh`
before publishing content changes. This repo is presentation only; the harness
source of truth remains `arca-claude-code`.
