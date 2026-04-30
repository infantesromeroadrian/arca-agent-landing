const cycles = [
  { id: "C1", name: "Discovery" },
  { id: "C2", name: "Data" },
  { id: "C3", name: "Feature" },
  { id: "C4", name: "Design", wait: true },
  { id: "C5", name: "POC" },
  { id: "C6", name: "Build" },
  { id: "C7", name: "MLOps" },
  { id: "C8", name: "Quality" },
  { id: "C9", name: "Pre-Prod" },
  { id: "C10", name: "Deploy" },
  { id: "C11", name: "Post-Deploy" },
  { id: "C12", name: "Monitoring" },
  { id: "C13", name: "Governance" },
  { id: "C14", name: "Sunset" },
];

const gates = [
  {
    id: "gate.01",
    name: "@math-critic",
    label: "Blocking",
    body: "Validates loss functions, gradients, statistical validity, attention scaling, and sampling strategies. Blocks structurally before any code evaluation occurs.",
  },
  {
    id: "gate.02",
    name: "@debt-detector",
    label: "Blocking",
    body: "Catches unused imports/functions, TODOs without tickets, logical duplication >3 sites across the workspace, and enforces cyclomatic complexity limits (max 10).",
  },
  {
    id: "gate.03",
    name: "@code-critic",
    label: "Terminal",
    body: 'Analyzes 19 isolated "AI Slop" signals. Audits architecture, strict security adherence, runtime performance bounds, and deep maintainability limits. No code is final without approval.',
  },
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
  {
    code: "ERR_MIT_01",
    title: "ARCA-SEC-1",
    subject: "$ARGUMENTS hardening",
    body: "Heredoc terminator injection is structurally irreducible in bash. We accept the limit and document it via inverted-style canary tests (T7b/T16b). If a future change accidentally closes the residual, the test fails and forces re-audit.",
  },
  {
    code: "ARCH_04",
    title: "E.2 Auto-ADR",
    subject: "Closing sin #4",
    body: "Closes mortal sin #4 (architecture without ADR). PostToolUse heuristic detects decisional output from architect-ai without ADR. Optional Ollama LLM-as-judge validates 7 Nygard sections prior to local persistence.",
  },
  {
    code: "GATE_V2",
    title: "E.3 Diff Compress",
    subject: "Gate evaluation tuning",
    body: "v1 word-count was defeated by Lorem Ipsum bodies. v2 captures diff, 90s countdown, free-text summary, Ollama Qwen 2.5 7B judge with random fence prompt-injection guard. Verdicts: APPROVED / INCOHERENT / TOO_SHALLOW (fail-closed to v1).",
  },
];

const stack = [
  { k: "MODELS", v: "Opus 4.7 (1M ctx) · Sonnet 4.6 · Haiku 4.5" },
  { k: "PERSISTENCE", v: "Engram MCP (Local SQLite)" },
  { k: "LLM-AS-JUDGE", v: "Ollama Qwen 2.5 7B @127.0.0.1:11434" },
  { k: "RUNTIME", v: "100% bash hooks (Zero startup latency)" },
  { k: "PLAN TIER", v: "Claude MAX flat-rate" },
  { k: "COMPUTE NODE", v: "RTX 2000 Ada Lovelace SM 8.9 (8GB VRAM)" },
];

const GITHUB_URL = "https://github.com/infantesromeroadrian/arca-claude-code";
const FELLOWS_URL = "https://www.anthropic.com/fellows-program";

