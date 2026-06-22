import { AboutExperience } from "@/components/about-experience"
import { Capabilities } from "@/components/capabilities"
import { Credentials } from "@/components/credentials"
import { CtaFooter } from "@/components/cta-footer"
import { HeroSection } from "@/components/hero-section"
import { Reveal } from "@/components/reveal"
import { SelectedWork } from "@/components/selected-work"
import { SiteHeader } from "@/components/site-header"
import { StatsBar } from "@/components/stats-bar"
import { TrustedBrands } from "@/components/trusted-brands"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <Reveal>
          <StatsBar />
        </Reveal>
        <Reveal>
          <SelectedWork />
        </Reveal>
        <Reveal>
          <AboutExperience />
        </Reveal>
        <Reveal>
          <Capabilities />
        </Reveal>
        <Reveal>
          <TrustedBrands />
        </Reveal>
        <Reveal>
          <Credentials />
        </Reveal>
        <Reveal>
          <CtaFooter />
        </Reveal>
      </main>
    </div>
  )
}
