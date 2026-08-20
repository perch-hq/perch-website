import type { Metadata } from "next";
import { SplitPlane, VaultCustody } from "@/components/Diagrams";

export const metadata: Metadata = {
  title: "The seat",
  description:
    "Cheap plane anywhere. Act plane cannot: hummingbot-api, shim crank, and Jet on AMS or FRA. Vault PDA holds inventory.",
};

export default function SeatDoc() {
  return (
    <>
      <SplitPlane />
      <VaultCustody />
    </>
  );
}
