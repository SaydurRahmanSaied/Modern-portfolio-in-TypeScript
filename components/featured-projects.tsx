import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ShoppingCart, Eye } from "lucide-react"
import Link from "next/link"

export function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "Modern admin dashboard with analytics, inventory management, and real-time updates.",
      image: "/modern-ecommerce-dashboard.png",
      price: "$299",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
      category: "Web Application",
      featured: true,
    },
    {
      id: 2,
      title: "SaaS Landing Page",
      description: "High-converting landing page template with animations and responsive design.",
      image: "/modern-saas-landing-page-design.jpg",
      price: "$149",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
      category: "Template",
      featured: true,
    },
    {
      id: 3,
      title: "Mobile Banking App",
      description: "Secure and intuitive mobile banking interface with advanced features.",
      image: "/mobile-banking-app.png",
      price: "$499",
      technologies: ["React Native", "TypeScript", "Redux"],
      category: "Mobile App",
      featured: true,
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover my latest work and premium digital products available for purchase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">Featured</Badge>
                )}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                  <span className="text-lg font-bold text-primary">{project.price}</span>
                </div>

                <h3 className="font-bold text-lg text-foreground mb-2 text-balance">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4 text-pretty">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Preview
                </Button>
                <Button size="sm" className="flex-1">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/projects">
            <Button variant="outline" size="lg">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
