import React from "react";
import { Navbar, Sidebar, Footer } from "../common";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
