import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Tape } from "@/components/Tape";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Demo tape",
  description:
    "One named receipt: ticks, landing, freeze, and leave. Not a yield catalog.",
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
