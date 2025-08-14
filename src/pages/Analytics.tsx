import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";

const Analytics = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
            <p className="text-muted-foreground">Track your content performance and insights</p>
          </div>
        </div>

        <Card className="p-8 text-center shadow-soft border-0">
          <h3 className="text-lg font-semibold text-foreground mb-2">Analytics Dashboard Coming Soon</h3>
          <p className="text-muted-foreground">Detailed performance metrics and insights will be available here.</p>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Analytics;