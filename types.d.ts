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