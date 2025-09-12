import { AdminDashboard } from "@/components/admin-dashboard"
import { Navigation } from "@/components/navigation"

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <AdminDashboard />
      </div>
    </main>
  )
}
