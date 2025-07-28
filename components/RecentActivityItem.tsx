import React from "react";
import { Badge } from "./ui/badge";

const RecentActivityItem: React.FC<recentActivityItemPropsType> = ({
  color,
  title,
  description,
  time,
}) => {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`p-2 rounded-full`}
        style={{ backgroundColor: color }}
      ></div>
      <div className="flex-1 text-sm">
        <p className="font-medium">{title}</p>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <Badge variant="secondary">{time}</Badge>
    </div>
  );
};

export default RecentActivityItem;
