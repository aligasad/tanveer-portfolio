import Navigation from "@/components/navigation"
import ExperienceSection from "@/components/experience-section"
import Footer from "@/components/footer"

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <ExperienceSection />
      </div>
      <Footer />
    </main>
  )
}
