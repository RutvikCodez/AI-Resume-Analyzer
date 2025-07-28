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
