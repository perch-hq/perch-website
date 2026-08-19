import type { Metadata } from "next";
import { Trust } from "@/components/Trust";

export const metadata: Metadata = {
  title: "Trust",
  description:
    "Vault PDA plus Deposit. freeze kills act. Bond is on the lease. Honest ticks are a receipt stack, not TEE.",
};

export default function TrustDoc() {
  return <Trust />;
}
