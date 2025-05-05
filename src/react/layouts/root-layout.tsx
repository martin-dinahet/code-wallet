import React from "react";
import { Outlet } from "react-router-dom";

export const RootLayout: React.FC = () => {
  return (
    <>
      <div className="w-screen min-h-screen antialiased">
        <Outlet />
      </div>
    </>
  );
};
