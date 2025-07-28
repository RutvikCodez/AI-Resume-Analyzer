import LoginForm from "@/components/LoginForm";
import { Building2 } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <section className="w-full max-w-md bg-white/60 dark:bg-gray-900/60 backdrop-blur-md shadow-2xl rounded-2xl p-8 sm:p-10 flex flex-col gap-8 animate-fade-in border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="p-4 rounded-full bg-primary animate-pulse shadow-md">
            <Building2 className="text-white w-6 h-6" />
          </div>
          <div className=" flex flex-col gap-1">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Aspire Tech
            </h1>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              IT Solutions Recruiting Dashboard
            </p>
          </div>
        </div>
        <LoginForm />
      </section>
    </main>
  );
};

export default Page;
