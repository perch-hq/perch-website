import { Compare } from "@/components/Compare";
import { SplitPlane, VaultCustody } from "@/components/Diagrams";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Parties } from "@/components/Parties";
import { Problem } from "@/components/Problem";
import { Product } from "@/components/Product";
import { Trust } from "@/components/Trust";
import { Waitlist } from "@/components/Waitlist";

export default function Home() {
  return (
    <div id="top">
      <Header />
      <main id="main">
        <Hero />
        <Problem />
        <Product />
        <HowItWorks />
        <Parties />
        <SplitPlane />
        <VaultCustody />
        <Trust />
        <Compare />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
