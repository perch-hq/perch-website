import type { Metadata } from "next";
import { DocsNav } from "@/components/DocsNav";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Two doors: deploy Condor against hummingbot-api on a sealed seat, or join a named curator’s tape. How people join and leave, and how the seat relates to the money.",
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
