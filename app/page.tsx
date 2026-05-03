import FlipbookLoader from "@/app/components/FlipbookLoader";

export const metadata = {
  title: "A.R.C.A. — handbook",
  description:
    "Adversarial Research & Code Architect — paginated handbook edition. " +
    "Application to Anthropic Fellows 2026 by Adrian Infantes. " +
    "Prefer scrolling? Visit /scroll.",
};

export default function Page() {
  return <FlipbookLoader />;
}
