import type { Metadata } from "next";
import { Api } from "@/components/Api";

export const metadata: Metadata = {
  title: "API",
  description:
    "Cheap-plane API and MCP: open_lease, open_vault, start_lp_rebalancer. Crank never in context. No key paste, no SSH, no .py upload.",
};

export default function ApiDoc() {
  return <Api />;
}
