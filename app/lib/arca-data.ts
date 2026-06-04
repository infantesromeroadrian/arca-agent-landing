// Data constants for the A.R.C.A. landing — used by both /scroll (legacy) and / (flipbook).
// Last sync with arca-claude-code roster: 2026-06-03 (full 59-agent roster + ADR-081/085/089/091/092/093).

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

// Dynamic Orchestration — the 4th MODE (NOT a 4th pipeline). The 3 fixed
// pipelines (ML / HTB / ART) stay authoritative; dynamic mode is the catch-all
// for the long tail. @architect-ai proposes a bespoke agent DAG for Adrian's
// approval BEFORE any agent executes. Two-layer gate enforcement. See ADR-089.
export const dynamicOrchestration = {
  command: "/orchestrate",
  adr: "ADR-089",
  tagline: "A bespoke agent DAG, proposed and approved before a single agent runs.",
  intro:
    "ML, HTB and ART are the three fixed pipelines — authoritative for the work they were designed around. Dynamic orchestration is the 4th MODE, not a 4th pipeline: the catch-all for the long tail no fixed pipeline covers.",
  flow: [
    { step: "01", name: "Propose", body: "@architect-ai composes a bespoke agent DAG for the task: which subagents participate, in what order, and which adversarial critics / blocking gates sit on each node." },
    { step: "02", name: "Approve", body: "The DAG goes to Adrian for explicit approval BEFORE any agent executes. No agent runs against an unapproved graph." },
    { step: "03", name: "Schema floor", body: "A schema-floor validator rejects under-gated proposals at declaration time — a DAG missing the critics a node's output demands never reaches approval." },
    { step: "04", name: "Runtime block", body: "A runtime hook hard-blocks at invocation: even an approved-looking node cannot execute if its required gate did not sign off. Two layers, declaration and invocation." },
  ],
};

export const htbPhases = [
  { id: "F0", name: "Setup", desc: "Directory scaffolding (nmap/, loot/, exploits/, notes/, flags/)." },
  { id: "F1", name: "Recon", desc: "@htb-recon ProjectDiscovery stack 2026 + ATT&CK mapping → loot/recon.json." },
  { id: "F2", name: "CVE Gate", desc: "@cve-hunter NVD v2.0 + CISA KEV + EPSS + CVSS v4.0 ranking (BLOCKING)." },
  { id: "F3", name: "Cred Hunt", desc: "@credential-hunter cross-service reuse + AD attacks (Kerberoast/AS-REP/BloodHound CE) + cloud creds." },
  { id: "F4", name: "Exploit", desc: "@exploit-executor PoC #1 + LOLBAS/GTFOBins + AT&CK mapping + minimal toolkit." },
  { id: "F5", name: "Flag Gate", desc: "@flag-validator <60s GO/ABORT + container escape + cloud metadata check." },
  { id: "F6", name: "Privesc", desc: "@exploit-executor privilege escalation to root/Administrator + lateral movement + persistence." },
  { id: "F7", name: "Writeup", desc: "Report + writeup.md: timeline, CVE chain, ATT&CK mapping, remediation, evidence trail." },
];

