import React from "react";

function withoutNavLayout({ children }) {
  return <div className="h-auto">{children}</div>;
}

export default withoutNavLayout;
