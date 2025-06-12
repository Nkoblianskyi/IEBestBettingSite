import { HeroSection } from "@/components/hero-section"
import { BettingSitesSection } from "@/components/betting-sites-section"
import { WhyIrishPlayersSection } from "@/components/why-irish-players-section"
import { TestingMethodologySection } from "@/components/testing-methodology-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { SaferBettingSection } from "@/components/safer-betting-section"
import { ResponsibleGamblingSection } from "@/components/responsible-gambling-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BettingSitesSection />
      <WhyIrishPlayersSection />
      <TestingMethodologySection />
      <TestimonialsSection />
      <SaferBettingSection />
      <ResponsibleGamblingSection />
    </>
  )
}
