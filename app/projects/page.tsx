import { ProjectsGrid } from "@/components/projects-grid"
import { ProjectsHeader } from "@/components/projects-header"
import { Navigation } from "@/components/navigation"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <ProjectsHeader />
        <ProjectsGrid />
      </div>
    </main>
  )
}
