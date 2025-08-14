import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  Calendar, 
  Sparkles, 
  Settings,
  Plus,
  BarChart3,
  Users
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "AI Generator", url: "/generator", icon: Sparkles },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  const getNavClass = (path: string) => {
    const active = isActive(path);
    return active 
      ? "bg-primary text-primary-foreground font-medium shadow-soft" 
      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground";
  };

  return (
    <Sidebar className="border-r border-border">
      <SidebarContent className="bg-background">
        {/* Logo/Brand */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="font-semibold text-foreground">ContentFlow</h2>
                <p className="text-xs text-muted-foreground">AI Content Planner</p>
              </div>
            )}
          </div>
        </div>

        {/* Quick Create Button */}
        {!collapsed && (
          <div className="p-4">
            <Button className="w-full bg-gradient-primary hover:opacity-90 text-white shadow-medium">
              <Plus className="w-4 h-4 mr-2" />
              Create Content
            </Button>
          </div>
        )}

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupContent className="px-4">
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="rounded-lg">
                    <NavLink 
                      to={item.url} 
                      className={`flex items-center gap-3 px-3 py-2.5 transition-all duration-200 ${getNavClass(item.url)}`}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!collapsed && <span className="font-medium">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Stats Summary */}
        {!collapsed && (
          <div className="mt-auto p-4 border-t border-border">
            <div className="bg-gradient-accent rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">This Month</span>
              </div>
              <div className="text-2xl font-bold text-foreground">12.5K</div>
              <div className="text-xs text-muted-foreground">Total Reach</div>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}