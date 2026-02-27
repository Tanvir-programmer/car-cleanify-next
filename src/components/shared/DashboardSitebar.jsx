"use client"; // Required if you want to add active states or hooks later
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../assets/logo.png";

const DashboardSidebar = () => {
  return (
    <div className="w-[200px] bg-purple-200 h-screen px-3 py-4 fixed top-0 left-0 border-r border-purple-300">
      {/* 1. Logo Section */}
      <div className="mb-8">
        <Link href="/">
          <Image 
            src={logo} 
            alt="Car Cleanify Logo" 
            priority // Loads the logo immediately
            className="w-auto h-auto"
          />
        </Link>
      </div>

      {/* 2. Navigation Links */}
      <nav className="flex flex-col gap-y-4">
        <Link 
          href="/dashboard/profile" 
          className="text-gray-700 hover:text-purple-900 font-medium transition-colors"
        >
          Profile
        </Link>
        
        <Link 
          href="/dashboard/myblog" 
          className="text-gray-700 hover:text-purple-900 font-medium transition-colors"
        >
          My Blog
        </Link>
      </nav>
    </div>
  );
};

export default DashboardSidebar;