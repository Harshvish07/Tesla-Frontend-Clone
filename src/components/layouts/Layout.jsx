import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, hideNavbar = false, hideFooter = false }) => {
  return (
    <div className="min-h-screen w-full bg-[#FFFAFB] relative">
      {!hideNavbar && <Navbar />}
      <main className=" pb-32">{children}</main>
      {!hideFooter && <Footer />}
    </div>
  );
};

export default Layout;
