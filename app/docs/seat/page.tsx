import type { Metadata } from "next";
import { SplitPlane, VaultCustody } from "@/components/Diagrams";

export const metadata: Metadata = {
  title: "The seat",
  description:
    "Your strategy can live anywhere. Trades leave from the perch. The vault holds the money; the seat only trades it.",
};

export default function SeatDoc() {
  return (
    <>
      <SplitPlane />
      <VaultCustody />
    </>
  );
}
