import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { FeaturedProjects } from "@/components/featured-projects"
import { Services } from "@/components/services"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <FeaturedProjects />
      <Services />
      <Contact />
    </main>
  )
}
