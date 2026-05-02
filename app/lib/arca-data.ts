// Data constants for the A.R.C.A. landing — used by both /scroll (legacy) and / (flipbook).

export const GITHUB_URL = "https://github.com/infantesromeroadrian/arca-claude-code";
export const CONTACT_EMAIL = "infantesromeroadrian@gmail.com";

export const cycles = [
  { id: "C1", name: "Discovery", owner: "project-planner" },
  { id: "C2", name: "Data", owner: "data-validator" },
  { id: "C3", name: "Feature", owner: "math-critic" },
  { id: "C4", name: "Design", owner: "architect-ai", wait: true },
  { id: "C5", name: "POC", owner: "math-critic" },
  { id: "C6", name: "Build", owner: "code-critic" },
  { id: "C7", name: "MLOps", owner: "mlops-engineer" },
  { id: "C8", name: "Quality", owner: "model-evaluator" },
  { id: "C9", name: "Pre-Prod", owner: "deployment" },
  { id: "C10", name: "Deploy", owner: "chief-architect" },
  { id: "C11", name: "Post-Deploy", owner: "deployment" },
  { id: "C12", name: "Monitoring", owner: "monitoring" },
  { id: "C13", name: "Governance", owner: "mlops-engineer" },
  { id: "C14", name: "Sunset", owner: "mlops-engineer" },
];

export const htbPhases = [
  { id: "F0", name: "Setup", desc: "Directory scaffolding (nmap/, loot/, exploits/, notes/, flags/)." },
  { id: "F1", name: "Recon", desc: "@htb-recon mechanical enumeration → loot/recon.json." },
  { id: "F2", name: "CVE Gate", desc: "@cve-hunter ranks CVEs by service+version (BLOCKING)." },
  { id: "F3", name: "Cred Hunt", desc: "@credential-hunter cross-service reuse matrix." },
  { id: "F4", name: "Exploit", desc: "@exploit-executor PoC rank #1, minimal toolkit (curl/git/ssh/python3/nc)." },
  { id: "F5", name: "Flag Gate", desc: "@flag-validator <60s GO/ABORT decision." },
];

export const gates = [
  { id: "gate.01", name: "@math-critic", label: "Blocking",
    body: "Validates loss functions, gradients, statistical validity, attention scaling, and sampling strategies. Blocks structurally before any code evaluation occurs." },
  { id: "gate.02", name: "@debt-detector", label: "Blocking",
    body: "Catches unused imports/functions, TODOs without tickets, logical duplication >3 sites across the workspace, and enforces cyclomatic complexity limits (max 10)." },
  { id: "gate.03", name: "@code-critic", label: "Terminal",
    body: 'Analyzes 19 isolated "AI Slop" signals. Audits architecture, strict security adherence, runtime performance bounds, and deep maintainability limits. No code is final without approval.' },
];

export const sins = [
  { n: "01", text: "Skipping formal cycle validation" },
  { n: "02", text: "Pushing imperfect bounds" },
  { n: "03", text: "AI-smelling variable structures" },
  { n: "04", text: "Architecture without ADR", highlight: true },
  { n: "05", text: "Skipping preflight analysis" },
  { n: "06", text: "Secrets context leak", highlight: true },
  { n: "07", text: "Code mutations without tests" },
  { n: "08", text: "Absence of rollback matrix" },
  { n: "09", text: "Ignoring escalation protocols" },
];

