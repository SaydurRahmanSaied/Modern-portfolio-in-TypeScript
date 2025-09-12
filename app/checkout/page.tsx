import { CheckoutForm } from "@/components/checkout-form"
import { Navigation } from "@/components/navigation"

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <CheckoutForm />
      </div>
    </main>
  )
}
