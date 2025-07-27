import { redirect } from "next/navigation";
import React from "react";

const Page = () => {
  const user = true;
  if (user) redirect("/");
  return <div>Page</div>;
};

export default Page;
