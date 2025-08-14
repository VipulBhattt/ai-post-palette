import { MoreHorizontal, Calendar, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Post {
  id: string;
  content: string;
  platform: string;
  scheduledDate: string;
  performance: {
    engagement: number;
    reach: number;
  };
  status: "scheduled" | "published" | "draft";
}

const recentPosts: Post[] = [
  {
    id: "1",
    content: "Excited to share our latest AI innovations that are transforming content creation...",
    platform: "LinkedIn",
    scheduledDate: "2024-01-15T10:00:00Z",
    performance: { engagement: 245, reach: 3200 },
    status: "published"
  },
  {
    id: "2", 
    content: "5 proven strategies to boost your social media engagement in 2024 📈",
    platform: "Twitter",
    scheduledDate: "2024-01-16T14:30:00Z",
    performance: { engagement: 89, reach: 1500 },
    status: "scheduled"
  },
  {
    id: "3",
    content: "Behind the scenes: How we use AI to create compelling content that converts",
    platform: "Instagram",
    scheduledDate: "2024-01-17T09:15:00Z", 
    performance: { engagement: 0, reach: 0 },
    status: "draft"
  }
];

export function RecentPosts() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published": return "bg-stats-engagement text-white";
      case "scheduled": return "bg-stats-reach text-white";
      case "draft": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="p-6 shadow-soft border-0">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Recent Posts</h3>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {recentPosts.map((post) => (
          <div
            key={post.id}
            className="flex items-start gap-4 p-4 rounded-lg bg-accent/30 hover:bg-accent/50 transition-colors"
          >
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground line-clamp-2 mb-2">
                {post.content}
              </p>
              
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{formatDate(post.scheduledDate)}</span>
                </div>
                
                <span className="text-primary font-medium">{post.platform}</span>
                
                {post.status === "published" && (
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>{post.performance.engagement} engagements</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span 
                className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}
              >
                {post.status}
              </span>
              
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}