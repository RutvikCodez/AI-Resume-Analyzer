import React from "react";

const TitleDesc = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <p className="text-muted-foreground">{desc}</p>
    </div>
  );
};

export default TitleDesc;
