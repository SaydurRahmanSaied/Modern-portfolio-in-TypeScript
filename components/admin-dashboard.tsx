"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Upload, Edit, Trash2, Eye, BarChart3 } from "lucide-react"

export function AdminDashboard() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "E-Commerce Dashboard",
      category: "Web Application",
      price: 299,
      status: "published",
      sales: 156,
      revenue: 46644,
    },
    {
      id: 2,
      title: "SaaS Landing Page",
      category: "Template",
      price: 149,
      status: "published",
      sales: 243,
      revenue: 36207,
    },
    {
      id: 3,
      title: "Mobile Banking App",
      category: "Mobile App",
      price: 499,
      status: "draft",
      sales: 89,
      revenue: 44411,
    },
  ])

  const totalRevenue = projects.reduce((sum, p) => sum + p.revenue, 0)
  const totalSales = projects.reduce((sum, p) => sum + p.sales, 0)
  const publishedProjects = projects.filter((p) => p.status === "published").length

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your projects, uploads, and sales</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Revenue</p>
                  <p className="text-2xl font-bold text-foreground">${totalRevenue.toLocaleString()}</p>
                </div>
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Sales</p>
                  <p className="text-2xl font-bold text-foreground">{totalSales}</p>
                </div>
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Published Projects</p>
                  <p className="text-2xl font-bold text-foreground">{publishedProjects}</p>
                </div>
                <Eye className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Avg. Price</p>
                  <p className="text-2xl font-bold text-foreground">
                    ${Math.round(projects.reduce((sum, p) => sum + p.price, 0) / projects.length)}
                  </p>
                </div>
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList>
            <TabsTrigger value="projects">Manage Projects</TabsTrigger>
            <TabsTrigger value="upload">Upload New Project</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="projects">
            <ProjectsManagement projects={projects} setProjects={setProjects} />
          </TabsContent>

          <TabsContent value="upload">
            <ProjectUploadForm />
          </TabsContent>

          <TabsContent value="analytics">
            <AnalyticsDashboard projects={projects} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function ProjectsManagement({ projects, setProjects }: { projects: any[]; setProjects: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Projects Management</span>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Project
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-foreground">{project.title}</h3>
                  <Badge variant={project.status === "published" ? "default" : "secondary"}>{project.status}</Badge>
                </div>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span>{project.category}</span>
                  <span>${project.price}</span>
                  <span>{project.sales} sales</span>
                  <span>${project.revenue.toLocaleString()} revenue</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function ProjectUploadForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    originalPrice: "",
    technologies: "",
    demoUrl: "",
    downloadUrl: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Project uploaded:", formData)
    // Handle form submission
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload New Project</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title">Project Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="E-Commerce Dashboard"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Web Application">Web Application</SelectItem>
                  <SelectItem value="Template">Template</SelectItem>
                  <SelectItem value="Mobile App">Mobile App</SelectItem>
                  <SelectItem value="Component Library">Component Library</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Price ($)</Label>
              <Input
                id="price"
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="299"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="originalPrice">Original Price ($)</Label>
              <Input
                id="originalPrice"
                type="number"
                value={formData.originalPrice}
                onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                placeholder="399"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="demoUrl">Demo URL</Label>
              <Input
                id="demoUrl"
                value={formData.demoUrl}
                onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
                placeholder="https://demo.example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="downloadUrl">Download URL</Label>
              <Input
                id="downloadUrl"
                value={formData.downloadUrl}
                onChange={(e) => setFormData({ ...formData, downloadUrl: e.target.value })}
                placeholder="https://files.example.com/project.zip"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Modern admin dashboard with analytics, inventory management, and real-time updates..."
              className="min-h-[100px]"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="technologies">Technologies (comma-separated)</Label>
            <Input
              id="technologies"
              value={formData.technologies}
              onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
              placeholder="React, TypeScript, Tailwind CSS, Next.js"
            />
          </div>

          <div className="space-y-4">
            <Label>Project Images</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground mb-2">Drag and drop images here, or click to browse</p>
              <Button variant="outline" size="sm">
                Choose Files
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <Label>Project Files</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <p className="text-muted-foreground mb-2">Upload project files (ZIP, RAR, etc.)</p>
              <Button variant="outline" size="sm">
                Choose Files
              </Button>
            </div>
          </div>

          <div className="flex gap-4">
            <Button type="submit" className="flex-1">
              Upload Project
            </Button>
            <Button type="button" variant="outline" className="flex-1 bg-transparent">
              Save as Draft
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

function AnalyticsDashboard({ projects }: { projects: any[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Revenue by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {["Web Application", "Template", "Mobile App"].map((category) => {
              const categoryProjects = projects.filter((p) => p.category === category)
              const revenue = categoryProjects.reduce((sum, p) => sum + p.revenue, 0)
              const percentage = (revenue / projects.reduce((sum, p) => sum + p.revenue, 0)) * 100

              return (
                <div key={category} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{category}</span>
                    <span>${revenue.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${percentage}%` }} />
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top Performing Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {projects
              .sort((a, b) => b.revenue - a.revenue)
              .slice(0, 5)
              .map((project) => (
                <div key={project.id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-foreground">{project.title}</p>
                    <p className="text-sm text-muted-foreground">{project.sales} sales</p>
                  </div>
                  <p className="font-semibold text-primary">${project.revenue.toLocaleString()}</p>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