export const gates = [
  { id: "gate.01", name: "@math-critic", label: "Blocking",
    body: "Validates loss functions, gradients, statistical validity, attention scaling, and sampling strategies. Blocks structurally before any code evaluation occurs. Zero invention — only validates what it can prove." },
  { id: "gate.02", name: "@debt-detector", label: "Blocking",
    body: "Catches unused imports/functions, TODOs without tickets, logical duplication >3 sites across the workspace, and enforces cyclomatic complexity limits (max 10)." },
  { id: "gate.03", name: "@code-critic", label: "Terminal",
    body: 'Analyzes 19 isolated "AI Slop" signals. Audits architecture, strict security adherence, runtime performance bounds, and deep maintainability limits. No code is final without approval. Zero invention — rejects without evidence, never fakes a PASS.' },
  { id: "gate.04", name: "@maintainability-engineer", label: "Parallel-Blocking",
    body: "Runs in parallel with @code-critic at C8 Quality. Catches longevity decay (naming-versionado embebido, magic constants, premature abstractions, undocumented invariants, implicit coupling, behavior-validating tests, reversibility risk). Both gates blocking — either rejection halts the cycle." },
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
  { code: "ERR_MIT_01", title: "ARCA-SEC-1", subject: "$ARGUMENTS hardening (Superseded 2026-05-03)",
    body: "Heredoc terminator injection was structurally irreducible in bash. Mitigation accepted via inverted-style canary tests (T7b/T16b). ADR-007 superseded on 2026-05-03 when /justify feature removed entirely (operational friction outweighed value once @code-critic + @maintainability-engineer gates matured). Pattern documented as reference for future shell-parser slash commands." },
  { code: "ARCH_04", title: "E.2 Auto-ADR", subject: "Closing sin #4",
    body: "Closes mortal sin #4 (architecture without ADR). PostToolUse heuristic detects decisional output from architect-ai without ADR. Claude Opus 4.8 LLM-as-judge (via Code SDK) validates 7 Nygard sections prior to local persistence." },
  { code: "GATE_V2", title: "E.3 Diff Compress", subject: "Gate evaluation tuning",
    body: "v1 word-count was defeated by Lorem Ipsum bodies. v2 captures diff, 90s countdown, free-text summary, Claude Opus 4.8 judge (via Code SDK) with random fence prompt-injection guard. Verdicts: APPROVED / INCOHERENT / TOO_SHALLOW (fail-closed to v1)." },
  { code: "VAULT_T3", title: "Obsidian Tier-3", subject: "Vault as auto-doc second-brain",
    body: "Stop hook writes Status.md per project on every session close, then auto-pushes the ARCA-relevant subset (Status / CICLO-N / Templates / Engram digests) to a private companion repo arca-vault-notes. Plan-A 'git init the vault root' rejected: 7+ GB and personal medical data. ADR-010 documents the rationale." },
  { code: "CC_2_1_X", title: "Claude Code 2.1.x adoption", subject: "10 platform knobs wired to ARCA",
    body: "Adopted: ENABLE_PROMPT_CACHING_1H, CLAUDE_CODE_FORK_SUBAGENT, engram alwaysLoad, PreCompact / CwdChanged / FileChanged / TaskCreated hooks, PostToolUse secrets-mask via updatedToolOutput, UserPromptSubmit sessionTitle, ultrareview --json wrapper. Deferred (with explicit reason): disableSkillShellExecution (breaks 12 core skills), xhigh effort (per-session)." },
  { code: "CCAUDIT", title: "Weekly self-audit", subject: "ARCA audits ARCA against Anthropic docs", highlight: true,
    body: "skills/claude-config-audit fires every Monday 07:07 via systemd user timer. Delegates to @claude-code-guide which fetches docs.anthropic.com/claude-code in vivo (no training-data trust) and runs a 20-point structured checklist over 6 categories: hook payloads, env vars, skill runtime, subagent scoping, multi-process state, common misuses. Output is severity-graded; BLOCKER findings emit a flag that gates further edits to settings.json and hooks/. Born after a manual audit on 2026-05-01 caught 3 latent bugs in the same session." },
  { code: "ENT_V3", title: "Enterprise rewrite sweep v3.0", subject: "16 agents promoted to regulated-grade", highlight: true,
    body: "On 2026-05-03 sixteen agents underwent enterprise-grade rewrite (~10,400 LOC added) calibrated for SOC 2 Type II, EU AI Act (Art 15/50/55/73), GDPR Art 22, HIPAA BAA, DORA Art 17, PCI-DSS Level 1, FedRAMP, ISO/IEC 42001, NIST AI RMF + AI 600-1 GenAI Profile, MITRE ATT&CK v15+ / ATLAS, OWASP LLM Top 10:2025, SLSA Level 3, WCAG 2.2 + EU European Accessibility Act (effective 28 June 2025). Spans MLOps + serving + cloud + DevOps + security + frontend + HTB pipeline. Rationale documented per agent in commits 6cbc4dd through a8c3cb2." },
  { code: "NARRATIVE", title: "Scrollytelling deck + NotebookLM corpus", subject: "Bilingual ES/EN explainer artifacts",
    body: "presentation/index.html ships a 12-scene bilingual (ES/EN) scrollytelling deck with 10 diagrams walking through ARCA's identity, pipelines and gate chain. Paired with two NotebookLM overview documents — ARCA_OVERVIEW.md (ES) and ARCA_OVERVIEW.en.md (EN) — that feed an audio-overview/podcast generation flow for non-technical stakeholders." },
];

