import React from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import ControlSidebar from "../ControlSidebar";
import Content from "../Content";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Content>{children}</Content>
      <ControlSidebar />
      <Footer />
    </div>
  );
};

export default AppLayout;
