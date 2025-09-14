import { MainLayout } from "@/components/layout/MainLayout";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { RecentPosts } from "@/components/dashboard/RecentPosts";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { BarChart3, Users, Sparkles } from "lucide-react";

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Page header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground">Overview of your content performance and actions</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            title="Total Engagement"
            value="5,824"
            change="+22%"
            trend="up"
            icon={<BarChart3 className="w-6 h-6" />}
            gradient="engagement"
          />
          <StatsCard
            title="Reach"
            value="18,689"
            change="+9%"
            trend="up"
            icon={<Users className="w-6 h-6" />}
            gradient="reach"
          />
          <StatsCard
            title="Impressions"
            value="53,201"
            change="-3%"
            trend="down"
            icon={<Sparkles className="w-6 h-6" />}
            gradient="impressions"
          />
        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Recent Posts */}
        <RecentPosts />
      </div>
    </MainLayout>
  );
};

export default Dashboard;
