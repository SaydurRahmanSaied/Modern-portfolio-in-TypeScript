import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Smartphone, Globe, Palette } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies.",
      features: ["Responsive Design", "Performance Optimization", "SEO Ready", "Modern Frameworks"],
      price: "From $2,000",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"],
      price: "From $5,000",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "From $1,500",
    },
    {
      icon: Code2,
      title: "Digital Products",
      description: "Ready-to-use templates, components, and digital assets.",
      features: ["Premium Templates", "Component Libraries", "Source Code", "Documentation"],
      price: "From $99",
    },
  ]

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Services & Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            From custom development to premium digital products, I offer comprehensive solutions for your digital needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <div className="text-lg font-semibold text-primary">{service.price}</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-6 text-pretty">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
