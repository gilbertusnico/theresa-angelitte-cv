import { AboutExperience } from "@/components/about-experience"
import { Capabilities } from "@/components/capabilities"
import { Credentials } from "@/components/credentials"
import { CtaFooter } from "@/components/cta-footer"
import { HeroSection } from "@/components/hero-section"
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
        <StatsBar />
        <SelectedWork />
        <AboutExperience />
        <Capabilities />
        <TrustedBrands />
        <Credentials />
        <CtaFooter />
      </main>
    </div>
  )
}
