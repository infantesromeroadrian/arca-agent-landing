import {
  GITHUB_URL,
  CONTACT_EMAIL,
  cycles,
  gates,
  sins,
  stack,
  adrs,
} from "@/app/lib/arca-data";
import { RevealOnScroll } from "@/app/components/RevealOnScroll";

/* openclaw.ai structural clone — estricto.
   Hero · ⟩ What A.R.C.A Does · ⟩ Quick Look · ⟩ The Gate Chain ·
   ⟩ Built On · ⟩ Pipeline · ⟩ Architecture Decisions · ⟩ 9 Mortal Sins ·
   ⟩ Stack · ⟩ Apply / Contact · Footer

   Visual language: flat 4-color palette already in globals.css.
   Section marker ⟩ (U+27E9) on every H2 (openclaw signature).
   Cards: surface #090E18, border #191D28, radius 12px, no shadow.
   Primary CTA: white-on-black. Ghost CTA: surface with border. */

const HERO_HEADLINE = "The adversarial agentic system that actually ships code.";
const HERO_TAGLINE =
  "58 specialized agents. 3 pipelines. 90 ADRs. Zero AI slop tolerated.";

const STATS = [
  { value: "56", label: "Specialized Agents", sub: "50 Opus · 8 Sonnet · 0 Haiku" },
  { value: "140", label: "Skills Catalog", sub: "Loaded surgically per task" },
  { value: "81", label: "Architecture Decisions", sub: "Nygard ADRs" },
  { value: "3", label: "Pipelines", sub: "ML (14 cycles) · HTB (6 phases) · ART (9 phases)" },
  { value: "53", label: "Bash Hooks", sub: "Wired across 14 lifecycle events" },
  { value: "30+", label: "MCP Servers", sub: "Engram, GitHub, HTB, Exa, Obsidian, +25" },
];

const PILLARS = [
  {
    title: "56 Specialized Agents",
    body:
      "Each with its own model assignment (Opus for reasoning, Sonnet for implementation), specific role, blocking gate and audit responsibility. From @data-validator to @ai-redteam-orchestrator.",
  },
  {
    title: "Adversarial Gate Chain",
    body:
      "Producer → @math-critic → @debt-detector → @code-critic → @chief-architect. No code reaches main without explicit sign-off. 52 bash hooks enforce the chain at PreToolUse / PostToolUse level.",
  },
  {
    title: "3 Pipelines (ML · HTB · ART)",
    body:
      "ML: C1→C14 (14 cycles, 65 phases). HTB: F0→F7 (CVE-first CTF with MCP integration). ART: R0→R8 (AI Red Teaming, MITRE ATLAS + OWASP LLM Top 10:2025, ADR-081).",
  },
  {
    title: "81 Documented Decisions",
    body:
      "Every architectural choice ships as a Nygard ADR: context, alternatives weighed, consequences. Covers architecture, security, governance, pipelines and the meta-system itself.",
  },
  {
    title: "140-Skill Catalog",
    body:
      "OWASP security, ML engineering, DevOps, RAG patterns, agent orchestration, HTB CTF methodology, AI red teaming, prompt engineering. @skill-router selects ≤3 per task.",
  },
  {
    title: "Honest Disclosure",
    body:
      "Inverted-style canary tests assert known bugs still occur, so a future change cannot silently mask a structural limit. 19 AI-slop signals detected pre-merge. Zero hidden state.",
  },
  {
    title: "Dynamic Orchestration",
    body:
      "A 4th mode for the long tail no fixed pipeline covers. @architect-ai proposes a bespoke agent DAG — which subagents, in what order, with which adversarial critics per node — for Adrian's approval before any agent executes. Two-layer gate enforcement: a schema-floor validator rejects under-gated proposals at declaration, a runtime hook hard-blocks at invocation. /orchestrate · ADR-089.",
  },
];

const GATE_STEPS = [
  {
    stage: "01",
    name: "@math-critic",
    role: "Mathematical correctness",
    body:
      "Validates loss functions, gradients, numerical stability, attention scaling, sampling strategies. Blocking on producer code from @ml-engineer / @dl-engineer / @ai-engineer in C3, C5, C6, C8.",
  },
  {
    stage: "02",
    name: "@debt-detector",
    role: "Inline mechanic",
    body:
      "Catches unused imports / functions, TODOs without tickets, logical duplication (>3 sites), cyclomatic complexity over 10. Blocking on producer output in C6 and C8.",
  },
  {
    stage: "03",
    name: "@code-critic",
    role: "Terminal gate",
    body:
      "19 isolated AI-slop signals. Audits architecture, strict security adherence, runtime performance, deep maintainability limits. No code is final without explicit approval.",
  },
  {
    stage: "04",
    name: "@chief-architect",
    role: "Pre-deploy seal",
    body:
      "C10 deploy gate. Cross-checks that @code-critic, @math-critic, @model-evaluator, @tester and @ai-red-teamer signed off. Sin firma, no hay deploy.",
  },
];

