import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
const Layout = () => {
  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
};
export default Layout;
