import { Hero } from "@/components/Hero";
import { FAQ } from "@/components/FAQ";
import { Plans, QuoteCTA, Services } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Plans />
      <FAQ />
      <QuoteCTA />
    </>
  );
}
