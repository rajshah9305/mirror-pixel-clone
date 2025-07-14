import { NavLink, useLocation } from "react-router-dom"
import { 
  BarChart3, 
  Cog, 
  Brain, 
  Activity, 
  Settings,
  Circle
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const navigationItems = [
  { title: "Orchestration Hub", url: "/", icon: BarChart3 },
  { title: "Agent Management", url: "/agents", icon: Brain },
  { title: "Task Console", url: "/tasks", icon: Activity },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "API Configuration", url: "/api-config", icon: Settings },
]

const systemStatusItems = [
  { title: "Cerebras API", status: "Online", color: "text-status-online" },
  { title: "Active Agents", status: "12", color: "text-primary" },
  { title: "Tasks Today", status: "47", color: "text-primary" },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary text-primary-foreground font-medium" : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"

  return (
    <Sidebar className={`${collapsed ? "w-14" : "w-64"} border-r border-border bg-gradient-card`} collapsible="icon">
      <SidebarContent className="p-4 h-full">
        {/* Logo and Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow pulse-glow">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            {!collapsed && (
              <div>
                <h1 className="text-lg font-bold text-foreground bg-gradient-cerebral bg-clip-text text-transparent">CerebralOps</h1>
                <p className="text-xs text-muted-foreground">AI Agent Orchestration</p>
              </div>
            )}
          </div>
          {!collapsed && (
            <div className="w-full h-px bg-gradient-cerebral opacity-30 rounded-full" />
          )}
        </div>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                     <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => `flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 hover-lift ${getNavCls({ isActive })}`}
                    >
                      <item.icon className="w-4 h-4 flex-shrink-0" />
                      {!collapsed && <span className="text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* System Status */}
        {!collapsed && (
          <SidebarGroup className="mt-8">
            <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
              System Status
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="space-y-3">
                {systemStatusItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Circle className={`w-2 h-2 ${item.color} fill-current`} />
                      <span className="text-xs text-muted-foreground">{item.title}</span>
                    </div>
                    <span className={`text-xs font-medium ${item.color}`}>{item.status}</span>
                  </div>
                ))}
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}

        {/* AI Orchestrator */}
        {!collapsed && (
          <div className="mt-auto pt-8">
            <div className="flex items-center gap-3 p-3 bg-gradient-card border border-border/50 rounded-lg shadow-soft hover-lift glass">
              <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground shadow-glow">
                AI
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">AI Orchestrator</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-status-online rounded-full animate-pulse" />
                  Neural Operations Active
                </p>
              </div>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  )
}