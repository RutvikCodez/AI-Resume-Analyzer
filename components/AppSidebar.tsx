"use client"
import React from 'react'
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
} from "@/components/ui/sidebar"
import { Building2 } from 'lucide-react'
import { menuItems } from '@/constant'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const AppSidebar = () => {
    const pathname = usePathname()
  return (
   <Sidebar className="border-r border-border/40">
      <SidebarHeader className="border-b border-border/40 p-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-primary rounded-lg flex items-center justify-center">
            <Building2 className="text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Aspire Tech</h2>
            <p className="text-xs text-muted-foreground">Recruiting Dashboard</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-border/40 p-4">
        <div className="text-xs text-muted-foreground">© 2024 Aspire Tech IT Solutions</div>
      </SidebarFooter>
    </Sidebar>
  )
}

export default AppSidebar