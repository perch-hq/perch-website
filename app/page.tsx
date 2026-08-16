import { SplitPlane, VaultCustody } from "@/components/Diagrams";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Adoption, Capability, Incumbent } from "@/components/Proof";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SplitPlane />
        <Capability />
        <VaultCustody />
        <Incumbent />
        <Adoption />
      </main>
      <Footer />
    </>
  );
}
