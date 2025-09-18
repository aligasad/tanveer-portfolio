import Navigation from "@/components/navigation"
import ProjectsSection from "@/components/projects-section"
import Footer from "@/components/footer"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <ProjectsSection />
      </div>
      <Footer />
    </main>
  )
}