const BUILT_ON = [
  "Claude Opus 4.8",
  "Anthropic SDK",
  "MCP",
  "LangGraph",
  "LangChain",
  "Engram",
  "Ollama",
  "Qwen 2.5 7B",
  "Obsidian",
  "Excalidraw",
  "GitHub",
  "Vercel",
  "Next.js 15",
  "Tailwind v4",
  "PostgreSQL",
  "RTX 2000 Ada",
];

function Mark() {
  return (
    <span aria-hidden="true" className="text-primary mr-2 font-display">
      &#10217;
    </span>
  );
}

function PrimaryCTA({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="btn-brand inline-flex items-center gap-2 px-6 py-3 font-body text-sm font-semibold"
    >
      {children}
      <span aria-hidden="true">-&gt;</span>
    </a>
  );
}

/* Icon SVG library — abstract geometric symbols for the 6 feature pillars.
   Inline so no extra dep. Each icon goes inside an .icon-circle. */
function IconAgents() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="2.5" /><circle cx="14" cy="6" r="2.5" /><circle cx="10" cy="14" r="2.5" />
      <path d="M6 8.5 L10 11.5 M14 8.5 L10 11.5" />
    </svg>
  );
}
function IconGate() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="14" height="9" rx="1" /><path d="M6 6 V3 H14 V6" /><circle cx="10" cy="10.5" r="1.5" />
    </svg>
  );
}
function IconCycle() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 5 a7 7 0 1 0 1 8" /><path d="M16 2 V5 H13" />
    </svg>
  );
}
function IconAdr() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 3 H13 L16 6 V17 H5 Z" /><path d="M8 9 H13 M8 12 H13 M8 15 H11" />
    </svg>
  );
}
function IconSkill() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2 L12.5 7 L18 8 L14 12 L15 17.5 L10 14.8 L5 17.5 L6 12 L2 8 L7.5 7 Z" />
    </svg>
  );
}
function IconHonest() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2 L17 5 V10 C17 14.5 13.5 17 10 18 C6.5 17 3 14.5 3 10 V5 Z" />
      <path d="M7 10 L9 12 L13 8" />
    </svg>
  );
}
/* Bespoke agent DAG — one root node branching into an ordered chain of
   downstream nodes, signalling the on-demand graph @architect-ai composes
   for the dynamic orchestration mode. */
function IconOrchestrate() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="4" cy="10" r="2" /><circle cx="11" cy="5" r="2" /><circle cx="11" cy="15" r="2" /><circle cx="17" cy="10" r="2" />
      <path d="M5.7 8.8 L9.3 6.2 M5.7 11.2 L9.3 13.8 M12.7 6.2 L16 8.8 M12.7 13.8 L16 11.2" />
    </svg>
  );
}
const PILLAR_ICONS = [IconAgents, IconGate, IconCycle, IconAdr, IconSkill, IconHonest, IconOrchestrate];

