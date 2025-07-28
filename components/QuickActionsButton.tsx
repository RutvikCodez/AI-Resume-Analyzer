import React from "react";
import { Button } from "./ui/button";

const QuickActionsButton = ({ icon: Icon, label }: SidebarAction) => {
  return (
    <Button className="w-full justify-start bg-transparent flex gap-2" variant="outline">
      <Icon className="h-4 w-4" />
      {label}
    </Button>
  );
};

export default QuickActionsButton;