export const cases: { code: string; title: string; subject: string; body: string; highlight?: boolean }[] = [
  { code: "ERR_MIT_01", title: "ARCA-SEC-1", subject: "$ARGUMENTS hardening",
    body: "Heredoc terminator injection is structurally irreducible in bash. We accept the limit and document it via inverted-style canary tests (T7b/T16b). If a future change accidentally closes the residual, the test fails and forces re-audit." },
  { code: "ARCH_04", title: "E.2 Auto-ADR", subject: "Closing sin #4",
    body: "Closes mortal sin #4 (architecture without ADR). PostToolUse heuristic detects decisional output from architect-ai without ADR. Claude Opus 4.7 LLM-as-judge (via Code SDK) validates 7 Nygard sections prior to local persistence." },
  { code: "GATE_V2", title: "E.3 Diff Compress", subject: "Gate evaluation tuning",
    body: "v1 word-count was defeated by Lorem Ipsum bodies. v2 captures diff, 90s countdown, free-text summary, Claude Opus 4.7 judge (via Code SDK) with random fence prompt-injection guard. Verdicts: APPROVED / INCOHERENT / TOO_SHALLOW (fail-closed to v1)." },
  { code: "VAULT_T3", title: "Obsidian Tier-3", subject: "Vault as auto-doc second-brain",
    body: "Stop hook writes Status.md per project on every session close, then auto-pushes the ARCA-relevant subset (Status / CICLO-N / Templates / Engram digests) to a private companion repo arca-vault-notes. Plan-A 'git init the vault root' rejected: 7+ GB and personal medical data. ADR-010 documents the rationale." },
  { code: "CC_2_1_X", title: "Claude Code 2.1.x adoption", subject: "10 platform knobs wired to ARCA",
    body: "Adopted: ENABLE_PROMPT_CACHING_1H, CLAUDE_CODE_FORK_SUBAGENT, engram alwaysLoad, PreCompact / CwdChanged / FileChanged / TaskCreated hooks, PostToolUse secrets-mask via updatedToolOutput, UserPromptSubmit sessionTitle, ultrareview --json wrapper. Deferred (with explicit reason): disableSkillShellExecution (breaks 12 core skills), xhigh effort (per-session)." },
  { code: "CCAUDIT", title: "Weekly self-audit", subject: "ARCA audits ARCA against Anthropic docs", highlight: true,
    body: "skills/claude-config-audit fires every Monday 07:07 via systemd user timer. Delegates to @claude-code-guide which fetches docs.anthropic.com/claude-code in vivo (no training-data trust) and runs a 20-point structured checklist over 6 categories: hook payloads, env vars, skill runtime, subagent scoping, multi-process state, common misuses. Output is severity-graded; BLOCKER findings emit a flag that gates further edits to settings.json and hooks/. Born after a manual audit on 2026-05-01 caught 3 latent bugs in the same session." },
];

export const stack = [
  { k: "MODELS", v: "Opus 4.7 (1M ctx) · Sonnet 4.6 · Haiku 4.5" },
  { k: "PERSISTENCE", v: "Engram MCP (Local SQLite)" },
  { k: "LLM-AS-JUDGE", v: "Hybrid: Opus 4.7 SDK (high-stakes) + Qwen 2.5 7B (hot-path)" },
  { k: "RUNTIME", v: "100% bash hooks (Zero startup latency)" },
  { k: "PLAN TIER", v: "Claude MAX flat-rate" },
  { k: "COMPUTE NODE", v: "RTX 2000 Ada Lovelace SM 8.9 (8GB VRAM)" },
];

