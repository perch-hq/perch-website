import type { Metadata } from "next";
import { Compare } from "@/components/Compare";
import { Problem } from "@/components/Problem";

export const metadata: Metadata = {
  title: "Compare",
  description:
    "Protocol vaults are a different job. Helius plus a VPS plus SSH is this job without freeze, a vault PDA, or no-shell.",
};

export default function CompareDoc() {
  return (
    <>
      <h1 className="sr-only">
        Compare Perch with a protocol vault and Helius plus a VPS
      </h1>
      <Problem />
      <Compare />
    </>
  );
}
