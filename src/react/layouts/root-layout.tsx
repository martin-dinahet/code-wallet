import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header";

export const RootLayout: React.FC = () => {
  return (
    <>
      <div className="w-screen min-h-screen antialiased">
        <Header />
        <Outlet />
      </div>
    </>
  );
};
