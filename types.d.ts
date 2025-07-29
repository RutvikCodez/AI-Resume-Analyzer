type sideBarItemsType = {
  title: string;
  icon: React.JSX.Element;
  subItems?: sideBarType["items"];
  href?: string;
};

type sideBarType = {
  title: string;
  items: sideBarItemsType[];
};

type metricCardPropsType = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  note: React.ReactNode;
  delay?: number;
};

type SidebarAction = {
  label: string;
  icon: LucideIcon;
};

type recentActivityItemPropsType = {
  color: string;
  title: string;
  description: string;
  time: string;
};

type cardWrapperPropsType = {
  children: React.ReactNode;
  className?: string;
  title: string;
  description: string;
  delay?: number;
};

type chartWrapperPropsType = {
  height: number;
  children: React.ReactNode;
};

type candidateProfilePropsType = {
  id: number;
  name: string;
  email: string;
  phone: string;
  position: string;
  status: string;
  priority: string;
  location: string;
  experience: string;
  lastContact: string;
  notes: string;
  avatar: string;
};


