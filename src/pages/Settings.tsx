import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";

const Settings = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground">Manage your account and preferences</p>
          </div>
        </div>

        <Card className="p-8 text-center shadow-soft border-0">
          <h3 className="text-lg font-semibold text-foreground mb-2">Settings Panel Coming Soon</h3>
          <p className="text-muted-foreground">Account management and platform integrations will be available here.</p>
        </Card>
      </div>
    </MainLayout>
  );
};

export default Settings;