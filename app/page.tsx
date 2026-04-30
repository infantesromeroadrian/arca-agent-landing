const cycles = [
  { id: "C1", name: "Discovery", owner: "requirements-analyst" },
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

const htbPhases = [
  { id: "F0", name: "Setup", desc: "Directory scaffolding (nmap/, loot/, exploits/, notes/, flags/)." },
  { id: "F1", name: "Recon", desc: "@htb-recon mechanical enumeration → loot/recon.json." },
  { id: "F2", name: "CVE Gate", desc: "@cve-hunter ranks CVEs by service+version (BLOCKING)." },
  { id: "F3", name: "Cred Hunt", desc: "@credential-hunter cross-service reuse matrix." },
  { id: "F4", name: "Exploit", desc: "@exploit-executor PoC rank #1, minimal toolkit (curl/git/ssh/python3/nc)." },
  { id: "F5", name: "Flag Gate", desc: "@flag-validator <60s GO/ABORT decision." },
];

const gates = [
  { id: "gate.01", name: "@math-critic", label: "Blocking",
    body: "Validates loss functions, gradients, statistical validity, attention scaling, and sampling strategies. Blocks structurally before any code evaluation occurs." },
  { id: "gate.02", name: "@debt-detector", label: "Blocking",
    body: "Catches unused imports/functions, TODOs without tickets, logical duplication >3 sites across the workspace, and enforces cyclomatic complexity limits (max 10)." },
  { id: "gate.03", name: "@code-critic", label: "Terminal",
    body: 'Analyzes 19 isolated "AI Slop" signals. Audits architecture, strict security adherence, runtime performance bounds, and deep maintainability limits. No code is final without approval.' },
];

const sins = [
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

const cases = [
  { code: "ERR_MIT_01", title: "ARCA-SEC-1", subject: "$ARGUMENTS hardening",
    body: "Heredoc terminator injection is structurally irreducible in bash. We accept the limit and document it via inverted-style canary tests (T7b/T16b). If a future change accidentally closes the residual, the test fails and forces re-audit." },
  { code: "ARCH_04", title: "E.2 Auto-ADR", subject: "Closing sin #4",
    body: "Closes mortal sin #4 (architecture without ADR). PostToolUse heuristic detects decisional output from architect-ai without ADR. Claude Opus 4.7 LLM-as-judge (via Code SDK) validates 7 Nygard sections prior to local persistence." },
  { code: "GATE_V2", title: "E.3 Diff Compress", subject: "Gate evaluation tuning",
    body: "v1 word-count was defeated by Lorem Ipsum bodies. v2 captures diff, 90s countdown, free-text summary, Claude Opus 4.7 judge (via Code SDK) with random fence prompt-injection guard. Verdicts: APPROVED / INCOHERENT / TOO_SHALLOW (fail-closed to v1)." },
];

const stack = [
  { k: "MODELS", v: "Opus 4.7 (1M ctx) · Sonnet 4.6 · Haiku 4.5" },
  { k: "PERSISTENCE", v: "Engram MCP (Local SQLite)" },
  { k: "LLM-AS-JUDGE", v: "Hybrid: Opus 4.7 SDK (high-stakes) + Qwen 2.5 7B (hot-path)" },
  { k: "RUNTIME", v: "100% bash hooks (Zero startup latency)" },
  { k: "PLAN TIER", v: "Claude MAX flat-rate" },
  { k: "COMPUTE NODE", v: "RTX 2000 Ada Lovelace SM 8.9 (8GB VRAM)" },
];

const agentCategories: { title: string; agents: { name: string; model: "opus" | "sonnet" | "haiku"; phases: string }[] }[] = [
  { title: "Discovery & Planning", agents: [
    { name: "requirements-analyst", model: "sonnet", phases: "C1" },
    { name: "scrum-master", model: "haiku", phases: "C1" },
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
  ]},
];

const skillFamilies = [
  { name: "ARCA core", count: 7, items: "adr-new · justify · skill-effectiveness · skill-router · token-optimizer · engram-rehydrate · claude-code-patterns" },
  { name: "Anti-AI-slop", count: 3, items: "karpathy-guidelines · verbalized-sampling · gentleman-ai" },
  { name: "LangChain ecosystem", count: 10, items: "langchain · langgraph · langchain-rag · langsmith · ..." },
  { name: "Deep Agents", count: 3, items: "deep-agents-core · deep-agents-memory · deep-agents-orchestration" },
  { name: "MCP / SDK", count: 2, items: "mcp-development · anthropic-sdk" },
  { name: "ML Engineering", count: 12, items: "ml-fundamentals · mlops · model-interpretability · inference-optimization · time-series · multimodal-ai · edge-ml · ..." },
  { name: "RAG", count: 2, items: "rag-systems · rag-new" },
  { name: "Security", count: 13, items: "cybersecurity · htb-methodology · web3-audit · owasp-security · ml-security · bug-bounty · ..." },
  { name: "Pipeline / Utilities", count: 13, items: "requirements-engineering · agile-ml · cicd · git · testing · python-init · ..." },
  { name: "Reviews / Voting", count: 6, items: "review-pr · voting-review · team-debug · team-ml-review · team-refactor · team-security" },
  { name: "Vercel ecosystem", count: 26, items: "vercel:ai-sdk · vercel:nextjs · vercel:deploy · vercel:shadcn · ..." },
];

const adrs = [
  { n: "001", title: "Opus 4.6 as mandatory model for code-critic", date: "2026-03-24", status: "Accepted" },
  { n: "002", title: "NVIDIA Nemotron as voice reasoning engine", date: "2026-03-28", status: "Accepted" },
  { n: "003", title: "Eight-phase ML pipeline over simpler alternatives", date: "2026-03-24", status: "Accepted" },
  { n: "004", title: "Hooks implemented in Bash, not Python", date: "2026-03-24", status: "Accepted" },
  { n: "005", title: "Piper as local TTS fallback over ElevenLabs", date: "2026-03-28", status: "Accepted" },
  { n: "006", title: "Auto-ADR detector + skill (E.2)", date: "2026-04-29", status: "Accepted" },
  { n: "007", title: "Slash command $ARGUMENTS hardening (ARCA-SEC-1)", date: "2026-04-29", status: "Accepted" },
  { n: "008", title: "Diff Comprehension Gate v2 (timed read + LLM judge)", date: "2026-04-29", status: "Accepted" },
  { n: "009", title: "Hybrid LLM-as-judge — Opus 4.7 SDK + Qwen 7B", date: "2026-04-30", status: "Accepted" },
];

const aiSlopSignals = [
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

const forbiddenPatterns = [
  "Don't duplicate capabilities of existing agents",
  "Don't embed full API documentation in prompts",
  "Don't use external models (GPT/Gemini)",
  "Don't advance phases without explicit approval",
  "Don't commit AI-smelling code (19 signals)",
];

const GITHUB_URL = "https://github.com/infantesromeroadrian/arca-claude-code";
const CONTACT_EMAIL = "infantesromeroadrian@gmail.com";

function ModelTag({ model }: { model: "opus" | "sonnet" | "haiku" }) {
  const styles = {
    opus: "bg-accent/20 text-accent border-accent/40",
    sonnet: "bg-primary/15 text-primary border-primary/30",
    haiku: "bg-primary/5 text-primary/70 border-primary/20",
  };
  return (
    <span className={`text-[9px] font-mono uppercase border px-1.5 py-0.5 ${styles[model]}`}>
      {model}
    </span>
  );
}

export default function Home() {
  return (
    <div className="max-w-[1400px] w-full mx-auto border-x border-line min-h-screen flex flex-col relative">
      {/* HEADER */}
      <header className="border-b border-line grid grid-cols-1 md:grid-cols-[auto_1fr_auto]">
        <div className="p-6 md:px-10 border-b md:border-b-0 md:border-r border-line flex items-center">
          <h1 className="font-mondwest text-[36.75px] leading-none uppercase tracking-tight">A.R.C.A.</h1>
        </div>
        <div className="p-6 md:px-10 hidden md:flex items-center text-xs tracking-widest uppercase opacity-60">
          Adversarial Multi-Agent Engine / Pipeline Interface
        </div>
        <div className="p-6 md:px-10 border-l border-line flex gap-8 items-center text-[11px] tracking-[0.2em] uppercase">
          <a href="#agents" className="hover:opacity-100 opacity-60 transition-opacity">Agents</a>
          <a href="#adrs" className="hover:opacity-100 opacity-60 transition-opacity">ADRs</a>
          <a href={GITHUB_URL} className="hover:opacity-100 opacity-60 transition-opacity" target="_blank" rel="noreferrer">GitHub</a>
          <span className="h-2 w-2 rounded-full bg-primary/40 pulse" />
        </div>
      </header>

      <main className="flex-grow">
        {/* HERO */}
        <section className="border-b border-line relative overflow-hidden flex flex-col items-center justify-center py-24 md:py-32 px-6 scanline-section">
          <div className="z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
            <span className="text-xs tracking-[0.3em] uppercase opacity-70 mb-8 border border-line px-4 py-1 inline-block">System Init</span>
            <h2 className="font-mondwest text-[40px] md:text-[64px] leading-[0.9] mb-8">
              ADVERSARIAL MULTI-AGENT SYSTEM<br />FOR ML/AI ENGINEERING
            </h2>
            <p className="text-base opacity-80 max-w-2xl mx-auto mb-12">
              43 specialized agents · 83 skills · 14-cycle ML pipeline<br />9 mortal sins as quality gates
            </p>
            <div className="w-full max-w-3xl border border-line bg-navy mb-12 text-left relative shadow-2xl">
              <div className="border-b border-line flex px-4 py-2 items-center justify-between bg-primary/5">
                <div className="flex gap-2">
                  <span className="w-1.5 h-1.5 bg-primary/30" />
                  <span className="w-1.5 h-1.5 bg-primary/30" />
                  <span className="w-1.5 h-1.5 bg-primary/30" />
                </div>
                <span className="text-[10px] tracking-widest uppercase opacity-50">arca.gate_chain</span>
              </div>
              <div className="p-6 text-sm text-primary/80 overflow-x-auto whitespace-nowrap">
                <span className="opacity-50">{">"} arca run pipeline --strict</span><br /><br />
                <span className="opacity-60 text-xs">[sys] Evaluating gate chain...</span><br />
                <span className="text-primary mt-2 block">
                  → producer<br />
                  &nbsp;&nbsp;↳ <span className="opacity-70">awaiting</span> @math-critic<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;↳ <span className="opacity-70">awaiting</span> @debt-detector<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <span className="opacity-70">awaiting</span> @code-critic<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳ <span className="opacity-70">awaiting</span> @git-master<span className="caret-blink" />
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="border border-line px-8 py-4 text-xs tracking-[0.2em] uppercase hover-invert">View on GitHub</a>
              <a href="#adrs" className="border border-line px-8 py-4 text-xs tracking-[0.2em] uppercase bg-primary text-navyDarker hover:bg-transparent hover:text-primary transition-colors">Read ADRs</a>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-b border-line grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 text-sm uppercase tracking-wider relative">
          <div className="stat-pane"><div className="font-mondwest text-4xl mb-2 text-primary">43</div><div className="text-[10px] opacity-60 leading-tight">Agents<br />(20·14·9)</div></div>
          <div className="stat-pane"><div className="font-mondwest text-4xl mb-2 text-primary">83</div><div className="text-[10px] opacity-60 leading-tight">Specialized<br />Skills</div></div>
          <div className="stat-pane"><div className="font-mondwest text-4xl mb-2 text-primary">44</div><div className="text-[10px] opacity-60 leading-tight">Hooks<br />(34 + 10 lib)</div></div>
          <div className="stat-pane"><div className="font-mondwest text-4xl mb-2 text-primary">8</div><div className="text-[10px] opacity-60 leading-tight">Architecture<br />Decision Records</div></div>
          <div className="stat-pane"><div className="font-mondwest text-4xl mb-2 text-primary">248</div><div className="text-[10px] opacity-60 leading-tight">Commits<br />(Last 30 Days)</div></div>
          <div className="stat-pane bg-primary/5 flex flex-col justify-center">
            <div className="flex justify-between items-center mb-2 border-b border-line/50 pb-2"><span className="text-[10px] opacity-60">Mortal Sins</span><span className="font-mondwest text-xl">0</span></div>
            <div className="flex justify-between items-center mb-2 border-b border-line/50 pb-2"><span className="text-[10px] opacity-60">CI Green</span><span className="font-mondwest text-xl">9/9</span></div>
            <div className="flex justify-between items-center"><span className="text-[10px] opacity-60">Tests</span><span className="font-mondwest text-xl">104</span></div>
          </div>
        </section>

        {/* GATES + SINS */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_auto] border-b border-line">
          <div className="p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-line">
            <h3 className="text-xs tracking-[0.3em] uppercase opacity-50 mb-12 flex items-center gap-4"><span>01</span><span className="h-px bg-primary/25 flex-grow" /><span>Adversarial Gate Chain</span></h3>
            <div className="pl-10 relative">
              {gates.map((g) => (
                <div key={g.id} className="relative mb-12 tree-node">
                  <div className="tree-line" />
                  <div className="tree-branch text-primary opacity-50 text-[10px] -left-[45px] top-[18px] absolute bg-navy px-1">◆</div>
                  <div className="border border-line p-6 bg-navy relative z-10 group hover:border-primary/60 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-mondwest text-2xl text-primary flex items-center gap-3">
                        <span className="text-xs font-mono opacity-50 border border-line px-1 rounded-sm">{g.id}</span>
                        {g.name}
                      </h4>
                      <span className="text-[10px] uppercase border font-mono border-line px-2 py-1 bg-primary/10 text-primary">{g.label}</span>
                    </div>
                    <p className="text-sm opacity-70 leading-relaxed">{g.body}</p>
                  </div>
                </div>
              ))}
              <div className="relative tree-node">
                <div className="tree-branch text-primary opacity-50 text-[10px] -left-[45px] top-[18px] absolute bg-navy px-1">◆</div>
                <div className="pl-4 py-4 flex items-center gap-4 opacity-50"><span>↳</span><span className="uppercase tracking-widest text-xs border-b border-line border-dashed">@git-master (Release)</span></div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 lg:w-[400px] bg-primary/5 flex flex-col h-full relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/50" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/50" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/50" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/50" />
            <h4 className="font-mondwest text-xl mb-6 uppercase tracking-widest border-b border-line pb-4">9 Mortal Sins</h4>
            <p className="text-xs opacity-60 mb-8 italic">Triggering any axiom fails the pipeline cycle and routes to escalation protocol.</p>
            <ul className="space-y-4 text-xs flex-grow">
              {sins.map((s) => (
                <li key={s.n} className={s.highlight ? "flex gap-3 text-navyDarker bg-accent px-2 py-1 font-bold" : "flex gap-3"}>
                  <span className={s.highlight ? "opacity-50 text-navyDarker" : "opacity-50"}>{s.n}</span>
                  <span>{s.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PIPELINE ML */}
        <section className="border-b border-line overflow-hidden bg-navy flex flex-col relief-section">
          <div className="p-8 pb-0 border-b border-line flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h3 className="text-xs tracking-[0.3em] uppercase opacity-50 flex items-center gap-4"><span>02</span><span>Pipeline ML v4.0 — 14 Cycles</span></h3>
            <p className="text-[10px] opacity-60 max-w-sm md:text-right pb-4">Each cycle blocks until its gate is signed. Failed phase returns to producer with feedback.<br />(max 2 loops → escalate to architect-ai).</p>
          </div>
          <div className="flex overflow-x-auto hide-scrollbar border-b border-line select-none cursor-grab active:cursor-grabbing pb-0">
            {cycles.map((c) => (
              <div key={c.id} className={c.wait
                ? "flex-shrink-0 w-[200px] border-r border-line p-6 bg-primary/10 hover:bg-primary/20 transition-colors group relative"
                : "flex-shrink-0 w-[200px] border-r border-line p-6 hover:bg-primary/5 transition-colors group"}>
                {c.wait && <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-primary pulse" />}
                <div className={c.wait ? "text-[10px] opacity-70 text-primary mb-4 font-mono" : "text-[10px] opacity-40 mb-4 font-mono"}>
                  {c.wait ? `${c.id} - [WAIT]` : c.id}
                </div>
                <div className={c.wait ? "font-mondwest text-lg uppercase tracking-wide text-primary mb-2" : "font-mondwest text-lg uppercase tracking-wide mb-2"}>
                  {c.name}
                </div>
                <div className="text-[9px] opacity-50 font-mono mt-2 pt-2 border-t border-primary/15">
                  → {c.owner}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HTB PIPELINE */}
        <section className="border-b border-line bg-navy">
          <div className="p-8 border-b border-line flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h3 className="text-xs tracking-[0.3em] uppercase opacity-50 flex items-center gap-4"><span>03</span><span>HTB Pipeline — 6 Phases (Offensive Security)</span></h3>
            <p className="text-[10px] opacity-60 max-w-sm md:text-right">Activates only under Anthropic CVP authorization + legitimate HTB scope.<br />Hard rules: CVE-first gate · Flag-viability gate · 3-strike abort · No exfil outside lab.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-primary/25">
            {htbPhases.map((p) => (
              <div key={p.id} className="p-6 hover:bg-primary/5 transition-colors">
                <div className="text-[10px] opacity-40 mb-3 font-mono">{p.id}</div>
                <div className="font-mondwest text-base uppercase tracking-wide mb-2">{p.name}</div>
                <div className="text-[10px] opacity-60 leading-relaxed">{p.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="cases" className="border-b border-line flex flex-col">
          <div className="p-8 border-b border-line"><h3 className="text-xs tracking-[0.3em] uppercase opacity-50"><span>04</span> / Honest Engineering Log</h3></div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary/25">
            {cases.map((c) => (
              <article key={c.title} className="p-8 hover:bg-primary/[0.02] transition-colors relative">
                <div className="absolute top-0 right-0 p-2 text-[10px] opacity-30">{c.code}</div>
                <h4 className="font-mondwest text-xl mb-4 tracking-wide uppercase text-primary border-b border-dashed border-line pb-2 inline-block">{c.title}</h4>
                <div className="text-xs opacity-70 mb-2 mt-4 font-mono text-primary/50">Subject: {c.subject}</div>
                <p className="text-sm opacity-80 leading-relaxed mt-4">{c.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* AGENT ROSTER */}
        <section id="agents" className="border-b border-line">
          <div className="p-8 border-b border-line">
            <h3 className="text-xs tracking-[0.3em] uppercase opacity-50"><span>05</span> / Agent Roster — 43 Specialized Agents</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-primary/25">
            {agentCategories.slice(0, 6).map((cat) => (
              <div key={cat.title} className="p-6 border-b md:border-b border-primary/25 last:border-b-0">
                <h4 className="font-mondwest text-base uppercase tracking-wider mb-4 text-primary">{cat.title}</h4>
                <ul className="space-y-2">
                  {cat.agents.map((a) => (
                    <li key={a.name} className="flex items-center justify-between gap-3 text-xs">
                      <span className="font-mono text-primary/90 truncate">@{a.name}</span>
                      <span className="flex items-center gap-2 shrink-0">
                        <span className="text-[9px] opacity-50 font-mono">{a.phases}</span>
                        <ModelTag model={a.model} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-primary/25 border-t border-primary/25">
            {agentCategories.slice(6).map((cat) => (
              <div key={cat.title} className="p-6 border-b border-primary/25 last:border-b-0">
                <h4 className="font-mondwest text-base uppercase tracking-wider mb-4 text-primary">{cat.title}</h4>
                <ul className="space-y-2">
                  {cat.agents.map((a) => (
                    <li key={a.name} className="flex items-center justify-between gap-3 text-xs">
                      <span className="font-mono text-primary/90 truncate">@{a.name}</span>
                      <span className="flex items-center gap-2 shrink-0">
                        <span className="text-[9px] opacity-50 font-mono">{a.phases}</span>
                        <ModelTag model={a.model} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS CATALOG */}
        <section className="border-b border-line">
          <div className="p-8 border-b border-line">
            <h3 className="text-xs tracking-[0.3em] uppercase opacity-50"><span>06</span> / Skills Catalog — 83 Specialized Skills (11 Families)</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x lg:divide-x divide-primary/25">
            {skillFamilies.map((f) => (
              <div key={f.name} className="p-6 border-b border-primary/25 last:border-b-0 md:border-b md:last:border-b-0 lg:border-b">
                <div className="flex justify-between items-baseline mb-3 border-b border-dashed border-line pb-2">
                  <h4 className="font-mondwest text-base uppercase tracking-wider text-primary">{f.name}</h4>
                  <span className="text-xs font-mono opacity-50">×{f.count}</span>
                </div>
                <p className="text-[11px] opacity-70 leading-relaxed font-mono">{f.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ADRs */}
        <section id="adrs" className="border-b border-line">
          <div className="p-8 border-b border-line">
            <h3 className="text-xs tracking-[0.3em] uppercase opacity-50"><span>07</span> / Architecture Decision Records — 8 Accepted</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-mono">
              <thead className="bg-primary/5 border-b border-line text-[10px] uppercase tracking-widest">
                <tr>
                  <th className="p-4 text-left opacity-60 w-16">N</th>
                  <th className="p-4 text-left opacity-60">Title</th>
                  <th className="p-4 text-left opacity-60 w-32">Status</th>
                  <th className="p-4 text-left opacity-60 w-32">Date</th>
                </tr>
              </thead>
              <tbody>
                {adrs.map((a) => (
                  <tr key={a.n} className="border-b border-primary/15 hover:bg-primary/[0.02] transition-colors">
                    <td className="p-4 opacity-50 font-bold">{a.n}</td>
                    <td className="p-4 text-primary">
                      <a href={`${GITHUB_URL}/blob/main/docs/adr/${a.n}-${a.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}.md`} target="_blank" rel="noreferrer" className="hover:underline">
                        {a.title}
                      </a>
                    </td>
                    <td className="p-4">
                      <span className="text-[10px] uppercase border border-primary/30 px-2 py-1 bg-primary/10 text-primary">{a.status}</span>
                    </td>
                    <td className="p-4 opacity-60">{a.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* AI SLOP DETECTION */}
        <section className="border-b border-line bg-navy relief-section">
          <div className="p-8 border-b border-line flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h3 className="text-xs tracking-[0.3em] uppercase opacity-50 flex items-center gap-4"><span>08</span><span>AI Slop Detection — 19 Signals That Block Merge</span></h3>
            <p className="text-[10px] opacity-60 max-w-md md:text-right">Quantified detection — not vibes. Adversarial review by @code-critic blocks merge on any active signal.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary/15">
            {aiSlopSignals.map((s, i) => (
              <div key={i} className="p-5 border-b border-primary/15 flex items-start gap-4 text-xs hover:bg-primary/[0.02] transition-colors">
                <span className="font-mondwest text-2xl text-primary opacity-40 leading-none w-8 shrink-0">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <span className="opacity-80 leading-relaxed">{s}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FORBIDDEN PATTERNS */}
        <section className="border-b border-line">
          <div className="p-8 border-b border-line">
            <h3 className="text-xs tracking-[0.3em] uppercase opacity-50"><span>09</span> / Forbidden Patterns</h3>
          </div>
          <ul className="divide-y divide-primary/15">
            {forbiddenPatterns.map((p, i) => (
              <li key={i} className="p-6 flex items-start gap-6 hover:bg-primary/[0.02] transition-colors">
                <span className="font-mono text-xs text-accent opacity-70 mt-1 shrink-0">[FORBIDDEN.0{i + 1}]</span>
                <span className="text-sm opacity-90">{p}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* HARDWARE */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] border-b border-line bg-navy">
          <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-line bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(123,179,255,0.04)_10px,rgba(123,179,255,0.04)_20px)] flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 border border-line flex items-center justify-center mb-6"><div className="w-2 h-2 bg-primary" /></div>
            <div className="font-mondwest text-2xl uppercase tracking-[0.2em] mb-2">Hardware Environment</div>
            <div className="text-[10px] tracking-widest uppercase opacity-50">Local inference parameters</div>
          </div>
          <div className="p-8 md:p-12 text-sm">
            <ul className="space-y-4 font-mono max-w-2xl">
              {stack.map((s) => (
                <li key={s.k} className="flex items-end gap-2">
                  <span className="opacity-60 whitespace-nowrap">{s.k}</span>
                  <span className="flex-grow border-b border-dotted border-primary/40 h-4 min-w-[20px]" />
                  <span className="text-right">{s.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="p-8 md:p-16 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 bg-navy border-t-0">
        <div className="max-w-2xl">
          <div className="h-px w-12 bg-primary mb-8 opacity-50" />
          <p className="text-xs leading-loose opacity-60 font-mono mb-6">
            A.R.C.A. was built by Adrian Infantes as a personal research system. Every architectural decision is documented in ADRs. Every code change passes the gate chain. Every limitation is honestly disclosed.
            <br /><br />
            <span className="text-primary opacity-100 border border-line px-2 py-1 bg-primary/5">This site is my application to the Anthropic Fellows program 2026.</span>
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full lg:w-auto shrink-0">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="w-full text-left lg:text-center border border-line px-8 py-4 text-[11px] tracking-[0.2em] uppercase hover-invert relative group">
            <span className="opacity-50 group-hover:opacity-100 absolute left-4 w-2 h-2 bg-primary group-hover:bg-navyDarker top-1/2 -translate-y-1/2 rounded-full transition-all" />
            <span className="pl-4 lg:pl-0">GitHub repo (arca-claude-code)</span>
          </a>
          <div className="grid grid-cols-2 gap-4">
            <a href={`${GITHUB_URL}/tree/main/docs/adr`} target="_blank" rel="noreferrer" className="border border-line px-4 py-4 text-[10px] tracking-[0.1em] uppercase hover:bg-primary/10 transition-colors text-center opacity-80 hover:opacity-100">Read all 9 ADRs</a>
            <a href={`mailto:${CONTACT_EMAIL}?subject=A.R.C.A.%20%E2%80%94%20Fellows%202026`} className="border border-line px-4 py-4 text-[10px] tracking-[0.1em] uppercase bg-primary text-navyDarker hover:opacity-90 transition-opacity text-center font-bold">Contact</a>
          </div>
        </div>
      </footer>

      <div className="h-2 w-full border-t border-line bg-primary/5 flex items-center px-4">
        <div className="w-1 h-1 bg-primary/50 ml-auto" />
      </div>
    </div>
  );
}
