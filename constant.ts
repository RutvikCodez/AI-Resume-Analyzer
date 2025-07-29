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
  Plus,
  Target,
  FileText,
} from "lucide-react";

export const sidebarData = [
  { label: "Dashboard", Icon: LayoutDashboard, href: "/" },
  { label: "Candidates", Icon: Users, href: "/candidates" },
  { label: "Interviews", Icon: CalendarCheck, href: "/interviews" },
  { label: "Calendar", Icon: CalendarDays, href: "/calendar" },
  { label: "Settings", Icon: Settings, href: "/settings" },
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
    url: "/",
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

export const chartConfig = {
  interviews: {
    label: "Interviews",
    color: "hsl(var(--chart-1))",
  },
  hired: {
    label: "Hired",
    color: "hsl(var(--chart-2))",
  },
  rejected: {
    label: "Rejected",
    color: "hsl(var(--chart-3))",
  },
}

export const conversionData = [
  { stage: "Applied", count: 150 },
  { stage: "Screened", count: 80 },
  { stage: "Interviewed", count: 45 },
  { stage: "Offered", count: 20 },
  { stage: "Hired", count: 15 },
]

export const rejectionData = [
  { reason: "Skills Mismatch", value: 35, color: "#ef4444" },
  { reason: "Experience", value: 25, color: "#f97316" },
  { reason: "Cultural Fit", value: 20, color: "#eab308" },
  { reason: "Salary Expectations", value: 15, color: "#22c55e" },
  { reason: "Other", value: 5, color: "#6366f1" },
]

export const sidebarActions: SidebarAction[] = [
  { label: "Schedule Interview", icon: Plus },
  { label: "Add New Candidate", icon: Users },
  { label: "Update Status", icon: Target },
  { label: "Generate Report", icon: FileText },
];

export const recentActivityItems = [
  {
    color: "#22c55e", // green-500
    title: "John Doe hired",
    description: "Senior Developer position",
    time: "2h ago",
  },
  {
    color: "#3b82f6", // blue-500
    title: "Interview scheduled",
    description: "Sarah Smith - Tomorrow 2PM",
    time: "4h ago",
  },
  {
    color: "#f97316", // orange-500
    title: "Follow-up required",
    description: "Mike Johnson - UI Designer",
    time: "6h ago",
  },
];
