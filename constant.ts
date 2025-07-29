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
};

export const conversionData = [
  { stage: "Applied", count: 150 },
  { stage: "Screened", count: 80 },
  { stage: "Interviewed", count: 45 },
  { stage: "Offered", count: 20 },
  { stage: "Hired", count: 15 },
];

export const rejectionData = [
  { reason: "Skills Mismatch", value: 35, color: "#ef4444" },
  { reason: "Experience", value: 25, color: "#f97316" },
  { reason: "Cultural Fit", value: 20, color: "#eab308" },
  { reason: "Salary Expectations", value: 15, color: "#22c55e" },
  { reason: "Other", value: 5, color: "#6366f1" },
];

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

export const statusColors = {
  "Interview Scheduled": "bg-blue-100 text-blue-800",
  "Under Review": "bg-yellow-100 text-yellow-800",
  "Offer Extended": "bg-green-100 text-green-800",
  "Phone Screen": "bg-purple-100 text-purple-800",
  Rejected: "bg-red-100 text-red-800",
  Hired: "bg-emerald-100 text-emerald-800",
};

export const priorityColors = {
  High: "bg-red-100 text-red-800",
  Medium: "bg-orange-100 text-orange-800",
  Low: "bg-gray-100 text-gray-800",
};

export const candidates = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    position: "Senior Frontend Developer",
    status: "Interview Scheduled",
    priority: "High",
    location: "New York, NY",
    experience: "5 years",
    lastContact: "2024-01-15",
    notes: "Strong React skills, available immediately",
    avatar: "/placeholder.svg?height=40&width=40&text=SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@email.com",
    phone: "+1 (555) 234-5678",
    position: "Full Stack Developer",
    status: "Under Review",
    priority: "Medium",
    location: "San Francisco, CA",
    experience: "3 years",
    lastContact: "2024-01-14",
    notes: "Good technical skills, needs salary negotiation",
    avatar: "/placeholder.svg?height=40&width=40&text=MC",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    email: "emily.rodriguez@email.com",
    phone: "+1 (555) 345-6789",
    position: "UI/UX Designer",
    status: "Offer Extended",
    priority: "High",
    location: "Austin, TX",
    experience: "4 years",
    lastContact: "2024-01-13",
    notes: "Excellent portfolio, waiting for response",
    avatar: "/placeholder.svg?height=40&width=40&text=ER",
  },
  {
    id: 4,
    name: "David Kim",
    email: "david.kim@email.com",
    phone: "+1 (555) 456-7890",
    position: "DevOps Engineer",
    status: "Phone Screen",
    priority: "Medium",
    location: "Seattle, WA",
    experience: "6 years",
    lastContact: "2024-01-12",
    notes: "Strong AWS experience, good cultural fit",
    avatar: "/placeholder.svg?height=40&width=40&text=DK",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    email: "lisa.thompson@email.com",
    phone: "+1 (555) 567-8901",
    position: "Product Manager",
    status: "Rejected",
    priority: "Low",
    location: "Boston, MA",
    experience: "7 years",
    lastContact: "2024-01-10",
    notes: "Overqualified for the position",
    avatar: "/placeholder.svg?height=40&width=40&text=LT",
  },
];
