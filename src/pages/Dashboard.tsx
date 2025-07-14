import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Brain, 
  Zap, 
  Clock, 
  TrendingUp, 
  Play, 
  Pause, 
  MoreHorizontal,
  Settings,
  Activity
} from "lucide-react"

const Dashboard = () => {
  const statsCards = [
    {
      title: "TOTAL AGENTS",
      value: "4",
      icon: Brain,
      color: "bg-framework-cerebras"
    },
    {
      title: "ACTIVE AGENTS", 
      value: "2",
      icon: Zap,
      color: "bg-primary"
    },
    {
      title: "COMPLETED TASKS",
      value: "1", 
      icon: Clock,
      color: "bg-success"
    },
    {
      title: "AVG PERFORMANCE",
      value: "90%",
      icon: TrendingUp,
      color: "bg-framework-crewal"
    }
  ]

  const agents = [
    {
      name: "CrewAI Task Manager",
      framework: "crewal",
      performance: 91,
      status: "online",
      task: "Coordinating team workflows and task delegation",
      executionTime: "3.7s",
      memoryUsage: "768MB"
    },
    {
      name: "Cerebras Research Agent", 
      framework: "cerebras",
      performance: 94,
      status: "online",
      task: "Analyzing market trends and generating research reports",
      executionTime: "2.3s",
      memoryUsage: "512MB"
    },
    {
      name: "AutoGen Content Creator",
      framework: "autogen", 
      performance: 87,
      status: "offline",
      task: "Multi-agent content generation and review",
      executionTime: "5.1s",
      memoryUsage: "256MB"
    },
    {
      name: "LangGraph Data Processor",
      framework: "langgraph",
      performance: 88,
      status: "warning",
      task: "Processing large datasets with workflow orchestration", 
      executionTime: "8.2s",
      memoryUsage: "1024MB"
    }
  ]

  const tasks = [
    {
      name: "Generate Market Analysis Report",
      priority: "high",
      framework: "cerebras",
      progress: 85
    },
    {
      name: "Content Review and Optimization", 
      priority: "medium",
      framework: "autogen",
      progress: 100
    },
    {
      name: "Workflow Coordination Setup",
      priority: "critical", 
      framework: "crewal",
      progress: 45
    }
  ]

  const activities = [
    {
      name: "Generate Market Analysis Report",
      framework: "cerebras"
    },
    {
      name: "Content Review and Optimization",
      framework: "autogen" 
    },
    {
      name: "Workflow Coordination Setup",
      framework: "crewal"
    },
    {
      name: "Data Pipeline Processing",
      framework: "langgraph"
    }
  ]

  const frameworks = [
    { name: "AutoGen", status: "active" },
    { name: "CrewAI", status: "active" },
    { name: "LangGraph", status: "active" },
    { name: "Cerebras", status: "active" },
    { name: "AutoGPT", status: "inactive" },
    { name: "BabyAGI", status: "inactive" }
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
      online: "bg-status-online",
      warning: "bg-status-warning",
      offline: "bg-status-offline"
    }
    return colors[status as keyof typeof colors] || "bg-muted"
  }

  const getPriorityColor = (priority: string) => {
    const colors = {
      high: "bg-primary",
      medium: "bg-warning",
      critical: "bg-destructive"
    }
    return colors[priority as keyof typeof colors] || "bg-muted"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Orchestration Hub</h1>
        <p className="text-muted-foreground">Real-time AI agent monitoring and control</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <Card key={index} className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {stat.title}
                  </p>
                  <p className="text-3xl font-bold text-foreground mt-2">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Agent Status Grid */}
        <div className="lg:col-span-2">
          <Card className="bg-card border-border">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  Agent Status Grid
                </CardTitle>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  4 Active
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {agents.map((agent, index) => (
                  <Card key={index} className="bg-muted/50 border-border">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg ${getFrameworkColor(agent.framework)} flex items-center justify-center`}>
                            <Brain className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h3 className="font-medium text-foreground">{agent.name}</h3>
                            <Badge variant="outline" className="text-xs mt-1">
                              {agent.framework}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${getStatusColor(agent.status)}`} />
                          <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-muted-foreground">Performance</span>
                            <span className="text-foreground font-medium">{agent.performance}%</span>
                          </div>
                          <Progress value={agent.performance} className="h-1" />
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-xs">
                          <div>
                            <div className="flex items-center gap-1 text-muted-foreground mb-1">
                              <Clock className="w-3 h-3" />
                              Execution Time
                            </div>
                            <span className="text-foreground font-medium">{agent.executionTime}</span>
                          </div>
                          <div>
                            <div className="flex items-center gap-1 text-muted-foreground mb-1">
                              <Activity className="w-3 h-3" />
                              Memory Usage
                            </div>
                            <span className="text-foreground font-medium">{agent.memoryUsage}</span>
                          </div>
                        </div>

                        <div>
                          <p className="text-xs text-muted-foreground mb-2">Current Task</p>
                          <p className="text-xs text-foreground">{agent.task}</p>
                        </div>

                        <div className="flex gap-2">
                          {agent.status === "offline" ? (
                            <Button size="sm" variant="outline" className="flex-1 gap-1">
                              <Play className="w-3 h-3" />
                              Start
                            </Button>
                          ) : (
                            <Button size="sm" variant="outline" className="flex-1 gap-1">
                              <Pause className="w-3 h-3" />
                              Pause
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Task Queue */}
          <Card className="bg-card border-border">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Task Queue
                </CardTitle>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  4 Active
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4">
              {tasks.map((task, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium text-foreground">{task.name}</h4>
                    {task.progress === 100 && (
                      <div className="w-4 h-4 rounded-full bg-success flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      variant="secondary" 
                      className={`${getPriorityColor(task.priority)} text-xs text-white`}
                    >
                      {task.priority}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {task.framework}
                    </Badge>
                  </div>
                  <Progress value={task.progress} className="h-1" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Framework Control */}
          <Card className="bg-card border-border">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" />
                Framework Control
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                  <span className="text-sm text-foreground">Primary Framework: Cerebras</span>
                  <Button size="sm" variant="ghost">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
                
                <div>
                  <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Available Frameworks</p>
                  <div className="space-y-2">
                    {frameworks.map((framework, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${framework.status === 'active' ? 'bg-status-online' : 'bg-status-offline'}`} />
                          <span className="text-sm text-foreground">{framework.name}</span>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${framework.status === 'active' ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'}`}
                        >
                          {framework.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full">
                Configure Frameworks
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Live Activity Stream */}
      <Card className="bg-card border-border">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" />
            Live Activity Stream
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <div className="space-y-3">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm text-foreground">{activity.name}</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {activity.framework}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard