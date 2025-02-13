import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Sidebar/>
      <Footer />
    </div>
  );
};

export default Layout;