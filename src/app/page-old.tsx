import { HeroSection } from '@/components/sections/hero'
import { ProblemSection } from '@/components/sections/problem'
import { FounderStorySection } from '@/components/sections/founder-story'
import { SolutionSection } from '@/components/sections/solution'
import { FoundersClubSection } from '@/components/sections/founders-club'
import { TrustSafetySection } from '@/components/sections/trust-safety'
import { FAQSection } from '@/components/sections/faq'
import { FinalCTASection } from '@/components/sections/final-cta'
import { PaymentFormSection } from '@/components/sections/payment-form'
import { Footer } from '@/components/sections/footer'

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
  )
}
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
