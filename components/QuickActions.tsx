import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { sidebarActions } from "@/constant";
import QuickActionsButton from "./QuickActionsButton";

const QuickActions = () => {
  return (
    <Card className="animate-slide-up " style={{ animationDelay: "0.7s" }}>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Frequently used recruiting actions</CardDescription>
      </CardHeader>
      <CardContent className=" flex flex-col gap-3">
        {sidebarActions.map((item,index)=>(
            <QuickActionsButton key={index} {...item} />
        ))}
      </CardContent>
    </Card>
  );
};

export default QuickActions;
