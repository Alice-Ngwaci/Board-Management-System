import { Hero } from '@/components/hero'
import { HeroIllustration } from '@/components/hero-illustration'
import { Landing } from '@/components/landing'

export default function HomePage() {
  return (
    <Landing>
      <Hero
        title ="MicroFinance"
        content="Our landing page template works for all the devices, so you only have to setup it once, and get beautiful results forever."
        illustration={<HeroIllustration />}
      />
    </Landing>
  )
}
