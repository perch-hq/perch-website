import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Parties } from "@/components/Parties";
import { Product } from "@/components/Product";
import { Waitlist } from "@/components/Waitlist";

export default function Home() {
  return (
    <div id="top">
      <Header />
      <main id="main">
        <Hero />
        <Product />
        <Parties />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
