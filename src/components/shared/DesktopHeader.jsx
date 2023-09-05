import React from "react";
import Switcher from "../../DarkModeSwitch/Switcher";
import { pages } from "../../routers";
import { NavLink, useLocation } from "react-router-dom";
import { Layout } from "./Layout/Layout";

const DesktopHeader = () => {
  const { pathname } = useLocation();
  console.log("location", pathname);
  return (
    <div className="sticky top-0 shadow-md" style={{ zIndex: 999999999999999 }}>
      <Layout>
        <div className=" grid grid-cols-header py-8">
          <div className="flex items-center justify-start">
            <h2 className="text-2xl font-semibold">
              <span className="text-primary">CODE</span>MASTER
            </h2>
          </div>
          <div className="flex items-center justify-end space-x-10">
            {pages?.map((page) => {
              return (
                <NavLink
                  to={page.path}
                  className={`nav-item ${
                    pathname === page.path && "bg-primary text-white"
                  }`}
                >
                  {page.value}
                </NavLink>
              );
            })}
            <Switcher />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default DesktopHeader;
