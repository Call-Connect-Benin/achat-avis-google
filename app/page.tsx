import Hero from "@/components/sections/hero";
import Stats from "@/components/sections/stats";
import HowItWorks from "@/components/sections/how-it-works";
import Advantages from "@/components/sections/advantages";
import Services from "@/components/sections/services";
import Pricing from "@/components/sections/pricing";
import RoiCalculator from "@/components/sections/roi-calculator";
import Platforms from "@/components/sections/platforms";
import Testimonials from "@/components/sections/testimonials";
import Coverage from "@/components/sections/coverage";
import Audiences from "@/components/sections/audiences";
import Tools from "@/components/sections/tools";
import CaseStudies from "@/components/sections/case-studies";
import Blog from "@/components/sections/blog";
import Glossary from "@/components/sections/glossary";
import Faq from "@/components/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <HowItWorks />
      <Advantages />
      <Services />
      <Pricing />
      <RoiCalculator />
      <Platforms />
      <CaseStudies />
      <Testimonials />
      <Coverage />
      <Audiences />
      <Tools />
      <Blog />
      <Glossary />
      <Faq />
    </>
  );
}
