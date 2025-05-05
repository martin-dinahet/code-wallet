import React from "react";
import { Outlet } from "react-router-dom";

export const RootLayout: React.FC = () => {
  return (
    <>
      <body className="w-screen min-h-screen antialiased">
        <Outlet />
      </body>
    </>
  );
};
