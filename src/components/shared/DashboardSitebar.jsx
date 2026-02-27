import Link from "next/link";
import React from "react";

const DashboardSitebar = () => {
  return (
    <div className="w-[200px] bg-purple-200 h-screen">
      <h2>Car Cleanify</h2>
      <div>
        <Link href={"dashboard/profile"}>Profile</Link>
        <Link href={"dashboard/myblog"}>My Blog</Link>
      </div>
    </div>
  );
};

export default DashboardSitebar;
