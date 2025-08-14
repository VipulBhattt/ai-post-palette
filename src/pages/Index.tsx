import { Heart, Users, Eye, Sparkles } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { RecentPosts } from "@/components/dashboard/RecentPosts";
import { QuickActions } from "@/components/dashboard/QuickActions";

const Index = () => {
  const stats = [
    {
      title: "Engagement Rate",
      value: "8.7%",
      change: "+2.1%",
      trend: "up" as const,
      icon: <Heart className="w-5 h-5" />,
      gradient: "engagement" as const
    },
    {
      title: "Total Reach",
      value: "45.2K",
      change: "+15.3%", 
      trend: "up" as const,
      icon: <Users className="w-5 h-5" />,
      gradient: "reach" as const
    },
    {
      title: "Impressions",
      value: "128.5K",
      change: "+8.9%",
      trend: "up" as const,
      icon: <Eye className="w-5 h-5" />,
      gradient: "impressions" as const
    }
  ];

  return (
    <MainLayout>
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-8 h-8" />
              <h1 className="text-3xl font-bold">AI Content Dashboard</h1>
            </div>
            <p className="text-white/90 text-lg mb-6">
              Create, schedule, and optimize your content with AI-powered insights
            </p>
            <div className="flex gap-4">
              <button className="bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg font-medium transition-colors">
                Generate Content
              </button>
              <button className="border border-white/30 hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors">
                View Calendar
              </button>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 translate-x-24"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RecentPosts />
          <QuickActions />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
