import { Sparkles, Calendar, BarChart3, Users, FileText, Camera } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const quickActions = [
  {
    title: "Generate Content",
    description: "Create AI-powered posts",
    icon: <Sparkles className="w-5 h-5" />,
    color: "bg-gradient-primary",
    href: "/generator"
  },
  {
    title: "Schedule Post",
    description: "Plan your content calendar",
    icon: <Calendar className="w-5 h-5" />,
    color: "bg-gradient-accent",
    href: "/calendar"
  },
  {
    title: "View Analytics",
    description: "Track performance metrics",
    icon: <BarChart3 className="w-5 h-5" />,
    color: "bg-gradient-success",
    href: "/analytics"
  },
  {
    title: "Manage Accounts", 
    description: "Connect social platforms",
    icon: <Users className="w-5 h-5" />,
    color: "bg-muted",
    href: "/settings"
  },
  {
    title: "Create Template",
    description: "Save reusable formats",
    icon: <FileText className="w-5 h-5" />,
    color: "bg-muted",
    href: "/templates"
  },
  {
    title: "Media Library",
    description: "Manage your assets",
    icon: <Camera className="w-5 h-5" />,
    color: "bg-muted", 
    href: "/media"
  }
];

export function QuickActions() {
  return (
    <Card className="p-6 shadow-soft border-0">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {quickActions.map((action) => (
          <Button
            key={action.title}
            variant="ghost"
            className="h-auto p-4 flex flex-col items-start gap-3 hover:bg-accent/50 group"
          >
            <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center text-white group-hover:scale-105 transition-transform`}>
              {action.icon}
            </div>
            
            <div className="text-left">
              <h4 className="font-medium text-foreground text-sm">{action.title}</h4>
              <p className="text-xs text-muted-foreground">{action.description}</p>
            </div>
          </Button>
        ))}
      </div>
    </Card>
  );
}