import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";  
import { sidebarData } from "@/constant";

const Sidebar = () => {
  return (
    <aside
      className="sticky top-0 h-screen bg-[#E8F5E9] border-r p-8 flex flex-col gap-10 border-border shadow-md max-md:hidden"
      aria-label="Primary Sidebar Navigation"
    >
      <h2 className="text-3xl font-extrabold text-[#2C3E50] tracking-tight">
        Aspire Tech
      </h2>

      <nav>
        <ul className="flex flex-col gap-6 list-none" role="list">
          {sidebarData.map(({ Icon, href, label }, index) => (
            <li key={index}>
              <Link
                href={href}
                className="flex items-center gap-5 text-lg font-semibold text-gray-700 hover:text-[#256D6B] hover:bg-[#D9F0EF] rounded-lg px-4 py-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#256D6B]"
              >
                <Icon
                  className="w-6 h-6 flex-shrink-0 text-gray-500 group-hover:text-[#256D6B] transition-colors duration-300"
                  aria-hidden="true"
                />
                <span className="whitespace-nowrap">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Button className="mt-auto bg-[#256D6B] hover:bg-[#1E524F] font-semibold py-3 rounded-lg shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E524F] w-full text-black">
        Log out
      </Button>
    </aside>
  );
};

export default Sidebar;
