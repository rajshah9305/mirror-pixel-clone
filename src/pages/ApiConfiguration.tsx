import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { 
  Key, 
  Plus,
  Eye,
  Trash2,
  Settings,
  Save
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const ApiConfiguration = () => {
  const apiKeys = [
    {
      name: "Cerebras Production Key",
      provider: "Cerebras",
      key: "cb_12345••••••••••••••••5678",
      status: "active",
      usageCount: 47,
      lastUsed: "2024-01-20",
      color: "bg-framework-cerebras"
    },
    {
      name: "OpenAI GPT-4 Key", 
      provider: "OpenAI",
      key: "sk-12345••••••••••••••••cdef",
      status: "active",
      usageCount: 23,
      lastUsed: "2024-01-19",
      color: "bg-success"
    },
    {
      name: "Anthropic Claude Key",
      provider: "Anthropic", 
      key: "ant_1234••••••••••••••••5678",
      status: "inactive",
      usageCount: 0,
      lastUsed: "Never",
      color: "bg-framework-anthropic"
    }
  ]

  const getStatusColor = (status: string) => {
    return status === "active" ? "bg-success/10 text-success" : "bg-muted text-muted-foreground"
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">API Configuration</h1>
          <p className="text-muted-foreground">Manage API keys and system configuration</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add API Key
        </Button>
      </div>

      {/* API Keys Management */}
      <Card className="bg-card border-border">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Key className="w-5 h-5 text-primary" />
              API Keys Management
            </CardTitle>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              2 Active
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {apiKeys.map((apiKey, index) => (
            <Card key={index} className="bg-muted/50 border-border">
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg ${apiKey.color} flex items-center justify-center`}>
                      <Key className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{apiKey.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {apiKey.provider}
                        </Badge>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${getStatusColor(apiKey.status)}`}
                        >
                          {apiKey.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="ghost">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <Label className="text-xs text-muted-foreground">Key:</Label>
                    <p className="text-sm font-mono text-foreground mt-1">{apiKey.key}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-xs text-muted-foreground">Usage Count:</Label>
                      <p className="text-sm font-medium text-foreground mt-1">{apiKey.usageCount}</p>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground">Last Used:</Label>
                      <p className="text-sm font-medium text-foreground mt-1">{apiKey.lastUsed}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>

      {/* System Configuration */}
      <Card className="bg-card border-border">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Settings className="w-5 h-5 text-primary" />
            System Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="default-framework" className="text-sm font-medium text-foreground">
                Default Framework
              </Label>
              <Select defaultValue="cerebras">
                <SelectTrigger className="bg-muted/50 border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cerebras">Cerebras</SelectItem>
                  <SelectItem value="openai">OpenAI</SelectItem>
                  <SelectItem value="anthropic">Anthropic</SelectItem>
                  <SelectItem value="crewal">CrewAI</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="log-level" className="text-sm font-medium text-foreground">
                Log Level
              </Label>
              <Select defaultValue="info">
                <SelectTrigger className="bg-muted/50 border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="debug">Debug</SelectItem>
                  <SelectItem value="info">Info</SelectItem>
                  <SelectItem value="warn">Warning</SelectItem>
                  <SelectItem value="error">Error</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="max-agents" className="text-sm font-medium text-foreground">
                Max Concurrent Agents
              </Label>
              <Input 
                id="max-agents"
                type="number"
                defaultValue="10"
                className="bg-muted/50 border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="auto-save" className="text-sm font-medium text-foreground">
                Auto-save Interval (minutes)
              </Label>
              <Input 
                id="auto-save"
                type="number"
                defaultValue="5"
                className="bg-muted/50 border-border"
              />
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button className="gap-2">
              <Save className="w-4 h-4" />
              Save Configuration
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ApiConfiguration