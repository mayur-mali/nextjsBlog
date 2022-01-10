import React from "react";
import Navbar from "../components/Navbar";

function defautLayout({ children }) {
  return (
    <div className="bg-neutral-900 min-h-screen h-auto">
      <Navbar />
      {children}
    </div>
  );
}

export default defautLayout;
