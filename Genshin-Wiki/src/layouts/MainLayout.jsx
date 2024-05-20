import React from "react";
import { Outlet } from "react-router-dom";
import { DataProvider } from "../context/DataContext";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <DataProvider>
        <div className="flex-grow overflow-auto">
          <Outlet />
        </div>
      </DataProvider>
    </div>
  );
};

export default MainLayout;
