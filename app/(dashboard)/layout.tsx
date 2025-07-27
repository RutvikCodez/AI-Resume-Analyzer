import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { redirect } from "next/navigation";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const user = true; 

  if (!user) redirect("/login");

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-[240px_1fr] bg-gray-50 text-gray-900">
      <Sidebar />
      <main className="flex flex-col overflow-hidden">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Layout;
