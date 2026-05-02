"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import HTMLFlipBook from "react-pageflip";
import {
  CONTACT_EMAIL,
  GITHUB_URL,
  cycles,
  gates,
  sins,
  stack,
  agentCategories,
  skillFamilies,
  adrs,
  aiSlopSignals,
  forbiddenPatterns,
  cases,
} from "@/app/lib/arca-data";

const ARCA_LIVE = "https://arca-agent-landing.vercel.app";
const TOTAL_AGENTS = agentCategories.reduce((acc, c) => acc + c.agents.length, 0);
const TOTAL_SKILLS = skillFamilies.reduce((acc, f) => acc + f.count, 0);

type PageProps = { children: React.ReactNode; n: number; total: number; muted?: boolean };

// react-pageflip uses React.Children.map + ref-attaching to wrap each
// page. Function components without forwardRef silently drop the ref,
// which is why the book collapses to a vertical stack. forwardRef +
// fixed dimensions in the inner div restore the book layout.
const Page = forwardRef<HTMLDivElement, PageProps>(function Page(
  { children, n, total, muted },
  ref,
) {
  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${muted ? "bg-navyDarker" : "bg-navy"} text-primary border border-line/40`}
      style={{ fontFamily: "var(--font-mono, ui-monospace)", width: "100%", height: "100%" }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-screen"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0 1px, transparent 1px 4px)",
        }}
      />
      <div className="relative z-10 h-full overflow-y-auto p-6">{children}</div>
      <div className="absolute bottom-3 left-0 right-0 flex justify-between px-6 text-[15px] tracking-[0.3em] uppercase opacity-40">
        <span>A.R.C.A. — handbook</span>
        <span>
          {String(n).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
});

const sectionTitle = (n: string, label: string) => (
  <div className="mb-6">
    <p className="text-[14px] tracking-[0.4em] opacity-60 uppercase">§ {n}</p>
    <h2 className="text-2xl md:text-2xl font-bold tracking-tight mt-1">{label}</h2>
    <div className="mt-3 h-px w-12 bg-primary opacity-60" />
  </div>
);

export default function Flipbook() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const bookRef = useRef<unknown>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // Only redirect actual touch devices or genuinely tiny windows.
    // 1024px was too aggressive — split-screen desktop, secondary
    // monitors, and Chrome with side-panel docked all fall under it.
    const isTouch = matchMedia("(pointer: coarse)").matches;
    const isTinyViewport = window.innerWidth < 700;
    if (isTouch || isTinyViewport) {
      router.replace("/scroll");
      return;
    }
    setReady(true);
  }, [router]);

  if (!ready) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-navyDarker text-primary font-mono">
        <p className="text-lg tracking-[0.3em] uppercase opacity-60">loading handbook…</p>
      </main>
    );
  }

  const TOTAL = 16;
  const pages: React.ReactNode[] = [];

  // 1. Cover
  pages.push(
    <Page n={1} total={TOTAL} muted key="p1">
      <div className="h-full flex flex-col justify-between">
        <div>
          <p className="text-[14px] tracking-[0.5em] uppercase opacity-50">a personal agentic system</p>
          <p className="text-[14px] tracking-[0.5em] uppercase opacity-50 mt-1">2026 · handbook · v1</p>
        </div>
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight">A.R.C.A.</h1>
          <p className="mt-4 text-lg opacity-70 tracking-[0.3em] uppercase">Adversarial Research &amp; Code Architect</p>
          <div className="mt-10 mx-auto h-px w-16 bg-primary opacity-50" />
          <p className="mt-10 max-w-xl mx-auto text-lg leading-relaxed opacity-80">
            A multi-agent orchestration layer for Claude Code that turns one
            assistant into {TOTAL_AGENTS} specialists with adversarial gates, ADR-driven
            architecture and honest disclosure of every limit.
          </p>
        </div>
        <div className="flex justify-between items-end text-[14px] tracking-[0.3em] uppercase opacity-50">
          <span>by Adrian Infantes</span>
          <span>application · Anthropic Fellows 2026</span>
        </div>
      </div>
    </Page>,
  );

  // 2. Author / inside cover
  pages.push(
    <Page n={2} total={TOTAL} key="p2">
      {sectionTitle("00", "About this handbook")}
      <p className="text-lg leading-relaxed opacity-80 mb-4">
        This is the printable companion to <a href={ARCA_LIVE} className="underline">arca-agent-landing.vercel.app</a>.
        Same content, paginated for sequential reading. The scroll edition lives at <span className="opacity-100">/scroll</span> if you prefer it.
      </p>
      <p className="text-lg leading-relaxed opacity-80 mb-6">
        ARCA is not an assistant — it is Adrian Infantes converted into an AI agent. Lexicon,
        obsessions and decision criteria calibrated. JARVIS to my Stark.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div className="border border-line/60 p-4">
          <p className="text-[14px] tracking-[0.3em] uppercase opacity-60 mb-2">Built by</p>
          <p className="text-lg font-semibold">Adrian Infantes</p>
          <p className="text-lg opacity-70 mt-1">ML / DL / RL / Generative & Agentic AI engineer</p>
          <p className="text-lg opacity-70">Adversarial ML + AI red teaming</p>
        </div>
        <div className="border border-line/60 p-4">
          <p className="text-[14px] tracking-[0.3em] uppercase opacity-60 mb-2">Source</p>
          <p className="text-lg"><a href={GITHUB_URL} className="underline">github.com/infantesromeroadrian/arca-claude-code</a></p>
          <p className="text-lg mt-1"><a href={`mailto:${CONTACT_EMAIL}`} className="underline">{CONTACT_EMAIL}</a></p>
        </div>
      </div>
    </Page>,
  );

  // 3. TOC
  const toc = [
    ["01", "Stats panorámicos", "p4"],
    ["02", "Identity", "p5"],
    ["03", `Pipeline ML — ${cycles.length} cycles`, "p6-7"],
    ["04", `Agent Roster · ${TOTAL_AGENTS} specialists`, "p8-9"],
    ["05", `Skills Catalog · ${TOTAL_SKILLS} specialized`, "p10-11"],
    ["06", "Adversarial Gates + Mortal Sins", "p12"],
    ["07", `AI Slop — ${aiSlopSignals.length} signals`, "p13"],
    ["08", `ADRs · ${adrs.length} architectural records`, "p14"],
    ["09", "Hardware · Stack · Cases", "p15"],
    ["10", "Closing / CTA", "p16"],
  ];
  pages.push(
    <Page n={3} total={TOTAL} muted key="p3">
      {sectionTitle("TOC", "Table of contents")}
      <ul className="space-y-3 mt-6">
        {toc.map(([n, label, ref]) => (
          <li key={n} className="flex items-baseline gap-4 text-lg border-b border-line/30 pb-2">
            <span className="font-mono opacity-60 w-8">{n}</span>
            <span className="flex-1">{label}</span>
            <span className="font-mono text-[14px] tracking-[0.3em] uppercase opacity-50">{ref}</span>
          </li>
        ))}
      </ul>
    </Page>,
  );

  // 4. Stats panorámicos
  const statRows = [
    [TOTAL_AGENTS, "Specialized agents"],
    [TOTAL_SKILLS, "Skills"],
    [cycles.length, "Pipeline ML cycles"],
    [adrs.length, "ADRs"],
    [sins.length, "Mortal sins as gates"],
    [aiSlopSignals.length, "AI-slop signals"],
    [gates.length, "Adversarial gates"],
    ["20+", "MCPs wired"],
    ["100%", "bash hooks · zero startup latency"],
  ];
  pages.push(
    <Page n={4} total={TOTAL} key="p4">
      {sectionTitle("01", "The shape of A.R.C.A.")}
      <p className="text-lg opacity-70 mb-6">A snapshot of the system as of <span className="opacity-100">2026-05-02</span>.</p>
      <div className="grid grid-cols-3 gap-4">
        {statRows.map(([v, l], i) => (
          <div key={i} className="border border-line/60 p-4 text-center">
            <p className="text-2xl font-bold">{v}</p>
            <p className="text-[14px] tracking-[0.2em] uppercase opacity-60 mt-2 leading-tight">{l}</p>
          </div>
        ))}
      </div>
      <p className="text-lg opacity-60 mt-8 leading-relaxed">
        Numbers refresh on every commit via <code className="opacity-100">scripts/obsidian-dashboard-refresh.sh</code>.
        The same counts power the Obsidian Dashboard at <code>Projects/ARCA/Dashboard.md</code> in the (private) vault repo.
      </p>
    </Page>,
  );

  // 5. Identity
  pages.push(
    <Page n={5} total={TOTAL} muted key="p5">
      {sectionTitle("02", "Identity")}
      <p className="text-lg leading-relaxed mb-4">
        ARCA is not a metaphor. It is calibrated lexicon, obsessions, technical
        criteria and communication style — Adrian Infantes ported to an AI agent.
      </p>
      <div className="mt-6 grid grid-cols-2 gap-4 text-lg">
        <div>
          <p className="text-[14px] tracking-[0.3em] uppercase opacity-60 mb-2">Tone</p>
          <p className="opacity-80 leading-relaxed">Strict manager. Professional, dry, demanding. If code reaches production and fails, you lose your job. The frame is permanent.</p>
        </div>
        <div>
          <p className="text-[14px] tracking-[0.3em] uppercase opacity-60 mb-2">Obsessions, in order</p>
          <ol className="list-decimal list-inside opacity-80 leading-relaxed space-y-1">
            <li>Architecture — bad foundation, nothing matters above</li>
            <li>Tests — no tests, code does not exist</li>
            <li>Deploy — no &lt;5min rollback, not ready</li>
            <li>Security — secret exposed, immediate block</li>
            <li>Maintainability — outsider-friendly comments</li>
          </ol>
        </div>
      </div>
      <div className="mt-8 border-l-2 border-primary pl-4">
        <p className="text-lg italic opacity-90">&ldquo;Senor Infantes, esto no me convence. Y los tests?&rdquo;</p>
        <p className="text-[14px] tracking-[0.3em] uppercase opacity-50 mt-2">— ARCA, default register</p>
      </div>
    </Page>,
  );

  // 6-7. Pipeline 14 cycles, split in two
  const half = Math.ceil(cycles.length / 2);
  const cyclesA = cycles.slice(0, half);
  const cyclesB = cycles.slice(half);
  [cyclesA, cyclesB].forEach((group, idx) => {
    pages.push(
      <Page n={6 + idx} total={TOTAL} key={`p${6 + idx}`}>
        {sectionTitle("03", `Pipeline ML — 14 cycles · ${idx === 0 ? "C1–C7" : "C8–C14"}`)}
        <table className="w-full text-lg">
          <thead>
            <tr className="text-[14px] tracking-[0.2em] uppercase opacity-50 border-b border-line/60">
              <th className="text-left pb-2 pr-4">ID</th>
              <th className="text-left pb-2 pr-4">Cycle</th>
              <th className="text-left pb-2">Owner</th>
            </tr>
          </thead>
          <tbody>
            {group.map((c, i) => (
              <tr key={i} className="border-b border-line/30">
                <td className="py-2 pr-4 font-mono opacity-70">{c.id}</td>
                <td className="py-2 pr-4">{c.name}{c.wait ? <span className="text-[15px] ml-2 opacity-60">[wait]</span> : null}</td>
                <td className="py-2 font-mono text-[15px] opacity-80">@{c.owner}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {idx === 1 && (
          <p className="text-[15px] opacity-60 mt-6 leading-relaxed">
            Each cycle has a blocking gate. Failed phase → returned to owner with feedback (max 2 cycles → escalate to <span className="opacity-100">@architect-ai</span>). Technical debt detected = block until resolved.
          </p>
        )}
      </Page>,
    );
  });

  // 8-9. Agent roster, split
  const halfAg = Math.ceil(agentCategories.length / 2);
  const agA = agentCategories.slice(0, halfAg);
  const agB = agentCategories.slice(halfAg);
  [agA, agB].forEach((group, idx) => {
    pages.push(
      <Page n={8 + idx} total={TOTAL} muted key={`p${8 + idx}`}>
        {sectionTitle("04", `Agent Roster · part ${idx + 1}/2`)}
        <div className="space-y-4">
          {group.map((cat) => (
            <div key={cat.title} className="border-l-2 border-primary/50 pl-3">
              <p className="text-[14px] tracking-[0.2em] uppercase opacity-60 mb-1">{cat.title}</p>
              <ul className="text-[15px] opacity-90 space-y-0.5">
                {cat.agents.map((a) => (
                  <li key={a.name} className="flex items-baseline gap-2">
                    <span className="font-mono">@{a.name}</span>
                    <span className="text-[15px] opacity-50 uppercase tracking-widest">[{a.model}]</span>
                    <span className="text-[14px] opacity-60 ml-auto">{a.phases}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Page>,
    );
  });

  // 10-11. Skills, split
  const halfSk = Math.ceil(skillFamilies.length / 2);
  const skA = skillFamilies.slice(0, halfSk);
  const skB = skillFamilies.slice(halfSk);
  [skA, skB].forEach((group, idx) => {
    pages.push(
      <Page n={10 + idx} total={TOTAL} key={`p${10 + idx}`}>
        {sectionTitle("05", `Skills Catalog · ${idx === 0 ? "families A–F" : "families G–L"}`)}
        <div className="space-y-3 text-[15px]">
          {group.map((f) => (
            <div key={f.name} className="border-l-2 border-primary/40 pl-3">
              <p className="text-[14px] tracking-[0.2em] uppercase opacity-60">{f.name} · {f.count}</p>
              <p className="opacity-80 mt-1 leading-snug">{f.items}</p>
            </div>
          ))}
        </div>
      </Page>,
    );
  });

  // 12. Gates + Mortal Sins
  pages.push(
    <Page n={12} total={TOTAL} muted key="p12">
      {sectionTitle("06", "Adversarial Gates + Mortal Sins")}
      <p className="text-[14px] tracking-[0.3em] uppercase opacity-60 mb-2">gate chain</p>
      <ol className="text-lg space-y-2 mb-6">
        {gates.map((g) => (
          <li key={g.id} className="border-l-2 border-primary/60 pl-3">
            <p className="font-mono opacity-90">{g.name} <span className="text-[15px] opacity-60 ml-1">— {g.label}</span></p>
            <p className="opacity-70 leading-snug mt-1">{g.body}</p>
          </li>
        ))}
      </ol>
      <p className="text-[14px] tracking-[0.3em] uppercase opacity-60 mb-2">9 mortal sins</p>
      <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-[15px]">
        {sins.map((s) => (
          <li key={s.n} className={`opacity-90 ${s.highlight ? "text-red-300" : ""}`}>
            <span className="font-mono opacity-60 mr-2">{s.n}</span>{s.text}
          </li>
        ))}
      </ul>
    </Page>,
  );

  // 13. AI Slop
  pages.push(
    <Page n={13} total={TOTAL} key="p13">
      {sectionTitle("07", "AI Slop · 19 signals that block merge")}
      <p className="text-lg opacity-70 mb-6 leading-relaxed">
        Adversarial detection of code that betrays lack of human intent.
        Anything in this list is a hard merge block until rewritten with
        decisions visible to the reader.
      </p>
      <ol className="grid grid-cols-2 gap-x-6 gap-y-1 text-[15px] list-decimal list-inside">
        {aiSlopSignals.map((s, i) => (<li key={i} className="opacity-85 leading-snug">{s}</li>))}
      </ol>
      <p className="text-[14px] tracking-[0.3em] uppercase opacity-60 mt-6 mb-2">forbidden patterns</p>
      <ul className="text-[14px] opacity-75 space-y-0.5">
        {forbiddenPatterns.slice(0, 5).map((p, i) => (<li key={i}>· {p}</li>))}
      </ul>
    </Page>,
  );

  // 14. ADRs
  pages.push(
    <Page n={14} total={TOTAL} muted key="p14">
      {sectionTitle("08", "Architecture Decision Records")}
      <table className="w-full text-[15px]">
        <thead>
          <tr className="text-[15px] tracking-[0.2em] uppercase opacity-50 border-b border-line/60">
            <th className="text-left pb-2 pr-3">N</th>
            <th className="text-left pb-2 pr-3">Title</th>
            <th className="text-left pb-2 pr-3">Status</th>
            <th className="text-left pb-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {adrs.map((a) => (
            <tr key={a.n} className="border-b border-line/30">
              <td className="py-1.5 pr-3 font-mono opacity-70">{a.n}</td>
              <td className="py-1.5 pr-3 opacity-90">{a.title}</td>
              <td className="py-1.5 pr-3 opacity-70 text-[14px]">{a.status}</td>
              <td className="py-1.5 font-mono opacity-60 text-[14px]">{a.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-[14px] opacity-60 mt-6 leading-relaxed">
        Nygard-lite format. Append-only: never edit an Accepted ADR's Decision field — write a new one that supersedes it.
      </p>
    </Page>,
  );

  // 15. Hardware + Stack + Cases
  pages.push(
    <Page n={15} total={TOTAL} key="p15">
      {sectionTitle("09", "Hardware · Stack · Cases")}
      <p className="text-[14px] tracking-[0.3em] uppercase opacity-60 mb-2">runtime</p>
      <ul className="text-[15px] space-y-1 mb-6">
        {stack.map((s) => (
          <li key={s.k} className="flex gap-3 border-b border-line/30 py-1">
            <span className="font-mono opacity-60 min-w-[140px] uppercase text-[14px] tracking-widest">{s.k}</span>
            <span className="opacity-90">{s.v}</span>
          </li>
        ))}
      </ul>
      <p className="text-[14px] tracking-[0.3em] uppercase opacity-60 mb-2">selected cases</p>
      <div className="space-y-3">
        {cases.map((c) => (
          <div key={c.code} className="border-l-2 border-primary/50 pl-3">
            <p className="text-[14px] font-mono opacity-60">{c.code} · {c.title}</p>
            <p className="text-[15px] opacity-90 leading-snug">{c.body}</p>
          </div>
        ))}
      </div>
    </Page>,
  );

  // 16. Closing / CTA
  pages.push(
    <Page n={16} total={TOTAL} muted key="p16">
      <div className="h-full flex flex-col justify-between">
        <div>
          {sectionTitle("10", "End of handbook")}
          <p className="text-lg leading-relaxed opacity-90 mb-4">
            A.R.C.A. was built by Adrian Infantes as a personal research system.
            Every architectural decision is documented in ADRs. Every code change
            passes the gate chain. Every limitation is honestly disclosed.
          </p>
          <div className="border border-line/60 p-4 mt-6 bg-primary/5">
            <p className="text-lg font-semibold">This site is my application to the Anthropic Fellows program 2026.</p>
          </div>
        </div>
        <div className="space-y-2 text-lg">
          <a href={GITHUB_URL} className="block underline opacity-90 hover:opacity-100">→ Source on GitHub (arca-claude-code)</a>
          <a href={`${GITHUB_URL}/tree/main/docs/adr`} className="block underline opacity-90 hover:opacity-100">→ Read all {adrs.length} ADRs</a>
          <a href="/scroll" className="block underline opacity-90 hover:opacity-100">→ Prefer scroll? Open the scroll edition</a>
          <a href={`mailto:${CONTACT_EMAIL}?subject=A.R.C.A.%20%E2%80%94%20Fellows%202026`}
             className="block mt-4 border border-primary px-4 py-3 text-center bg-primary text-navyDarker font-semibold tracking-widest uppercase">
            Contact
          </a>
        </div>
      </div>
    </Page>,
  );

  // Render
  return (
    <main className="min-h-screen bg-navyDarker flex flex-col items-center justify-center px-4 py-3">
      <div className="absolute top-4 right-4 z-10">
        <a href="/scroll" className="text-[14px] tracking-[0.3em] uppercase opacity-50 hover:opacity-100 underline">
          /scroll
        </a>
      </div>
      <HTMLFlipBook
        width={620}
        height={880}
        size="stretch"
        minWidth={420}
        maxWidth={780}
        minHeight={620}
        maxHeight={1080}
        showCover={true}
        mobileScrollSupport={false}
        flippingTime={650}
        usePortrait={false}
        startZIndex={0}
        autoSize={true}
        maxShadowOpacity={0.5}
        clickEventForward={false}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
        className="shadow-2xl"
        startPage={0}
        drawShadow={true}
        style={{ background: "transparent" }}
        ref={bookRef as never}
      >
        {pages}
      </HTMLFlipBook>
      <p className="mt-3 text-[14px] tracking-[0.3em] uppercase opacity-40">
        click corner · drag · arrows · 16 pages
      </p>
    </main>
  );
}
