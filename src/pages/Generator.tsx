import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";

const Generator = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">AI Content Generator</h1>
            <p className="text-muted-foreground">Generate engaging content with AI assistance</p>
          </div>
        </div>

        <Card className="p-8 text-center shadow-soft border-0">
          <h3 className="text-lg font-semibold text-foreground mb-2">AI Generator Coming Soon</h3>
          <p className="text-muted-foreground">AI-powered content generation with customizable prompts will be available here.</p>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Generator;