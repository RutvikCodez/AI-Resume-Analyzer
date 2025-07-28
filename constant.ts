import {
  LayoutDashboard,
  Users,
  CalendarCheck,
  CalendarDays,
  Settings,
  Calendar,
  Home,
  Video,
  BarChart3,
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

export const weeklyData = [
  { name: "Mon", interviews: 12 },
  { name: "Tue", interviews: 15 },
  { name: "Wed", interviews: 8 },
  { name: "Thu", interviews: 18 },
  { name: "Fri", interviews: 22 },
  { name: "Sat", interviews: 6 },
  { name: "Sun", interviews: 4 },
];

export const signInData = [
  {
    name: "email",
    label: "Email",
    placeholder: "recruiter.d@aspiretechitsolution.com",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "********",
    type: "password",
  },
];

export const menuItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Candidates",
    url: "/candidates",
    icon: Users,
  },
  {
    title: "Interviews",
    url: "/interviews",
    icon: Video,
  },
  {
    title: "Calendar",
    url: "/calendar",
    icon: Calendar,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];
