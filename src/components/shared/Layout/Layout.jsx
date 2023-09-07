import React from "react";

export const Layout = ({ children }) => {
  return (
    <div className=" container px-3 lg:px-0 lg:mx-20 w-full lg:w-11/12">
      {children}
    </div>
  );
};
