import DashboardSitebar from "@/components/shared/DashboardSitebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex gap-4">
      <DashboardSitebar></DashboardSitebar>
      <div className="ml-[250px]">{children}</div>
    </div>
  );
};

export default layout;
