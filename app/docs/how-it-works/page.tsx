import type { Metadata } from "next";
import { HowItWorks } from "@/components/HowItWorks";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "Open a vault, fund it first, invite people, send from hummingbot-api on the seat, freeze if you need to, and let anyone leave.",
};

export default function HowItWorksDoc() {
  return <HowItWorks />;
}