export const stack = [
  { k: "MODELS", v: "Opus 4.8 (1M ctx) · Sonnet 4.6 · Haiku 4.5" },
  { k: "DISTRIBUTION", v: "51 Opus · 8 Sonnet · 0 Haiku (59 agents · 3 fixed pipelines ML + HTB + ART + 1 dynamic orchestration mode)" },
  { k: "ENTERPRISE TIER", v: "16 agents v3.0 regulated-grade (SOC 2 / EU AI Act / GDPR / DORA / HIPAA / PCI-DSS)" },
  { k: "PERSISTENCE", v: "Engram MCP (Local SQLite)" },
  { k: "LLM-AS-JUDGE", v: "Hybrid: Opus 4.8 SDK (high-stakes) + Qwen 2.5 7B (hot-path)" },
  { k: "RUNTIME", v: "100% bash hooks (Zero startup latency)" },
  { k: "PLAN TIER", v: "Claude MAX flat-rate" },
  { k: "COMPUTE NODE", v: "RTX 2000 Ada Lovelace SM 8.9 (8GB VRAM)" },
];

export const enterprisePosture = [
  { framework: "NIST AI RMF 1.0 + AI 600-1 GenAI Profile",
    scope: "AI red team activity (MS-2.7) over 12 risks (CBRN, confabulation, harmful bias, info security, IP, etc.)",
    agents: "@ai-red-teamer, @mlops-engineer, @ai-production-engineer" },
  { framework: "EU AI Act (Regulation 2024/1689)",
    scope: "Art 15 high-risk testing, Art 50 transparency (2026-08-02), Art 51/55 GPAI 10^25 FLOPS systemic risk, Art 73 incident reporting 15/10/2 days",
    agents: "@ai-production-engineer, @mlops-engineer, @ai-red-teamer, @frontend-ai" },
  { framework: "MITRE ATT&CK v15+ Enterprise + MITRE ATLAS",
    scope: "ATT&CK techniques mapping per pipeline phase + ATLAS adversarial threat landscape AI/ML",
    agents: "@ai-red-teamer, @htb-orchestrator + 5 HTB pipeline" },
  { framework: "OWASP LLM Top 10:2025",
    scope: "LLM01-LLM10 with red team test mapping (PromptBench, AdvBench, BadNets activation, InjecAgent corpus)",
    agents: "@ai-red-teamer, @ai-production-engineer" },
  { framework: "SLSA Level 3 supply chain",
    scope: "SBOM Syft SPDX + Cosign signing OIDC + provenance attestation + Trivy CVE scan",
    agents: "@devops, @aws-engineer, @deployment" },
  { framework: "WCAG 2.2 AA + EU EAA Directive 2019/882",
    scope: "9 nuevos success criteria vs 2.1, EAA effective 28 June 2025 (multas member state Spain hasta EUR 1M)",
    agents: "@frontend-ai" },
  { framework: "SOC 2 Type II CC6.x/CC7.x",
    scope: "Audit trail inmutable + change management + RBAC segregation of duties + continuous monitoring",
    agents: "@mlops-engineer, @deployment, @devops, @monitoring" },
  { framework: "DORA Article 17 (financial EU)",
    scope: "ICT incident detection <24h + operational resilience testing (TLPT every 3 years) + third-party risk",
    agents: "@deployment, @monitoring, @ai-red-teamer" },
  { framework: "HIPAA + GDPR Art 22/30/32",
    scope: "BAA-eligible services + PHI encryption TLS 1.3 + KMS CMK + right to explanation UI + records of processing",
    agents: "@aws-engineer, @ai-production-engineer, @frontend-ai, @mlops-engineer" },
  { framework: "PTES + NIST SP 800-115 + OWASP WSTG 4.2",
    scope: "Pentest methodology canónica con 7 sections per engagement",
    agents: "@ai-red-teamer, @htb-orchestrator + 5 HTB pipeline" },
];

