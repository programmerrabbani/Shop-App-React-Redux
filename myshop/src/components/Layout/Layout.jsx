import React from "react";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import NavMenu from "../NavMenu/NavMenu.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <NavMenu />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
