import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { FounderStorySection } from "@/components/sections/founder-story";
import { SolutionSection } from "@/components/sections/solution";
import { FoundersClubSection } from "@/components/sections/founders-club";
import { TrustSafetySection } from "@/components/sections/trust-safety";
import { FAQSection } from "@/components/sections/faq";
import { FinalCTASection } from "@/components/sections/final-cta";
import { PaymentFormSection } from "@/components/sections/payment-form";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <FounderStorySection />
      <SolutionSection />
      <FoundersClubSection />
      <TrustSafetySection />
      <FAQSection />
      <FinalCTASection />
      <PaymentFormSection />
      <Footer />
    </main>
  );
}