export const agentCategories: { title: string; agents: { name: string; model: "opus" | "sonnet" | "haiku"; phases: string; desc?: string }[] }[] = [
  { title: "Discovery & Planning", agents: [
    { name: "project-planner", model: "opus", phases: "C1 — BLOCKING gate, recurrente cada sprint", desc: "Confirms scope, format and audience before building; gaps become backlog tickets, never silent assumptions." },
    { name: "architect-ai", model: "opus", phases: "C1, C4, C14", desc: "Weighs 2-3 architecture options with scored tradeoffs and ADRs, never a single forced answer." },
    { name: "team-composer", model: "opus", phases: "C1 — project-level roster selection (ADR-093)", desc: "Selects the right agent roster per project from the full catalog before work begins." },
  ]},
  { title: "Data", agents: [
    { name: "data-engineer", model: "opus", phases: "C2, C6, C7", desc: "Builds raw-to-consumed ETL pipelines with Airflow, dbt, Spark and data-quality checks." },
    { name: "data-scientist", model: "opus", phases: "C2, C3", desc: "Runs EDA, hypotheses and feature engineering on train only — never touches the test set." },
    { name: "data-validator", model: "opus", phases: "C2 — BLOCKING", desc: "Hunts temporal leakage, cross-split duplicates and drift before a dataset is trusted." },
  ]},
  { title: "ML / DL / AI", agents: [
    { name: "ml-engineer", model: "opus", phases: "C5, C6, C8", desc: "Trains classical/tabular models with calibration, SHAP interpretability and fairness audits." },
    { name: "dl-engineer", model: "opus", phases: "C5, C6, C8", desc: "Builds deep learning from scratch before frameworks — autograd, transformers, LLM fine-tuning." },
    { name: "ai-engineer", model: "opus", phases: "C4, C6", desc: "Designs production LLM workflows with stateful graphs, context engineering and tracing." },
    { name: "agent-engineer", model: "opus", phases: "C4, C5, C8", desc: "Implements agent patterns — ReAct, Reflexion, tool calling and short plus long-term memory." },
    { name: "rag-engineer", model: "opus", phases: "C4, C5, C8", desc: "Owns the full RAG lifecycle: chunking, embedding, hybrid retrieval, reranking and evaluation." },
    { name: "rl-engineer", model: "opus", phases: "C5, C6 — reward modeling + policy optimization", desc: "Implements RLHF and policy optimization — PPO, DPO, GRPO — with reward models that resist hacking." },
    { name: "distributed-training-engineer", model: "opus", phases: "C6 — multi-GPU/multi-node FSDP + DeepSpeed", desc: "Scales pretraining across multi-node clusters with 3D parallelism, FSDP and DeepSpeed ZeRO." },
    { name: "checkpoint-manager", model: "opus", phases: "C6, C7 — checkpoint lineage + resumable training", desc: "Snapshots multi-agent state for time-travel rollback and resumable training without restarts." },
    { name: "compound-ai-architect", model: "opus", phases: "C4 — multi-model compound system design", desc: "Designs compound systems where many models, tools and verifiers act as one coherent whole." },
  ]},
  { title: "GPU / Performance", agents: [
    { name: "gpu-engineer", model: "opus", phases: "C2, C6", desc: "Accelerates compute with RAPIDS, CuPy and custom CUDA/Triton kernels under tight VRAM limits." },
    { name: "perf-engineer", model: "opus", phases: "C8, C9", desc: "Profiles inference and cuts latency with quantization, ONNX/TensorRT and CUDA graphs." },
  ]},
  { title: "Systems & Infrastructure", agents: [
    { name: "network-engineer", model: "opus", phases: "C4, C6 — Cisco + containerlab/FRR + Packet Tracer", desc: "Designs and emulates Cisco topologies — routing, switching, VLANs, ACLs and NAT." },
    { name: "rust-systems-engineer", model: "opus", phases: "C4, C6 — wgpu/Vulkan + Wayland + PTY internals", desc: "Writes low-level systems Rust — GPU rendering, Wayland and terminal/PTY internals." },
  ]},
  { title: "Production (v3.0 enterprise)", agents: [
    { name: "mlops-engineer", model: "opus", phases: "C7, C8, C12, C13 — 4-eyes + lineage + EU AI Act", desc: "Bridges data science to production with model registry, four-eyes approval and immutable lineage." },
    { name: "model-evaluator", model: "opus", phases: "C8 — FINAL gate", desc: "Delivers the final quantitative verdict — metrics, fairness, drift — before a model ships." },
    { name: "ai-production-engineer", model: "opus", phases: "C10, C12 — OWASP LLM Top 10:2025", desc: "Runs LLM inference at scale with latency SLOs, multi-provider fallback and prompt-injection defense." },
    { name: "deployment", model: "opus", phases: "C9, C10, C11 — Argo Rollouts + game day", desc: "Ships endpoints via progressive canary and validates real runtime against effective config before closing a cycle." },
    { name: "devops", model: "opus", phases: "C7, C9, C10, C12 — SLSA L3 + LGTM stack", desc: "Owns base infra — IaC, hardened Kubernetes, GitOps and signed supply-chain provenance." },
    { name: "monitoring", model: "opus", phases: "C12 — SLO multi-window burn-rate + drift triple", desc: "Separates logs from metrics, flags false-green on empty alarm series and aggregates safely across tenants." },
  ]},
  { title: "Frontend / API / Cloud (v3.0 enterprise)", agents: [
    { name: "frontend-ai", model: "opus", phases: "C12 — WCAG 2.2 + EAA + Stack 2026", desc: "Builds accessible AI dashboards and chat UIs with evidence-grade captures and redacted screenshots." },
    { name: "api-designer", model: "opus", phases: "C4 — OpenAPI 3.1 + Pact + GDPR Art 22", desc: "Designs API contracts — REST, gRPC, MCP — with OpenAPI schemas and consumer-driven tests, never implementation." },
    { name: "aws-engineer", model: "opus", phases: "C2-C14 — Well-Architected ML Lens", desc: "Builds regulated AWS ML platforms and verifies the effective deployed config in-vivo, not just declared IaC." },
  ]},
  { title: "Adversarial Gates", agents: [
    { name: "math-critic", model: "opus", phases: "C3, C5, C6, C8 — BLOCKING", desc: "Validates loss, gradients, numerical stability and sampling — zero invention, only what it can prove." },
    { name: "debt-detector", model: "sonnet", phases: "C6, C8 — INLINE", desc: "Catches unused code, forgotten TODOs, duplication and excess cyclomatic complexity inline." },
    { name: "code-critic", model: "opus", phases: "all — BLOCKING", desc: "Hunts bugs and 19 AI-slop signals; rejects without evidence and never fakes a PASS." },
    { name: "maintainability-engineer", model: "opus", phases: "C8 — BLOCKING (parallel to code-critic)", desc: "Catches code that passes tests but ages badly — magic constants, premature abstractions, hidden coupling." },
    { name: "chief-architect", model: "opus", phases: "C10, C14 — BLOCKING + 3 triggers no-estándar", desc: "Final pre-deploy gate that probes architecture with actionable questions, not decorative checklists." },
    { name: "tester", model: "opus", phases: "C8", desc: "Writes tests for pipelines, models and APIs and blocks release below 80% coverage." },
    { name: "ai-red-teamer", model: "opus", phases: "C2, C4, C8, C9, C10, C12, C13 — NIST AI RMF + ATLAS + OWASP LLM", desc: "Runs in-pipeline adversarial testing, auditing image-content and caption leaks and paraphrased jargon, not just plain text." },
    { name: "ai-redteam-orchestrator", model: "opus", phases: "R0-R8 — Pipeline ART master (ADR-081)", desc: "Orchestrates the 9-phase AI red-teaming pipeline across six specialist safety agents." },
    { name: "formal-verifier", model: "opus", phases: "C8 — formal methods + property proofs", desc: "Acts as the deterministic critic — formal methods and property proofs over heuristic checks." },
  ]},
  { title: "AI Safety & Research", agents: [
    { name: "alignment-researcher", model: "opus", phases: "R6 — alignment findings + reward hacking probes", desc: "Probes alignment and reward hacking as the defensive counterpart to the red team." },
    { name: "interpretability-researcher", model: "opus", phases: "C8 — mechanistic interpretability + attribution", desc: "Opens the black box with mechanistic interpretability — circuits, features and attribution." },
    { name: "evals-engineer", model: "opus", phases: "R5 — dangerous capabilities eval (ASL gating)", desc: "Runs capability and dangerous-capability evals that gate models by safety level." },
    { name: "trust-and-safety-engineer", model: "opus", phases: "R7 — defense validation + safety policy", desc: "Defends production with jailbreak detection, abuse monitoring and content moderation at scale." },
  ]},
  { title: "HTB Pipeline (CVP-only, v3.0 enterprise)", agents: [
    { name: "htb-orchestrator", model: "opus", phases: "all HTB — PTES + ATT&CK + OSCP+/CPTS alignment", desc: "Runs the authorized red-team training pipeline end to end under PTES and ATT&CK mapping." },
    { name: "htb-recon", model: "opus", phases: "F1 — ProjectDiscovery stack 2026", desc: "Produces a structured recon inventory with the modern ProjectDiscovery toolchain, no analysis." },
    { name: "cve-hunter", model: "opus", phases: "F2 — CISA KEV + EPSS + CVSS v4.0", desc: "Ranks vulnerabilities by real exploitability using KEV, EPSS and CVSS v4.0 as a blocking gate." },
    { name: "credential-hunter", model: "opus", phases: "F3 — AD attacks + cloud creds", desc: "Maps credential reuse across services with Active Directory and cloud credential attacks." },
    { name: "exploit-executor", model: "opus", phases: "F4, F6 — toolkit escalation + LOLBAS/GTFOBins", desc: "Executes approved proofs of concept and escalates privileges with a minimal-by-default toolkit." },
    { name: "flag-validator", model: "opus", phases: "F5 — container escape + cloud metadata", desc: "Makes a sub-minute go/abort call on whether a vector actually reaches the flag." },
    { name: "bug-bounty-hunter", model: "opus", phases: "CVP — responsible disclosure + bounty triage", desc: "Works real programs with responsible 90-day disclosure and bounty triage." },
    { name: "mcp-security-auditor", model: "opus", phases: "CVP — MCP server threat surface audit", desc: "Audits the MCP layer threat surface before agentic systems touch real credentials." },
  ]},
  { title: "Utilities — Preflight", agents: [
    { name: "token-optimizer", model: "sonnet", phases: "all — FIRST in delegation", desc: "Compresses context before delegation and never fakes another agent's gate result." },
    { name: "skill-router", model: "sonnet", phases: "all — SECOND in delegation", desc: "Routes the top relevant skills to each specialist and waits for the real result, never simulates output." },
  ]},
  { title: "Utilities — Other", agents: [
    { name: "prompt-engineer", model: "opus", phases: "all", desc: "Diagnoses, improves and versions the prompts that drive every agent." },
    { name: "cost-analyzer", model: "sonnet", phases: "all", desc: "Spots token waste and recommends cheaper models without degrading quality." },
    { name: "sensei", model: "opus", phases: "all — cognitive science 2024-2026 mentor", desc: "A read-only Socratic mentor that guides toward answers instead of handing them over." },
    { name: "git-master", model: "sonnet", phases: "all — commit gatekeeper", desc: "Gatekeeps commits and merges, and checks merge author versus approver before attributing responsibility." },
    { name: "docs-writer", model: "sonnet", phases: "C10, C14", desc: "Writes copy-paste-ready docs from code and schemas; what isn't confirmed isn't documented." },
    { name: "python-specialist", model: "opus", phases: "C8", desc: "Enforces modern Python — typing, structured logging and explicit error handling." },
    { name: "arca-ambient-monitor", model: "sonnet", phases: "all", desc: "Classifies ambient signals by urgency and picks notification channels, read-only and fast." },
    { name: "code-narrator", model: "sonnet", phases: "C3, C5, C6, C8 — auto post-producer", desc: "Explains freshly written code pedagogically right after each producing agent." },
  ]},
];

