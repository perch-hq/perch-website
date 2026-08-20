import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Tape } from "@/components/Tape";
import { copy } from "@/lib/copy";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: copy.tape.title,
  description: copy.tape.description,
  alternates: { canonical: `${site.url}${site.tape}` },
};

export default function TapePage() {
  return (
    <div>
      <Header current="tape" />
      <main id="main" className="pt-16 sm:pt-20">
        <Tape />
      </main>
      <Footer />
    </div>
  );
}
