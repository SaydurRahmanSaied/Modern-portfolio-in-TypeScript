import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap, Users } from "lucide-react"

export function About() {
  const skills = [
    {
      icon: Code,
      title: "Development",
      description: "Full-stack development with modern frameworks and technologies",
    },
    {
      icon: Palette,
      title: "Design",
      description: "UI/UX design that combines aesthetics with functionality",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized solutions that deliver exceptional user experiences",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with teams to bring visions to life",
    },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Passionate about creating digital experiences that make a difference. I combine technical expertise with
            creative vision to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Crafting Digital Excellence</h3>
            <p className="text-muted-foreground mb-6 text-pretty">
              With over 5 years of experience in web development and design, I specialize in creating modern, responsive
              applications that not only look great but perform exceptionally well.
            </p>
            <p className="text-muted-foreground mb-6 text-pretty">
              My approach combines cutting-edge technology with user-centered design principles to deliver solutions
              that exceed expectations and drive business growth.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img src="/professional-developer-portrait-in-modern-office.jpg" alt="Professional portrait" className="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