export const skillFamilies = [
  { name: "ARCA core", count: 7, items: "adr-new · skill-effectiveness · skill-router · token-optimizer · engram-rehydrate · claude-code-patterns · claude-config-audit (justify removed 2026-05-03)" },
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
  { name: "Specialized / domain", count: 57, items: "red-team (pentest-llm-redteam · ml-security · web2-recon) · networking (clab2pkt · packet-tracer) · rust-systems · interpretability · evals · alignment · diagnose · aidesigner-frontend · graphify · karpathy · ..." },
];

// The skillFamilies counts sum to exactly 143 — the canonical skill catalog
// size (every skill carries a SKILL.md per ADR-022). The first 11 families
// are named samples; "Specialized / domain" is the catch-all remainder so the
// total stays truthful without fabricating per-skill family breakdowns.
export const skillTotal = 143;

export const adrs = [
  { n: "001", title: "Opus 4.6 as mandatory model for code-critic", date: "2026-03-24", status: "Accepted" },
  { n: "002", title: "NVIDIA Nemotron as voice reasoning engine", date: "2026-03-28", status: "Accepted" },
  { n: "003", title: "Eight-phase ML pipeline over simpler alternatives", date: "2026-03-24", status: "Accepted" },
  { n: "004", title: "Hooks implemented in Bash, not Python", date: "2026-03-24", status: "Accepted" },
  { n: "005", title: "Piper as local TTS fallback over ElevenLabs", date: "2026-03-28", status: "Accepted" },
  { n: "006", title: "Auto-ADR detector + skill (E.2)", date: "2026-04-29", status: "Accepted" },
  { n: "007", title: "Slash command $ARGUMENTS hardening (ARCA-SEC-1)", date: "2026-04-29", status: "Superseded 2026-05-03" },
  { n: "008", title: "Diff Comprehension Gate v2 (timed read + LLM judge)", date: "2026-04-29", status: "Accepted" },
  { n: "009", title: "Hybrid LLM-as-judge — Opus 4.7 SDK + Qwen 7B", date: "2026-04-30", status: "Accepted (partially superseded — Forced Justification judge removed 2026-05-03)" },
  { n: "010", title: "Obsidian vault as ARCA's auto-doc second-brain", date: "2026-04-30", status: "Accepted" },
  { n: "011", title: "Phase-gate enforcement is no longer aspirational", date: "2026-05-01", status: "Accepted" },
  { n: "012", title: "Async subagent notification stall — fail-safe to v1 fallback", date: "2026-05-01", status: "Accepted" },
  { n: "013", title: "Scheduled-git guardrails — block git ops from cron context", date: "2026-05-01", status: "Accepted" },
  { n: "014", title: "Slash-command test harness — bash hermetic fixtures", date: "2026-05-01", status: "Accepted" },
  { n: "081", title: "Dedicated AI Red Teaming Pipeline (ART — 9 phases R0-R8)", date: "2026-05-25", status: "Accepted" },
  { n: "085", title: "Elevate the 4 Karpathy principles to constitutional", date: "2026-05-30", status: "Accepted" },
  { n: "089", title: "Dynamic Orchestration — @architect-ai proposes per-project agent DAG", date: "2026-05-30", status: "Accepted" },
  { n: "091", title: "Always-On Orchestration Reflex — UserPromptSubmit steering", date: "2026-05-30", status: "Accepted" },
  { n: "092", title: "Client-Facing Leak Gate — block ARCA jargon in client repos", date: "2026-06-02", status: "Accepted" },
];

