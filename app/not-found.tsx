import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Mark } from "@/components/Mark";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <div>
      <Header />
      <main className="site flex min-h-[70svh] flex-col justify-center py-24">
        <Mark className="size-10 text-copper" />
        <h1 className="mt-8 font-serif text-4xl">This perch is empty.</h1>
        <p className="measure mt-4 text-ink-muted">
          The page is gone. The vault is not.
        </p>
        <Link href="/" className="mt-8 w-fit text-sm text-copper">
          Back to Perch
        </Link>
      </main>
      <Footer />
    </div>
  );
}
