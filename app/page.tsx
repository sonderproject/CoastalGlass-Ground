import { Hero } from "@/components/Hero";
import { BeforeAfter } from "@/components/BeforeAfter";
import { FAQ } from "@/components/FAQ";
import {
  Commercial,
  Intro,
  Plans,
  Process,
  QuoteCTA,
  ServiceArea,
  Services,
  WhyCoastal,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <Plans />
      <Commercial />
      <WhyCoastal />
      <BeforeAfter />
      <Process />
      <ServiceArea />
      <FAQ />
      <QuoteCTA />
    </>
  );
}
