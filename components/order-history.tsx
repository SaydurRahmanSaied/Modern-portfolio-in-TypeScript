"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Eye, RefreshCw } from "lucide-react"

export function OrderHistory() {
  const orders = [
    {
      id: "ORD-2024-001",
      date: "2024-01-15",
      status: "completed",
      total: 323,
      items: [
        {
          title: "E-Commerce Dashboard",
          price: 299,
          category: "Web Application",
          image: "/modern-ecommerce-dashboard.png",
        },
      ],
    },
    {
      id: "ORD-2024-002",
      date: "2024-01-10",
      status: "completed",
      total: 149,
      items: [
        {
          title: "SaaS Landing Page",
          price: 149,
          category: "Template",
          image: "/modern-saas-landing-page-design.jpg",
        },
      ],
    },
  ]

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Order History</h1>
          <p className="text-muted-foreground">View and manage your previous purchases</p>
        </div>

        <div className="space-y-6">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">Order {order.id}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      Placed on {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge variant={order.status === "completed" ? "default" : "secondary"}>{order.status}</Badge>
                    <p className="text-lg font-semibold text-primary mt-1">${order.total}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-lg border border-border"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground">{item.title}</h3>
                        <Badge variant="outline" className="text-xs mt-1">
                          {item.category}
                        </Badge>
                        <p className="text-sm text-primary font-semibold mt-1">${item.price}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="mr-2 h-4 w-4" />
                          Preview
                        </Button>
                        <Button size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  ))}

                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <div className="text-sm text-muted-foreground">
                      Need help?{" "}
                      <a href="#" className="text-primary hover:underline">
                        Contact Support
                      </a>
                    </div>
                    <Button variant="outline" size="sm">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Redownload All
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {orders.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No orders yet</h3>
              <p className="text-muted-foreground mb-6">
                Start exploring our digital products and make your first purchase.
              </p>
              <Button>Browse Projects</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
