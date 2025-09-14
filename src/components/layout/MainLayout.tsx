import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { UserButton } from "@clerk/clerk-react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />

        <SidebarInset className="flex-1">
          {/* Header */}
          <header className="flex h-16 items-center gap-4 border-b border-border bg-card px-6">
            <SidebarTrigger className="h-8 w-8" />

            <div className="flex-1">
              <h1 className="text-lg font-semibold text-foreground">Welcome back!</h1>
              <p className="text-sm text-muted-foreground">Let's create amazing content today</p>
            </div>

            {/* Profile button with Clerk user avatar */}
            <UserButton
              afterSignOutUrl="/sign-in"
              appearance={{
                elements: {
                  userButtonAvatarBox: "h-8 w-8 rounded-full",
                },
              }}
            />

            {/* Floating Create Button for Mobile */}
            <div className="md:hidden">
              <Button
                size="sm"
                className="bg-gradient-primary hover:opacity-90 text-white shadow-medium"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6">{children}</main>
        </SidebarInset>
      </div>

      {/* Floating Create Button */}
      <Button
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-primary hover:opacity-90 text-white shadow-large z-50 md:hidden"
      >
        <Plus className="w-6 h-6" />
      </Button>
    </SidebarProvider>
  );
}
