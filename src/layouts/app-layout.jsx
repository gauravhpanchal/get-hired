import Header from "@/components/header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <div className="min-h-screen container">
        <Header />
        <Outlet />
      </div>
      <div className="p-10 text-lg  bg-transparent mt-10 text-center">
        Made with ❤️ by Gaurav Panchal
      </div>
    </div>
  );
};

export default AppLayout;
