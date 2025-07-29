"use client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Building2 } from "lucide-react";
import { menuItems } from "@/constant";
import { usePathname } from "next/navigation";
import Link from "next/link";

const AppSidebar = () => {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r border-border/40 bg-white dark:bg-gray-950">
      {/* Header */}
      <SidebarHeader className="border-b border-border/40 p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary flex items-center justify-center">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-wide">
              Aspire Tech
            </h1>
            <p className="text-xs text-muted-foreground">
              Recruiting Dashboard
            </p>
          </div>
        </div>
      </SidebarHeader>

      {/* Main Menu */}
      <SidebarContent className="py-2 px-1">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground px-4 py-2">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      className={`group ${
                        isActive
                          ? "bg-primary/10 text-primary font-medium"
                          : "hover:bg-muted"
                      } transition-colors rounded-md px-4 py-2 flex items-center gap-3`}
                    >
                      <Link href={item.url}>
                        <item.icon
                          className={`w-4 h-4 ${
                            isActive
                              ? "text-primary"
                              : "text-muted-foreground group-hover:text-foreground"
                          }`}
                        />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t border-border/40 p-4">
        <p className="text-xs text-muted-foreground text-center w-full">
          © 2024 Aspire Tech IT Solutions
        </p>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
