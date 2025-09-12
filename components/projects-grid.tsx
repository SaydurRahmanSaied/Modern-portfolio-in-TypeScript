"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ExternalLink, ShoppingCart, Eye, Search, Filter } from "lucide-react"

// Mock data for projects
const allProjects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "Modern admin dashboard with analytics, inventory management, and real-time updates. Built with React, TypeScript, and Tailwind CSS.",
    image: "/modern-ecommerce-dashboard.png",
    price: 299,
    originalPrice: 399,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Chart.js"],
    category: "Web Application",
    featured: true,
    rating: 4.9,
    sales: 156,
    demoUrl: "#",
    downloadUrl: "#",
  },
  {
    id: 2,
    title: "SaaS Landing Page",
    description:
      "High-converting landing page template with animations and responsive design. Perfect for SaaS products and startups.",
    image: "/modern-saas-landing-page-design.jpg",
    price: 149,
    originalPrice: 199,
    technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    category: "Template",
    featured: true,
    rating: 4.8,
    sales: 243,
    demoUrl: "#",
    downloadUrl: "#",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description:
      "Secure and intuitive mobile banking interface with advanced features. Complete UI kit with 50+ screens.",
    image: "/mobile-banking-app.png",
    price: 499,
    originalPrice: 699,
    technologies: ["React Native", "TypeScript", "Redux", "Expo"],
    category: "Mobile App",
    featured: true,
    rating: 5.0,
    sales: 89,
    demoUrl: "#",
    downloadUrl: "#",
  },
  {
    id: 4,
    title: "Portfolio Website Template",
    description: "Clean and modern portfolio template for developers and designers. Fully customizable and responsive.",
    image: "/modern-portfolio-template.png",
    price: 99,
    originalPrice: 149,
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    category: "Template",
    featured: false,
    rating: 4.7,
    sales: 312,
    demoUrl: "#",
    downloadUrl: "#",
  },
  {
    id: 5,
    title: "Task Management App",
    description: "Complete task management application with team collaboration features and real-time updates.",
    image: "/task-management-app.png",
    price: 399,
    originalPrice: 499,
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Tailwind CSS"],
    category: "Web Application",
    featured: false,
    rating: 4.6,
    sales: 127,
    demoUrl: "#",
    downloadUrl: "#",
  },
  {
    id: 6,
    title: "Component Library",
    description: "Comprehensive React component library with 100+ components. Built with TypeScript and Storybook.",
    image: "/react-component-library-showcase.jpg",
    price: 199,
    originalPrice: 299,
    technologies: ["React", "TypeScript", "Storybook", "Tailwind CSS"],
    category: "Component Library",
    featured: false,
    rating: 4.9,
    sales: 198,
    demoUrl: "#",
    downloadUrl: "#",
  },
]

export function ProjectsGrid() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")

  const categories = ["all", "Web Application", "Template", "Mobile App", "Component Library"]

  const filteredProjects = allProjects
    .filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory

      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "sales":
          return b.sales - a.sales
        case "featured":
        default:
          return b.featured ? 1 : -1
      }
    })

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Filters and Search */}
        <div className="mb-12 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search projects, technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="sales">Best Selling</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{filteredProjects.length} products found</span>
            <div className="flex gap-4">
              <span>{allProjects.reduce((sum, p) => sum + p.sales, 0)} total sales</span>
              <span>
                Average rating: {(allProjects.reduce((sum, p) => sum + p.rating, 0) / allProjects.length).toFixed(1)}
              </span>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  {project.featured && <Badge className="bg-primary text-primary-foreground">Featured</Badge>}
                  {project.originalPrice > project.price && (
                    <Badge variant="destructive">
                      -{Math.round(((project.originalPrice - project.price) / project.originalPrice) * 100)}%
                    </Badge>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                  <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>

                {/* Rating and Sales */}
                <div className="absolute bottom-3 left-3 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  ⭐ {project.rating} • {project.sales} sales
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                  <div className="text-right">
                    <span className="text-lg font-bold text-primary">${project.price}</span>
                    {project.originalPrice > project.price && (
                      <span className="text-sm text-muted-foreground line-through ml-2">${project.originalPrice}</span>
                    )}
                  </div>
                </div>

                <h3 className="font-bold text-lg text-foreground mb-2 text-balance">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4 text-pretty line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
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

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
                setSortBy("featured")
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
