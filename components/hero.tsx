import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium mb-4">
              Available for Projects
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Creative Developer & <span className="text-primary">Digital Craftsman</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            I create exceptional digital experiences through innovative web development, stunning design, and premium
            digital products that drive results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Hero Image/Visual */}
        <div className="mt-16 relative">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl border border-border overflow-hidden">
            <img
              src="/modern-workspace-setup-with-multiple-monitors-show.jpg"
              alt="Modern developer workspace"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-4 -left-4 bg-card border border-border rounded-lg p-4 shadow-lg">
            <div className="text-2xl font-bold text-primary">5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>

          <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-lg p-4 shadow-lg">
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
        </div>
      </div>
    </section>
  )
}