export default function Home() {
  return (
    <div className="max-w-[1400px] w-full mx-auto border-x border-line min-h-screen flex flex-col relative">
      {/* HEADER */}
      <header className="border-b border-line grid grid-cols-1 md:grid-cols-[auto_1fr_auto]">
        <div className="p-6 md:px-10 border-b md:border-b-0 md:border-r border-line flex items-center">
          <h1 className="font-mondwest text-[36.75px] leading-none uppercase tracking-tight">
            A.R.C.A.
          </h1>
        </div>
        <div className="p-6 md:px-10 hidden md:flex items-center text-xs tracking-widest uppercase opacity-60">
          Adversarial Multi-Agent Engine / Pipeline Interface
        </div>
        <div className="p-6 md:px-10 border-l border-line flex gap-8 items-center text-[11px] tracking-[0.2em] uppercase">
          <a
            href="#cases"
            className="hover:opacity-100 opacity-60 transition-opacity"
          >
            Docs
          </a>
          <a
            href={GITHUB_URL}
            className="hover:opacity-100 opacity-60 transition-opacity"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <span className="h-2 w-2 rounded-full bg-primary/40 pulse" />
        </div>
      </header>

      {/* HERO */}
      <main className="flex-grow">
        <section className="border-b border-line relative overflow-hidden flex flex-col items-center justify-center py-24 md:py-32 px-6 scanline-section">
          <div className="z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
            <span className="text-xs tracking-[0.3em] uppercase opacity-70 mb-8 border border-line px-4 py-1 inline-block">
              System Init
            </span>
            <h2 className="font-mondwest text-[40px] md:text-[64px] leading-[0.9] mb-8">
              ADVERSARIAL MULTI-AGENT SYSTEM
              <br />
              FOR ML/AI ENGINEERING
            </h2>
            <p className="text-base opacity-80 max-w-2xl mx-auto mb-12">
              43 specialized agents · 80 skills · 14-cycle ML pipeline
              <br />9 mortal sins as quality gates
            </p>

            {/* Terminal block */}
            <div className="w-full max-w-3xl border border-line bg-navy mb-12 text-left relative shadow-2xl">
              <div className="border-b border-line flex px-4 py-2 items-center justify-between bg-primary/5">
                <div className="flex gap-2">
                  <span className="w-1.5 h-1.5 bg-primary/30" />
                  <span className="w-1.5 h-1.5 bg-primary/30" />
                  <span className="w-1.5 h-1.5 bg-primary/30" />
                </div>
                <span className="text-[10px] tracking-widest uppercase opacity-50">
                  arca.gate_chain
                </span>
              </div>
              <div className="p-6 text-sm text-primary/80 overflow-x-auto whitespace-nowrap">
                <span className="opacity-50">{">"} arca run pipeline --strict</span>
                <br />
                <br />
                <span className="opacity-60 text-xs">
                  [sys] Evaluating gate chain...
                </span>
                <br />
                <span className="text-primary mt-2 block">
                  → producer
                  <br />
                  &nbsp;&nbsp;↳ <span className="opacity-70">awaiting</span>{" "}
                  @math-critic
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;↳{" "}
                  <span className="opacity-70">awaiting</span> @debt-detector
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳{" "}
                  <span className="opacity-70">awaiting</span> @code-critic
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;↳{" "}
                  <span className="opacity-70">awaiting</span> @git-master
                  <span className="caret-blink" />
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="border border-line px-8 py-4 text-xs tracking-[0.2em] uppercase hover-invert"
              >
                View on GitHub
              </a>
              <a
                href="#cases"
                className="border border-line px-8 py-4 text-xs tracking-[0.2em] uppercase bg-primary text-navyDarker hover:bg-transparent hover:text-primary transition-colors"
              >
                Read ADRs
              </a>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="border-b border-line grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 text-sm uppercase tracking-wider relative">
          <div className="stat-pane">
            <div className="font-mondwest text-4xl mb-2 text-primary">43</div>
            <div className="text-[10px] opacity-60 leading-tight">
              Agents
              <br />
              (20 Opus / 14 Sonnet / 9 Haiku)
            </div>
          </div>
          <div className="stat-pane">
            <div className="font-mondwest text-4xl mb-2 text-primary">80</div>
            <div className="text-[10px] opacity-60 leading-tight">
              Specialized
              <br />
              Skills
            </div>
          </div>
          <div className="stat-pane">
            <div className="font-mondwest text-4xl mb-2 text-primary">44</div>
            <div className="text-[10px] opacity-60 leading-tight">
              Total Tools
              <br />
              (34 Hooks + 10 Lib)
            </div>
          </div>
          <div className="stat-pane">
            <div className="font-mondwest text-4xl mb-2 text-primary">248</div>
            <div className="text-[10px] opacity-60 leading-tight">
              Commits
              <br />
              (Last 30 Days)
            </div>
          </div>
          <div className="stat-pane col-span-2 md:col-span-4 lg:col-span-1 bg-primary/5 flex flex-col justify-center">
            <div className="flex justify-between items-center mb-2 border-b border-line/50 pb-2">
              <span className="text-[10px] opacity-60">Mortal Sins</span>
              <span className="font-mondwest text-xl">0</span>
            </div>
            <div className="flex justify-between items-center mb-2 border-b border-line/50 pb-2">
              <span className="text-[10px] opacity-60">CI Green</span>
              <span className="font-mondwest text-xl">9/9</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] opacity-60">Tests</span>
              <span className="font-mondwest text-xl">104</span>
            </div>
          </div>
        </section>

        {/* GATES + SINS */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_auto] border-b border-line">
          <div className="p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-line">
            <h3 className="text-xs tracking-[0.3em] uppercase opacity-50 mb-12 flex items-center gap-4">
              <span>01</span>
              <span className="h-px bg-primary/25 flex-grow" />
              <span>Adversarial Gate Chain</span>
            </h3>
            <div className="pl-10 relative">
              {gates.map((g) => (
                <div key={g.id} className="relative mb-12 tree-node">
                  <div className="tree-line" />
                  <div className="tree-branch text-primary opacity-50 text-[10px] -left-[45px] top-[18px] absolute bg-navy px-1">
                    ◆
                  </div>
                  <div className="border border-line p-6 bg-navy relative z-10 group hover:border-primary/60 transition-colors">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="font-mondwest text-2xl text-primary flex items-center gap-3">
                        <span className="text-xs font-mono opacity-50 border border-line px-1 rounded-sm">
                          {g.id}
                        </span>
                        {g.name}
                      </h4>
                      <span className="text-[10px] uppercase border font-mono border-line px-2 py-1 bg-primary/10 text-primary">
                        {g.label}
                      </span>
                    </div>
                    <p className="text-sm opacity-70 leading-relaxed">{g.body}</p>
                  </div>
                </div>
              ))}
              <div className="relative tree-node">
                <div className="tree-branch text-primary opacity-50 text-[10px] -left-[45px] top-[18px] absolute bg-navy px-1">
                  ◆
                </div>
                <div className="pl-4 py-4 flex items-center gap-4 opacity-50">
                  <span>↳</span>
                  <span className="uppercase tracking-widest text-xs border-b border-line border-dashed">
                    @git-master (Release)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 lg:w-[400px] bg-primary/5 flex flex-col h-full relative">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-primary/50" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-primary/50" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-primary/50" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-primary/50" />
            <h4 className="font-mondwest text-xl mb-6 uppercase tracking-widest border-b border-line pb-4">
              9 Mortal Sins
            </h4>
            <p className="text-xs opacity-60 mb-8 italic">
              Triggering any axiom fails the pipeline cycle and routes to
              escalation protocol.
            </p>
            <ul className="space-y-4 text-xs flex-grow">
              {sins.map((s) => (
                <li
                  key={s.n}
                  className={
                    s.highlight
                      ? "flex gap-3 text-navyDarker bg-accent px-2 py-1 font-bold"
                      : "flex gap-3"
                  }
                >
                  <span
                    className={
                      s.highlight ? "opacity-50 text-navyDarker" : "opacity-50"
                    }
                  >
                    {s.n}
                  </span>
                  <span>{s.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PIPELINE */}
        <section className="border-b border-line overflow-hidden bg-navy flex flex-col relief-section">
          <div className="p-8 pb-0 border-b border-line flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h3 className="text-xs tracking-[0.3em] uppercase opacity-50 flex items-center gap-4">
              <span>02</span>
              <span>Pipeline ML v4.0 Matrix</span>
            </h3>
            <p className="text-[10px] opacity-60 max-w-sm md:text-right pb-4">
              Each cycle blocks until its gate is signed. Failed phase returns
              to producer with feedback.
              <br />
              (max 2 loops → escalate to architect-ai).
            </p>
          </div>
          <div className="flex overflow-x-auto hide-scrollbar border-b border-line select-none cursor-grab active:cursor-grabbing pb-0">
            {cycles.map((c) => (
              <div
                key={c.id}
                className={
                  c.wait
                    ? "flex-shrink-0 w-[180px] border-r border-line p-6 bg-primary/10 hover:bg-primary/20 transition-colors group relative"
                    : "flex-shrink-0 w-[180px] border-r border-line p-6 hover:bg-primary/5 transition-colors group"
                }
              >
                {c.wait && (
                  <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-primary pulse" />
                )}
                <div
                  className={
                    c.wait
                      ? "text-[10px] opacity-70 text-primary mb-4 font-mono"
                      : "text-[10px] opacity-40 mb-4 font-mono"
                  }
                >
                  {c.wait ? `${c.id} - [WAIT]` : c.id}
                </div>
                <div
                  className={
                    c.wait
                      ? "font-mondwest text-lg uppercase tracking-wide text-primary"
                      : "font-mondwest text-lg uppercase tracking-wide"
                  }
                >
                  {c.name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="cases" className="border-b border-line flex flex-col">
          <div className="p-8 border-b border-line">
            <h3 className="text-xs tracking-[0.3em] uppercase opacity-50">
              <span>03</span> / Honest Engineering Log
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary/25">
            {cases.map((c) => (
              <article
                key={c.title}
                className="p-8 hover:bg-primary/[0.02] transition-colors relative"
              >
                <div className="absolute top-0 right-0 p-2 text-[10px] opacity-30">
                  {c.code}
                </div>
                <h4 className="font-mondwest text-xl mb-4 tracking-wide uppercase text-primary border-b border-dashed border-line pb-2 inline-block">
                  {c.title}
                </h4>
                <div className="text-xs opacity-70 mb-2 mt-4 font-mono text-primary/50">
                  Subject: {c.subject}
                </div>
                <p className="text-sm opacity-80 leading-relaxed mt-4">
                  {c.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* HARDWARE */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] border-b border-line bg-navy">
          <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-line bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(123,179,255,0.04)_10px,rgba(123,179,255,0.04)_20px)] flex flex-col justify-center items-center text-center">
            <div className="w-16 h-16 border border-line flex items-center justify-center mb-6">
              <div className="w-2 h-2 bg-primary" />
            </div>
            <div className="font-mondwest text-2xl uppercase tracking-[0.2em] mb-2">
              Hardware Environment
            </div>
            <div className="text-[10px] tracking-widest uppercase opacity-50">
              Local inference parameters
            </div>
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
            A.R.C.A. was built by Adrian Infantes as a personal research
            system. Every architectural decision is documented in ADRs. Every
            code change passes the gate chain. Every limitation is honestly
            disclosed.
            <br />
            <br />
            <span className="text-primary opacity-100 border border-line px-2 py-1 bg-primary/5">
              Built with Claude — applied to the Anthropic Fellows program 2026.
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-auto shrink-0">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="w-full text-left lg:text-center border border-line px-8 py-4 text-[11px] tracking-[0.2em] uppercase hover-invert relative group"
          >
            <span className="opacity-50 group-hover:opacity-100 absolute left-4 w-2 h-2 bg-primary group-hover:bg-navyDarker top-1/2 -translate-y-1/2 rounded-full transition-all" />
            <span className="pl-4 lg:pl-0">
              GitHub repo (arca-claude-code)
            </span>
          </a>
          <div className="grid grid-cols-2 gap-4">
            <a
              href={`${GITHUB_URL}/tree/main/docs/adr`}
              target="_blank"
              rel="noreferrer"
              className="border border-line px-4 py-4 text-[10px] tracking-[0.1em] uppercase hover:bg-primary/10 transition-colors text-center opacity-80 hover:opacity-100"
            >
              Read all 8 ADRs
            </a>
            <a
              href={FELLOWS_URL}
              target="_blank"
              rel="noreferrer"
              className="border border-line px-4 py-4 text-[10px] tracking-[0.1em] uppercase bg-primary text-navyDarker hover:opacity-90 transition-opacity text-center font-bold"
            >
              Apply to Fellows
            </a>
          </div>
        </div>
      </footer>

      <div className="h-2 w-full border-t border-line bg-primary/5 flex items-center px-4">
        <div className="w-1 h-1 bg-primary/50 ml-auto" />
      </div>
    </div>
  );
}