function GhostCTA({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex items-center gap-2 rounded-[12px] border border-line bg-navyDarker px-6 py-3 font-body text-sm font-semibold text-primary transition-colors hover:border-primary/40"
    >
      {children}
      <span aria-hidden="true">-&gt;</span>
    </a>
  );
}

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1120px] flex-col bg-navy px-6 font-body text-primary">
      {/* HEADER */}
      <header className="flex items-center justify-between border-b border-line py-6">
        <a href="/" className="flex items-center gap-2 font-display text-xl font-semibold tracking-tight">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/arca-logo.png" alt="" aria-hidden="true" className="h-7 w-auto" />
          A.R.C.A
        </a>
        <nav className="hidden gap-8 font-body text-sm md:flex">
          <a href="#what" className="opacity-70 transition-opacity hover:opacity-100">
            What it does
          </a>
          <a href="#gates" className="opacity-70 transition-opacity hover:opacity-100">
            Gate chain
          </a>
          <a href="#pipeline" className="opacity-70 transition-opacity hover:opacity-100">
            Pipeline
          </a>
          <a href="#adrs" className="opacity-70 transition-opacity hover:opacity-100">
            ADRs
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="opacity-70 transition-opacity hover:opacity-100"
          >
            GitHub
          </a>
        </nav>
      </header>

      <main className="flex-grow">
        {/* ============ HERO ============ */}
        <RevealOnScroll className="oc-hero py-24 md:py-32">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-6 font-body text-xs uppercase tracking-[0.18em] opacity-60">
                <Mark />
                Adversarial multi-agent system · ML / AI engineering
              </p>
              {/* Brand wordmark with A.R.C.A samurai blue glow */}
              <div className="mb-8 flex items-baseline gap-3">
                <span className="oc-glow font-display text-5xl font-bold tracking-tight md:text-6xl">
                  A.R.C.A
                </span>
              </div>
              <h1 className="mb-6 max-w-4xl font-display text-[2.75rem] font-semibold leading-[1.05] tracking-tight md:text-[4.5rem]">
                {HERO_HEADLINE}
              </h1>
              <p className="mb-10 max-w-2xl font-display text-xl font-medium leading-snug opacity-90 md:text-2xl">
                {HERO_TAGLINE}
              </p>
              <div className="flex flex-wrap gap-3">
                <PrimaryCTA href={GITHUB_URL}>View on GitHub</PrimaryCTA>
                <GhostCTA href="#adrs">Read the ADRs</GhostCTA>
              </div>
            </div>
            {/* A.R.C.A samurai chibi (animated) — H.264 MP4 with PNG poster
                for fast LCP. GIF kept as legacy fallback for browsers without
                MP4 codec (~0.5% in 2026). 4.5MB GIF → 205KB MP4 (96% smaller). */}
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/arca-hero.png"
              aria-label="A.R.C.A — AI Research & Code Architect"
              className="hidden h-auto max-h-[420px] w-full max-w-[360px] rounded-[12px] border border-ares-border object-cover shadow-[0_0_60px_rgba(37,99,235,0.25)] lg:block"
            >
              <source src="/arca-hero.mp4" type="video/mp4" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/arca-hero.gif" alt="A.R.C.A — AI Research & Code Architect" />
            </video>
          </div>

          {/* Stats strip — openclaw-style flat horizontal */}
          <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-[12px] border border-line bg-line md:grid-cols-3 lg:grid-cols-6">
            {STATS.map((s) => (
              <div key={s.label} className="bg-navy p-5">
                <div className="font-display text-3xl font-semibold leading-none md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-3 font-body text-xs uppercase tracking-[0.12em] opacity-70">
                  {s.label}
                </div>
                <div className="mt-1 font-body text-[11px] opacity-50">{s.sub}</div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* ============ ⟩ WHAT ARCA DOES (6-card grid like openclaw "What It Does") ============ */}
        <RevealOnScroll id="what" className="border-t border-line py-20 md:py-24">
          <h2 className="mb-3 font-display text-3xl font-semibold tracking-tight md:text-[2.5rem]">
            <Mark />
            What A.R.C.A does
          </h2>
          <p className="mb-12 max-w-2xl opacity-70">
            Seven pillars that turn a single AI coding assistant into a regulated multi-agent
            engineering team. Pure configuration — no runtime, no server, no container.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p, i) => {
              const Icon = PILLAR_ICONS[i] ?? IconAgents;
              return (
                <div
                  key={p.title}
                  className="rounded-[12px] border border-line bg-navyDarker p-6 transition-colors hover:border-brand/40"
                >
                  <div className="icon-circle mb-4">
                    <Icon />
                  </div>
                  <h3 className="mb-3 font-display text-lg font-semibold">{p.title}</h3>
                  <p className="text-sm leading-relaxed opacity-75">{p.body}</p>
                </div>
              );
            })}
          </div>
        </RevealOnScroll>

        {/* ============ ⟩ QUICK LOOK (terminal tabs — openclaw Quick Start clone) ============ */}
        <RevealOnScroll className="border-t border-line py-20 md:py-24">
          <h2 className="mb-3 font-display text-3xl font-semibold tracking-tight md:text-[2.5rem]">
            <Mark />
            Quick look
          </h2>
          <p className="mb-12 max-w-2xl opacity-70">
            A.R.C.A lives inside Claude Code&rsquo;s native extension points: markdown agent
            definitions, bash hooks, JSON settings. Clone the repo, run install, work.
          </p>

          <div className="overflow-hidden rounded-[12px] border border-line bg-navyDarker">
            {/* Tab strip — openclaw style: active tab has green underline highlight */}
            <div className="flex items-center justify-between border-b border-line px-2 py-1">
              <div className="flex">
                <span className="tab tab-active">Clone</span>
                <span className="tab">install.sh</span>
                <span className="tab">Verify</span>
              </div>
              <div className="hidden items-center gap-3 pr-3 md:flex">
                <span className="text-[10px] uppercase tracking-[0.18em] opacity-50">arca.install</span>
                <span className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-syntax-green/70" />
                  <span className="h-1.5 w-1.5 rounded-full bg-syntax-pink/70" />
                  <span className="h-1.5 w-1.5 rounded-full bg-brand/70" />
                </span>
              </div>
            </div>
            {/* Body — openclaw terminal uses pink commands + green flags + faint comments */}
            <pre className="overflow-x-auto p-6 text-sm leading-relaxed font-body">
              <code>
                <span className="syntax-comment">{"# 1. clone"}</span>
                {"\n"}
                <span className="syntax-cmd">{"$ git clone"}</span>
                <span className="syntax-str">{" https://github.com/infantesromeroadrian/arca-claude-code"}</span>
                {"\n"}
                <span className="syntax-cmd">{"$ cd"}</span>
                <span className="syntax-str">{" arca-claude-code"}</span>
                {"\n\n"}
                <span className="syntax-comment">{"# 2. install — symlinks settings + hooks + skills into ~/.claude"}</span>
                {"\n"}
                <span className="syntax-cmd">{"$ ./install.sh"}</span>
                <span className="syntax-flag">{" --skills --hooks --mcp"}</span>
                {"\n\n"}
                <span className="syntax-comment">{"# 3. verify the gate chain"}</span>
                {"\n"}
                <span className="syntax-cmd">{"$ claude"}</span>
                <span className="syntax-flag">{" --debug --agent"}</span>
                <span className="syntax-str">{" code-critic 'review this'"}</span>
                {"\n"}
                <span className="syntax-flag opacity-90">
                  {"  ↳ @math-critic"}
                  {"\n"}
                  {"    ↳ @debt-detector"}
                  {"\n"}
                  {"      ↳ @code-critic"}
                  {"\n"}
                  {"        ↳ @chief-architect"}
                </span>
                <span className="caret-blink ml-1" />
              </code>
            </pre>
          </div>
        </RevealOnScroll>

        {/* ============ ⟩ THE GATE CHAIN ============ */}
        <RevealOnScroll id="gates" className="border-t border-line py-20 md:py-24">
          <h2 className="mb-3 font-display text-3xl font-semibold tracking-tight md:text-[2.5rem]">
            <Mark />
            The gate chain
          </h2>
          <p className="mb-12 max-w-2xl opacity-70">
            Four adversarial agents stand between producer code and main. Each one blocks.
            Bypass leaves an audit trail.
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {GATE_STEPS.map((g) => (
              <div
                key={g.stage}
                className="flex h-full flex-col rounded-[12px] border border-line bg-navyDarker p-6"
              >
                <div className="mb-4 font-body text-[11px] uppercase tracking-[0.18em] opacity-50">
                  Stage {g.stage}
                </div>
                <h3 className="mb-1 font-display text-lg font-semibold">{g.name}</h3>
                <div className="mb-4 font-body text-xs uppercase tracking-[0.1em] opacity-60">
                  {g.role}
                </div>
                <p className="text-sm leading-relaxed opacity-75">{g.body}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* ============ ⟩ BUILT ON (pill cloud — openclaw "Works With Everything") ============ */}
        <RevealOnScroll className="border-t border-line py-20 md:py-24">
          <h2 className="mb-3 font-display text-3xl font-semibold tracking-tight md:text-[2.5rem]">
            <Mark />
            Built on
          </h2>
          <p className="mb-10 max-w-2xl opacity-70">
            The stack underneath. Each one earned its place with a documented ADR.
          </p>
          <div className="flex flex-wrap gap-2">
            {BUILT_ON.map((b) => (
              <span key={b} className="pill">
                <span
                  aria-hidden="true"
                  className="inline-block h-2 w-2 rounded-full bg-brand"
                />
                {b}
              </span>
            ))}
          </div>
        </RevealOnScroll>

        {/* ============ ⟩ THE 14-CYCLE PIPELINE ============ */}
        <RevealOnScroll id="pipeline" className="border-t border-line py-20 md:py-24">
          <h2 className="mb-3 font-display text-3xl font-semibold tracking-tight md:text-[2.5rem]">
            <Mark />
            The 14-cycle pipeline
          </h2>
          <p className="mb-12 max-w-2xl opacity-70">
            From Discovery to Sunset across 65 phases. Each cycle has a blocking gate at its
            exit — owned by a specific agent.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7">
            {cycles.map((c) => (
              <div
                key={c.id}
                className="rounded-[12px] border border-line bg-navyDarker p-4"
              >
                <div className="font-display text-2xl font-semibold leading-none">{c.id}</div>
                <div className="mt-2 font-body text-sm">{c.name}</div>
                <div className="mt-2 font-body text-[10px] uppercase tracking-[0.12em] opacity-50">
                  @{c.owner}
                </div>
              </div>
            ))}
          </div>
          {/* The 3 fixed pipelines stay authoritative; dynamic orchestration is
              the 4th MODE for the long tail — not a 4th pipeline. Kept terse to
              match the section's flat register. */}
          <div className="mt-10 rounded-[12px] border border-line bg-navyDarker p-6 md:flex md:items-baseline md:gap-6">
            <div className="mb-3 font-body text-[11px] uppercase tracking-[0.18em] text-brand md:mb-0 md:whitespace-nowrap">
              4th mode · /orchestrate
            </div>
            <p className="text-sm leading-relaxed opacity-75">
              ML, HTB and ART are the three fixed pipelines. For the long tail no fixed
              pipeline covers, <span className="opacity-100">@architect-ai</span> proposes a
              bespoke agent DAG — chosen subagents, their order, and the adversarial critics
              gating each node — for Adrian&rsquo;s approval <span className="opacity-100">before</span>{" "}
              any agent executes. A schema-floor validator rejects under-gated proposals at
              declaration; a runtime hook hard-blocks at invocation. ADR-089.
            </p>
          </div>
          {/* A.R.C.A navigating the pipeline map — visual interlude between
              pipeline grid and ADR table. eslint-disable for raw img — small
              static asset, Next/Image unnecessary. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/arca-explorer.png"
            alt="A.R.C.A — navigating the architecture map"
            className="mx-auto mt-14 h-auto w-full max-w-[640px] rounded-[12px] border border-ares-border object-cover shadow-[0_0_60px_rgba(37,99,235,0.20)]"
            loading="lazy"
          />
        </RevealOnScroll>

        {/* ============ ⟩ ARCHITECTURE DECISIONS ============ */}
        <RevealOnScroll id="adrs" className="border-t border-line py-20 md:py-24">
          <h2 className="mb-3 font-display text-3xl font-semibold tracking-tight md:text-[2.5rem]">
            <Mark />
            Architecture decisions
          </h2>
          <p className="mb-12 max-w-2xl opacity-70">
            81 numbered ADRs. Every architectural choice carries context, alternatives weighed
            and consequences. Below: the most recent 14.
          </p>
          <div className="overflow-hidden rounded-[12px] border border-line">
            {adrs.map((a, i) => (
              <a
                key={a.n}
                href={`${GITHUB_URL}/tree/main/docs/adr`}
                target="_blank"
                rel="noreferrer"
                className={`flex items-start gap-6 bg-navyDarker p-4 transition-colors hover:bg-primary/[0.04] ${
                  i !== adrs.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <div className="font-display text-base font-semibold opacity-60">
                  ADR-{a.n}
                </div>
                <div className="flex-grow font-body text-sm">{a.title}</div>
                <div className="hidden font-body text-[11px] opacity-50 md:block">
                  {a.date}
                </div>
                <div className="font-body text-[11px] uppercase tracking-[0.1em] opacity-60">
                  {a.status.includes("Superseded") ? "Superseded" : "Active"}
                </div>
              </a>
            ))}
          </div>
          <div className="mt-6">
            <GhostCTA href={`${GITHUB_URL}/tree/main/docs/adr`}>
              Read all 90 ADRs on GitHub
            </GhostCTA>
          </div>
        </RevealOnScroll>

        {/* ============ ⟩ THE 9 MORTAL SINS ============ */}
        <RevealOnScroll className="border-t border-line py-20 md:py-24">
          <h2 className="mb-3 font-display text-3xl font-semibold tracking-tight md:text-[2.5rem]">
            <Mark />
            The 9 mortal sins
          </h2>
          <p className="mb-12 max-w-2xl opacity-70">
            Hardcoded violations that block the cycle and trigger visible escalation. No
            warnings — direct block.
          </p>
          {/* A.R.C.A in the kitchen of unchecked code — visual metaphor for
              what the gate chain prevents. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/arca-mess.png"
            alt="A.R.C.A — the kitchen of unchecked code before the gate chain"
            className="mx-auto mb-12 h-auto w-full max-w-[640px] rounded-[12px] border border-ares-border object-cover shadow-[0_0_60px_rgba(37,99,235,0.20)]"
            loading="lazy"
          />
          <div className="grid gap-3 md:grid-cols-3">
            {sins.map((s) => (
              <div
                key={s.n}
                className={`rounded-[12px] border p-5 ${
                  s.highlight
                    ? "border-primary/40 bg-primary/[0.04]"
                    : "border-line bg-navyDarker"
                }`}
              >
                <div className="mb-2 font-display text-2xl font-semibold leading-none opacity-60">
                  {s.n}
                </div>
                <div className="font-body text-sm leading-snug">{s.text}</div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* ============ ⟩ STACK ============ */}
        <RevealOnScroll className="border-t border-line py-20 md:py-24">
          <h2 className="mb-3 font-display text-3xl font-semibold tracking-tight md:text-[2.5rem]">
            <Mark />
            Stack
          </h2>
          <p className="mb-12 max-w-2xl opacity-70">
            Runtime posture, model distribution, persistence, compute. No marketing — just
            what is actually wired.
          </p>
          <dl className="grid gap-px overflow-hidden rounded-[12px] border border-line bg-line">
            {stack.map((row) => (
              <div
                key={row.k}
                className="grid grid-cols-1 gap-2 bg-navy p-4 md:grid-cols-[200px_1fr] md:gap-6"
              >
                <dt className="font-body text-xs uppercase tracking-[0.14em] opacity-60">
                  {row.k}
                </dt>
                <dd className="font-body text-sm leading-relaxed">{row.v}</dd>
              </div>
            ))}
          </dl>
        </RevealOnScroll>

        {/* ============ ⟩ APPLY / CONTACT ============ */}
        <RevealOnScroll className="border-t border-line py-20 md:py-24">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="mb-6 font-display text-3xl font-semibold tracking-tight md:text-[2.5rem]">
                <Mark />
                Take it for a spin
              </h2>
              <p className="mb-10 max-w-2xl text-lg opacity-80">
                A.R.C.A is open source. Clone it, audit it, fork it. Built for the{" "}
                <span className="text-brand font-semibold">Anthropic Fellows 2026</span>{" "}
                application.
              </p>
              <div className="flex flex-wrap gap-3">
                <PrimaryCTA href={GITHUB_URL}>Star on GitHub</PrimaryCTA>
                <GhostCTA href={`mailto:${CONTACT_EMAIL}`}>Email Adrian</GhostCTA>
              </div>
            </div>
            {/* A.R.C.A neutral standing — quiet signature next to the CTA. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/arca-neutral.png"
              alt="A.R.C.A — quiet, waiting for the next directive"
              className="hidden h-auto max-h-[360px] w-full max-w-[280px] object-contain lg:block"
              loading="lazy"
            />
          </div>
        </RevealOnScroll>

        {/* ============ ⟩ POWERED BY (openclaw "Sponsors" strip pattern) ============ */}
        <RevealOnScroll className="border-t border-line py-16">
          <p className="mb-8 font-body text-xs uppercase tracking-[0.18em] opacity-50">
            <Mark />
            Powered by
          </p>
          <div className="grid grid-cols-2 gap-x-12 gap-y-6 sm:grid-cols-3 md:grid-cols-5">
            {[
              "Anthropic",
              "Claude",
              "GitHub",
              "Vercel",
              "MCP",
            ].map((name) => (
              <div
                key={name}
                className="font-display text-lg font-semibold tracking-tight opacity-40 transition-opacity hover:opacity-90"
              >
                {name}
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-line py-10 font-body text-xs opacity-50">
        <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
          <span>
            A.R.C.A — AI Research &amp; Code Architect · Built by Adrian Infantes
          </span>
          <span>2026 · MIT License</span>
        </div>
      </footer>
    </div>
  );
}
