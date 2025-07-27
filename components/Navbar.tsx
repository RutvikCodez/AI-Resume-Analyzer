"use client"
import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Settings } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-end items-center p-4 bg-transparent shadow-sm">
      <HoverCard openDelay={100} closeDelay={100}>
        <HoverCardTrigger asChild>
          <button className="outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-full">
            <Avatar>
              <AvatarImage src="/avatar.jpg" alt="User Avatar" />
              <AvatarFallback>RD</AvatarFallback>
            </Avatar>
          </button>
        </HoverCardTrigger>
        <HoverCardContent className="flex flex-col gap-2 bg-[#E8F5E9]">
            <Link
              href="/settings"
              className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
            >
              <Settings className="w-4 h-4" />
              Settings
            </Link>
            <button
              className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Log out
            </button>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default Navbar;