export const agentCategories: { title: string; agents: { name: string; model: "opus" | "sonnet" | "haiku"; phases: string }[] }[] = [
  { title: "Discovery & Planning", agents: [
    { name: "project-planner", model: "sonnet", phases: "C1 — BLOCKING (gate)" },
    { name: "architect-ai", model: "opus", phases: "C1, C4, C14" },
  ]},
  { title: "Data", agents: [
    { name: "data-engineer", model: "sonnet", phases: "C2, C6, C7" },
    { name: "data-scientist", model: "opus", phases: "C2, C3" },
    { name: "data-validator", model: "opus", phases: "C2 — BLOCKING" },
  ]},
  { title: "ML / DL / AI", agents: [
    { name: "ml-engineer", model: "opus", phases: "C5, C6" },
    { name: "dl-engineer", model: "opus", phases: "C5, C6" },
    { name: "ai-engineer", model: "opus", phases: "C4, C5, C8" },
    { name: "agent-engineer", model: "sonnet", phases: "C4, C5, C8" },
    { name: "rag-engineer", model: "opus", phases: "C4, C5, C8" },
  ]},
  { title: "GPU / Performance", agents: [
    { name: "gpu-engineer", model: "opus", phases: "C2, C6" },
    { name: "perf-engineer", model: "opus", phases: "C8, C9" },
  ]},
  { title: "Production", agents: [
    { name: "mlops-engineer", model: "sonnet", phases: "C7, C8, C12, C13, C14" },
    { name: "model-evaluator", model: "opus", phases: "C8 — FINAL gate" },
    { name: "ai-production-engineer", model: "opus", phases: "C10, C12" },
    { name: "deployment", model: "sonnet", phases: "C9, C10, C11, C14" },
    { name: "devops", model: "sonnet", phases: "C7, C9, C10, C14" },
    { name: "monitoring", model: "sonnet", phases: "C12" },
  ]},
  { title: "Frontend / API / Cloud", agents: [
    { name: "frontend-ai", model: "sonnet", phases: "C12" },
    { name: "api-designer", model: "sonnet", phases: "C4" },
    { name: "aws-engineer", model: "opus", phases: "C2-C14" },
  ]},
  { title: "Adversarial Gates", agents: [
    { name: "math-critic", model: "opus", phases: "C3, C5, C6, C8 — BLOCKING" },
    { name: "debt-detector", model: "sonnet", phases: "C6, C8 — INLINE" },
    { name: "code-critic", model: "opus", phases: "all — BLOCKING" },
    { name: "maintainability-engineer", model: "opus", phases: "C8 — BLOCKING (parallel to code-critic)" },
    { name: "chief-architect", model: "opus", phases: "C10, C14 — BLOCKING" },
    { name: "tester", model: "sonnet", phases: "C8" },
    { name: "ai-red-teamer", model: "opus", phases: "C2, C8, C10, C12" },
  ]},
  { title: "HTB Pipeline (CVP-only)", agents: [
    { name: "htb-orchestrator", model: "opus", phases: "all HTB" },
    { name: "htb-recon", model: "haiku", phases: "F1" },
    { name: "cve-hunter", model: "sonnet", phases: "F2 — BLOCKING" },
    { name: "credential-hunter", model: "haiku", phases: "F3" },
    { name: "exploit-executor", model: "sonnet", phases: "F4" },
    { name: "flag-validator", model: "haiku", phases: "F5 — BLOCKING" },
  ]},
  { title: "Utilities — Preflight", agents: [
    { name: "token-optimizer", model: "haiku", phases: "all — FIRST in delegation" },
    { name: "skill-router", model: "haiku", phases: "all — SECOND in delegation" },
  ]},
  { title: "Utilities — Other", agents: [
    { name: "prompt-engineer", model: "opus", phases: "all" },
    { name: "cost-analyzer", model: "haiku", phases: "all" },
    { name: "sensei", model: "opus", phases: "all — read-only mentor" },
    { name: "git-master", model: "haiku", phases: "all — commit gatekeeper" },
    { name: "docs-writer", model: "haiku", phases: "C10, C14" },
    { name: "python-specialist", model: "opus", phases: "C8" },
    { name: "arca-ambient-monitor", model: "sonnet", phases: "all" },
    { name: "code-narrator", model: "sonnet", phases: "C3, C5, C6, C8 — auto post-producer" },
  ]},
];

