import { OrderHistory } from "@/components/order-history"
import { Navigation } from "@/components/navigation"

export default function OrdersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <OrderHistory />
      </div>
    </main>
  )
}