// The adrs array above is a representative sample of milestone decisions, not
// the full ledger. The repo carries 93 numbered ADRs (001-093); docs/adr/README.md
// is an index, not an ADR. Aggregate count surfaced in metrics + sampleADR.related.
export const adrTotal = 93;

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

// Empirical metrics — pulled from real telemetry logs in ~/.claude/state/
// and ~/.claude/logs/. window: justification stats observed 2026-04-29 to
// 2026-05-03 (when /justify removed entirely), mirror-sync running since
// 2026-04-25, telemetry jsonl since project inception.
export const metrics = {
  windowFrom: "2026-04-25",
  windowTo: "2026-05-03",
  groups: [
    {
      title: "Justification gate (forced-justification.sh — REMOVED 2026-05-03)",
      window: "active 2026-04-29 to 2026-05-03 · 4 days in production",
      rows: [
        { v: 77, l: "Edits approved by LLM judge (coherent)" },
        { v: 10, l: "Edits blocked — judge verdict INCOHERENT" },
        { v: 30, l: "Double-consume attempts blocked (ADV-7 lock)" },
        { v: 11, l: "Edits without prior /justify — blocked" },
        { v: 8, l: "Justify expired (TTL 120s) — blocked" },
        { v: 1, l: "Manual bypass declared (audited)" },
      ],
    },
    {
      title: "Repo mirror sync (repo-mirror-sync.sh)",
      window: "since 2026-04-25",
      rows: [
        { v: 62, l: "Successful syncs repo → ~/.claude/" },
        { v: 1, l: "Settings.json propagation blocked (regression guard)" },
      ],
    },
    {
      title: "Worktree isolation enforcer",
      window: "since project inception",
      rows: [
        { v: 207, l: "Direct main-repo write attempts blocked from agent worktrees" },
        { v: 13, l: "Cron-context git operations denied" },
      ],
    },
    {
      title: "Activity baseline",
      window: "session/commit/telemetry counts are a 2026-05-03 snapshot; ADR + agent counts current as of 2026-06-02",
      rows: [
        { v: 415, l: "Claude Code session starts (2026-05-03 snapshot)" },
        { v: 415, l: "Commits to arca-claude-code main (2026-05-03 snapshot)" },
        { v: 5800, l: "Hook telemetry events recorded (2026-05-03 snapshot)" },
        { v: 93, l: "ADRs written (001-093; 007 superseded)" },
        { v: 16, l: "Agents v3.0 enterprise-grade rewrites (2026-05-03 sweep)" },
      ],
    },
  ],
};

