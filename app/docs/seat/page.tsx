import type { Metadata } from "next";
import { SplitPlane, VaultCustody } from "@/components/Diagrams";

export const metadata: Metadata = {
  title: "The seat",
  description:
    "Condor can live anywhere. hummingbot-api sends from the perch. The vault holds the money; the seat only trades it.",
};

export default function SeatDoc() {
  return (
    <>
      <SplitPlane />
      <VaultCustody />
    </>
  );
}
