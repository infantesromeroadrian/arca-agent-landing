import Home from "@/app/scroll/page";

export const metadata = {
  title: "ARES Agent — Adversarial Multi-Agent System for ML/AI Engineering",
  description:
    "49 specialized agents · 97 skills · 47 ADRs · 14-cycle ML pipeline (47 phases) · " +
    "9 mortal sins as quality gates. Built by Adrian Infantes for the Anthropic Fellows 2026.",
};

/* Root route renders the openclaw-style scroll edition.
   The previous Flipbook (react-pageflip handbook) lives in components/Flipbook.tsx
   as legacy and is not currently routed. /scroll continues to serve the same page
   for share-friendly canonical URLs. */
export default function Page() {
  return <Home />;
}
