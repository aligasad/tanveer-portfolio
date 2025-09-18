import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import { AcademicTimeline } from "@/components/academic-timeline"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AcademicTimeline />
      <Footer />
    </main>
  )
}
