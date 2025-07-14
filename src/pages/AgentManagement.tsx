import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { 
  Brain, 
  Search, 
  Filter, 
  Plus,
  Play, 
  Pause, 
  Square,
  Clock, 
  Activity
} from "lucide-react"

const AgentManagement = () => {
  const agents = [
    {
      name: "CrewAI Task Manager",
      framework: "crewal",
      performance: 91,
      status: "running",
      task: "Coordinating team workflows and task delegation",
      executionTime: "3.7s",
      memoryUsage: "768MB"
    },
    {
      name: "Cerebras Research Agent", 
      framework: "cerebras",
      performance: 94,
      status: "running",
      task: "Analyzing market trends and generating research reports",
      executionTime: "2.3s",
      memoryUsage: "512MB"
    },
    {
      name: "AutoGen Content Creator",
      framework: "autogen", 
      performance: 87,
      status: "stopped",
      task: "Multi-agent content generation and review",
      executionTime: "5.1s",
      memoryUsage: "256MB"
    },
    {
      name: "LangGraph Data Processor",
      framework: "langgraph",
      performance: 88,
      status: "paused",
      task: "Processing large datasets with workflow orchestration", 
      executionTime: "8.2s",
      memoryUsage: "1024MB"
    }
  ]

  const getFrameworkColor = (framework: string) => {
    const colors = {
      crewal: "bg-framework-crewal",
      cerebras: "bg-framework-cerebras", 
      autogen: "bg-framework-autogen",
      langgraph: "bg-framework-langgraph"
    }
    return colors[framework as keyof typeof colors] || "bg-muted"
  }

  const getStatusColor = (status: string) => {
    const colors = {
      running: "bg-status-online",
      paused: "bg-status-warning", 
      stopped: "bg-status-offline"
    }
    return colors[status as keyof typeof colors] || "bg-muted"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Agent Management</h1>
          <p className="text-muted-foreground">Deploy, monitor, and control AI agents across frameworks</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Deploy New Agent
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search agents by name or framework..." 
            className="pl-10 bg-card border-border"
          />
        </div>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          All Frameworks
        </Button>
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" />
          All Status
        </Button>
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {agents.map((agent, index) => (
          <Card key={index} className="bg-card border-border">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg ${getFrameworkColor(agent.framework)} flex items-center justify-center`}>
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{agent.name}</h3>
                    <Badge variant="outline" className="text-xs mt-1">
                      {agent.framework}
                    </Badge>
                  </div>
                </div>
                <div className={`w-3 h-3 rounded-full ${getStatusColor(agent.status)}`} />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Performance</span>
                  <span className="text-foreground font-medium">{agent.performance}%</span>
                </div>
                <Progress value={agent.performance} className="h-2" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/50 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Clock className="w-3 h-3" />
                    <span className="text-xs">Execution Time</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">{agent.executionTime}</span>
                </div>
                <div className="bg-muted/50 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Activity className="w-3 h-3" />
                    <span className="text-xs">Memory Usage</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">{agent.memoryUsage}</span>
                </div>
              </div>

              <div>
                <p className="text-xs text-muted-foreground mb-2">Current Task</p>
                <p className="text-sm text-foreground">{agent.task}</p>
              </div>

              <div className="flex gap-2">
                {agent.status === "stopped" && (
                  <Button size="sm" variant="outline" className="flex-1 gap-1">
                    <Play className="w-3 h-3" />
                    Start
                  </Button>
                )}
                {agent.status === "running" && (
                  <Button size="sm" variant="outline" className="flex-1 gap-1">
                    <Pause className="w-3 h-3" />
                    Pause
                  </Button>
                )}
                {agent.status === "paused" && (
                  <Button size="sm" variant="outline" className="flex-1 gap-1">
                    <Play className="w-3 h-3" />
                    Resume
                  </Button>
                )}
                <Button size="sm" variant="outline" className="gap-1 text-destructive hover:text-destructive">
                  <Square className="w-3 h-3" />
                  Stop
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default AgentManagement