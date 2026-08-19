import type { Metadata } from "next";
import { Trust } from "@/components/Trust";

export const metadata: Metadata = {
  title: "Trust",
  description:
    "No login on the trading box. The vault holds the money. Freeze stops the next trade. Anyone can withdraw.",
};

export default function TrustDoc() {
  return <Trust />;
}
