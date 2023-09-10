import React from "react";
import Switcher from "../../DarkModeSwitch/Switcher";
import { pages } from "../../routers";
import { NavLink, useLocation } from "react-router-dom";
import { Layout } from "./Layout/Layout";

const DesktopHeader = () => {
  const { pathname } = useLocation();
  console.log("location", pathname);
  return (
    <div
      className="sticky bg-gray-200 dark:bg-gray-800 top-0 shadow"
      style={{ zIndex: 999999999999999 }}
    >
      <Layout>
        <div className=" grid grid-cols-header py-5">
          <div className="flex items-center justify-start">
            <NavLink to={"/"}>
              <h2 className="text-2xl font-semibold">
                <span className="text-primary">CODE</span>MASTER
              </h2>
            </NavLink>
          </div>
          <div className="flex items-center justify-end space-x-4">
            {pages
              ?.filter((page) => page.show)
              .map((page) => {
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
            <NavLink
              to={"/login"}
              className={`nav-item ${
                pathname === "/login" && "bg-primary text-white"
              }`}
            >
              Login
            </NavLink>
            <Switcher />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default DesktopHeader;
