import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity } from "lucide-react"

const TaskConsole = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Task Console</h1>
        <p className="text-muted-foreground">Monitor and manage task execution</p>
      </div>
      
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" />
            Task Console
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Task console functionality coming soon...</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default TaskConsole