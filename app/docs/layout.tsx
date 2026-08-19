import type { Metadata } from "next";
import { DocsNav } from "@/components/DocsNav";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Sealed Act plane: hummingbot-api plus a Gateway-shaped shim, vault.act, Deposit PDAs, packaged lp_rebalancer, and a receipt stack.",
  alternates: { canonical: `${site.url}${site.docs}` },
};

export default function DocsLayout({ children }: LayoutProps<"/docs">) {
  return (
    <div>
      <Header current="docs" />
      <DocsNav />
      <main id="main" className="pt-10 sm:pt-14">
        {children}
      </main>
      <Footer memos />
    </div>
  );
}
