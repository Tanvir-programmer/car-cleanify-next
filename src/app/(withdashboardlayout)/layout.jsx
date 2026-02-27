import DashboardSitebar from "@/components/shared/DashboardSitebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <DashboardSitebar></DashboardSitebar>
      {children}
    </div>
  );
};

export default layout;
