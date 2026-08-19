import type { Metadata } from "next";
import { Lifecycle } from "@/components/Lifecycle";

export const metadata: Metadata = {
  title: "Lifecycle",
  description:
    "open_lease, open_vault, start_lp_rebalancer, live-updatable fields only, freeze, withdraw. Packaged lp_rebalancer this sprint.",
};

export default function HowItWorksDoc() {
  return <Lifecycle />;
}
