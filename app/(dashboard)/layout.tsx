import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { redirect } from "next/navigation";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const user = true;
  if (!user) redirect("/login");
  return (
    <div className="grid grid-cols-[1.5fr_8.5fr] h-screen">
      <Sidebar />
      <div className="">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
