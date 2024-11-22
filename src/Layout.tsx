import React from "react";
import { ReactNode } from "react";
import Navigation from "./nav/Navigation";
import Footer from "./footer/Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <React.Fragment>
      <div>
        <Navigation />
        {children}
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Layout;