// Sample ADR rendered in full inside the handbook so reviewers can see
// the actual depth of an architectural record without needing repo access.
// ADR-009 chosen because it documents a non-obvious tradeoff (hybrid
// backend) with explicit alternatives + consequences + limits.
export const sampleADR = {
  n: "009",
  title: "Hybrid LLM-as-judge — Opus 4.7 high-stakes, Qwen 7B hot-path",
  status: "Accepted (partially superseded 2026-05-03)",
  date: "2026-04-30",
  related: "ADR-006, ADR-008, ADR-007 (Superseded)",
  context: "ARCA's hook stack accumulated 4 LLM-as-judge instances assuming a single backend (local Ollama Qwen 2.5 7B). After two weeks running in parallel, two failure modes emerged: (1) Qwen 7B confuses surface-token overlap with comprehension on the diff judge, and (2) using Qwen uniformly contradicts ARCA's own model-tiering philosophy (Opus for high-stakes/low-frequency, Haiku for routing). Note: Forced Justification judge (one of the four) was removed entirely on 2026-05-03 — three judges remain (diff comprehension, ADR completeness, engram nudge).",
  decision: "Adopt a hybrid posture. Migrate adr-judge.sh and diff-judge-opus.sh to Opus 4.7 via Claude Code SDK CLI (~12s per call, low-frequency manual/PR-merge paths). Keep llm-judge.sh and engram-nudge-judge.sh on Ollama Qwen 2.5 7B (~2s, hot-path forced-justification + weekly cron classifier).",
  rationale: [
    "Hot-path latency non-negotiable: forced-justification fires on ~30% of Edits; 12s would push session friction past disable-it-out-of-frustration threshold.",
    "High-stakes judges benefit from Opus reasoning: ADR completeness and diff comprehension are tasks where false APPROVED costs more than slowness.",
    "Plan MAX flat-rate eliminates billing pressure (180 EUR/mo covers SDK calls). Decision is purely latency vs quality.",
    "Fork over refactor minimizes blast radius: existing tests continue, rollback is one symlink swap, parent hook's preference logic is 3 lines of bash.",
  ],
  alternatives: [
    "All four judges on Opus 4.7 — Rejected: hot-path latency unacceptable.",
    "Keep all four on Ollama Qwen — Rejected: Qwen measurably worse on Comprehension Gate v2 tricks; false APPROVED on merge or ADR is high-cost.",
    "Refactor-in-place (delete diff-judge.sh) — Rejected: a fork lets the parent hook fall back if Opus regresses; preserves existing test suite.",
  ],
  consequences: [
    "Latency /adr-validate: 2s → 12s (invisible — manual command, not watcher).",
    "Latency PR merge gate: 8s → 12s judge call (within 120s settings.json ceiling).",
    "Forced-justification + Engram cron: unchanged at ~2s (forced-justification removed 2026-05-03).",
    "CI/non-interactive shells: parent hook's v1 fallback (40-word check) preserves graceful degradation when claude CLI missing.",
    "Defense-in-depth idioms preserved: random fence, sanitization regex, fail-closed defaults.",
  ],
  limits: [
    "Adoption tied to claude CLI binary — if removed, fail-open documented.",
    "Plan MAX rate limits — burst of 50 PR merges/10min could throttle (mitigated by TIMEOUT → v1).",
    "Code duplication tracked as ARCA-DEBT-001 (~70% shared structure; refactor deferred until 5th judge appears).",
    "No regression test comparing Opus vs Qwen verdicts on identical inputs — eval harness future work.",
  ],
};

export const forbiddenPatterns = [
  "Don't duplicate capabilities of existing agents",
  "Don't embed full API documentation in prompts",
  "Don't use external models (GPT/Gemini)",
  "Don't advance phases without explicit approval",
  "Don't commit AI-smelling code (19 signals)",
];