export const skillFamilies = [
  { name: "ARCA core", count: 8, items: "adr-new · justify · skill-effectiveness · skill-router · token-optimizer · engram-rehydrate · claude-code-patterns · claude-config-audit" },
  { name: "Anti-AI-slop", count: 3, items: "karpathy-guidelines · verbalized-sampling · gentleman-ai" },
  { name: "LangChain ecosystem", count: 10, items: "langchain · langgraph · langchain-rag · langsmith · ..." },
  { name: "Deep Agents", count: 3, items: "deep-agents-core · deep-agents-memory · deep-agents-orchestration" },
  { name: "MCP / SDK", count: 2, items: "mcp-development · anthropic-sdk" },
  { name: "ML Engineering", count: 12, items: "ml-fundamentals · mlops · model-interpretability · inference-optimization · time-series · multimodal-ai · edge-ml · ..." },
  { name: "RAG", count: 2, items: "rag-systems · rag-new" },
  { name: "Security", count: 13, items: "cybersecurity · htb-methodology · web3-audit · owasp-security · ml-security · bug-bounty · ..." },
  { name: "Pipeline / Utilities", count: 13, items: "requirements-engineering · agile-ml · cicd · git · testing · python-init · ..." },
  { name: "Reviews / Voting", count: 6, items: "review-pr · voting-review · team-debug · team-ml-review · team-refactor · team-security" },
  { name: "Vercel ecosystem", count: 15, items: "vercel:ai-sdk · vercel:nextjs · vercel:deploy · vercel:shadcn · ..." },
];

export const adrs = [
  { n: "001", title: "Opus 4.6 as mandatory model for code-critic", date: "2026-03-24", status: "Accepted" },
  { n: "002", title: "NVIDIA Nemotron as voice reasoning engine", date: "2026-03-28", status: "Accepted" },
  { n: "003", title: "Eight-phase ML pipeline over simpler alternatives", date: "2026-03-24", status: "Accepted" },
  { n: "004", title: "Hooks implemented in Bash, not Python", date: "2026-03-24", status: "Accepted" },
  { n: "005", title: "Piper as local TTS fallback over ElevenLabs", date: "2026-03-28", status: "Accepted" },
  { n: "006", title: "Auto-ADR detector + skill (E.2)", date: "2026-04-29", status: "Accepted" },
  { n: "007", title: "Slash command $ARGUMENTS hardening (ARCA-SEC-1)", date: "2026-04-29", status: "Accepted" },
  { n: "008", title: "Diff Comprehension Gate v2 (timed read + LLM judge)", date: "2026-04-29", status: "Accepted" },
  { n: "009", title: "Hybrid LLM-as-judge — Opus 4.7 SDK + Qwen 7B", date: "2026-04-30", status: "Accepted" },
  { n: "010", title: "Obsidian vault as ARCA's auto-doc second-brain", date: "2026-04-30", status: "Accepted" },
  { n: "011", title: "Phase-gate enforcement is no longer aspirational", date: "2026-05-01", status: "Accepted" },
  { n: "012", title: "Async subagent notification stall — fail-safe to v1 fallback", date: "2026-05-01", status: "Accepted" },
  { n: "013", title: "Scheduled-git guardrails — block git ops from cron context", date: "2026-05-01", status: "Accepted" },
  { n: "014", title: "Slash-command test harness — bash hermetic fixtures", date: "2026-05-01", status: "Accepted" },
];

export const aiSlopSignals = [
  "Comments repeating what code says",
  "Generic docstrings",
  "Variables data/result/output/temp/item",
  "Verbose code where expression suffices",
  "'Too perfect' imports with some unused",
  "try/except Exception with generic log",
  "Functions identical to official tutorial",
  "Unjustified language mixing",
  "Comments with emojis / markdown icons",
  "No 'voice' — code without visible decisions",
  "Abuse of abstractions (Factory/Manager/Wrapper)",
  "print() for logging instead of project logger",
  "Expository language ('# Here we...', '# Now let's...')",
  "raise Exception(...) instead of custom domain exceptions",
  "Decorators without reason",
  "Helper functions without value (wrappers)",
  "Long names (calculate_total_price_with_discount...)",
  "if/else with both active branches without early return",
  "Exhaustive typing in privates (NOT slop — good practice)",
];

export const forbiddenPatterns = [
  "Don't duplicate capabilities of existing agents",
  "Don't embed full API documentation in prompts",
  "Don't use external models (GPT/Gemini)",
  "Don't advance phases without explicit approval",
  "Don't commit AI-smelling code (19 signals)",
];

