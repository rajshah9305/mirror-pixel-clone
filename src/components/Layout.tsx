import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import { Button } from "@/components/ui/button"
import { Play, BarChart3 } from "lucide-react"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b border-border bg-gradient-card px-6 flex items-center justify-between backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover-scale" />
              <div className="hidden md:block">
                <div className="w-8 h-0.5 bg-gradient-cerebral rounded-full" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="gap-2 hover-lift border-border/50 bg-card/50 backdrop-blur-sm">
                <BarChart3 className="w-4 h-4" />
                View Analytics
              </Button>
              <Button size="sm" className="gap-2 hover-lift bg-gradient-primary shadow-glow">
                <Play className="w-4 h-4" />
                Deploy Agent
              </Button>
            </div>
          </header>
          
          {/* Main Content */}
          <main className="flex-1 p-6 bg-gradient-to-br from-background via-background to-background/95">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}