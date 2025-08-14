import { TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: React.ReactNode;
  gradient?: "engagement" | "reach" | "impressions";
}

export function StatsCard({ title, value, change, trend, icon, gradient }: StatsCardProps) {
  const gradientClass = gradient === "engagement" 
    ? "bg-gradient-success" 
    : gradient === "reach" 
    ? "bg-gradient-primary" 
    : "bg-gradient-accent";

  return (
    <Card className="p-6 hover:shadow-medium transition-all duration-200 border-0 shadow-soft">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-1">{title}</p>
          <p className="text-2xl font-bold text-foreground mb-2">{value}</p>
          
          <div className="flex items-center gap-1">
            {trend === "up" ? (
              <TrendingUp className="w-4 h-4 text-stats-engagement" />
            ) : (
              <TrendingDown className="w-4 h-4 text-destructive" />
            )}
            <span 
              className={`text-sm font-medium ${
                trend === "up" ? "text-stats-engagement" : "text-destructive"
              }`}
            >
              {change}
            </span>
            <span className="text-sm text-muted-foreground">vs last month</span>
          </div>
        </div>
        
        <div className={`w-12 h-12 rounded-xl ${gradientClass} flex items-center justify-center text-white shadow-soft`}>
          {icon}
        </div>
      </div>
    </Card>
  );
}