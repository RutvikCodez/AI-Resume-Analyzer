import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  CalendarDays,
  Settings,
} from "lucide-react";

export const sidebarData = [
  { label: "Dashboard", Icon: LayoutDashboard, href: "/dashboard" },
  { label: "Candidates", Icon: Users, href: "/candidates" },
  { label: "Interviews", Icon: CalendarCheck, href: "/interviews" },
  { label: "Calendar", Icon: CalendarDays, href: "/calendar" },
  { label: "Settings", Icon: Settings, href: "/settings" },
];

export const metricCardsData: metricCardPropsType[] = [
  {
    title: "Active Candidates",
    value: 8,
  },
  {
    title: "Interviews Today",
    value: 5,
  },
  {
    title: "Pending Follow-Ups",
    value: 3,
  },
  {
    title: "Monthly Interview Count",
    value: 22,
  },
];
