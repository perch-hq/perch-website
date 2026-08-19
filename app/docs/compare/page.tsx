import type { Metadata } from "next";
import { Compare } from "@/components/Compare";
import { Problem } from "@/components/Problem";

export const metadata: Metadata = {
  title: "Compare",
  description:
    "Protocol vaults, a rented server, and Perch: whose vault it is, who can join, and who can leave.",
};

export default function CompareDoc() {
  return (
    <>
      <h1 className="sr-only">
        Compare Perch with a protocol vault and a rented server
      </h1>
      <Problem />
      <Compare />
    </>
  );
}
