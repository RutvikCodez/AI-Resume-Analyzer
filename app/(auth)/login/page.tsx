import LoginForm from "@/components/LoginForm";
import { Building2 } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center">
      <div className="w-full max-w-md flex flex-col gap-8 animate-fade-in">
        <div className="text-center flex flex-col gap-4">
          <div className="mx-auto w-fit p-3 bg-primary rounded-full flex items-center justify-center logo-pulse">
            <Building2 className="text-primary-foreground" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-gray-900">Aspire Tech</h1>
            <p className="text-gray-600">IT Solutions Recruiting Dashboard</p>
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Page;
