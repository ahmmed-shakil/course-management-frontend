import React from "react";
import Switcher from "../../DarkModeSwitch/Switcher";
import { pages } from "../../routers";
import { NavLink, useLocation } from "react-router-dom";
import { Layout } from "./Layout/Layout";

const DesktopHeader = () => {
  const { pathname } = useLocation();
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
            <NavLink
              to={"/admin-portal"}
              className={`border-solid border-2 border-gray-800 hover:bg-gray-800 hover:text-gray-200 transition-all duration-200 ease-in-out delay-150 py-2 px-3 h-10 rounded-lg hover:border-transparent ${
                pathname === "/admin-portal" && "bg-primary text-white"
              }`}
            >
              Admin Portal
            </NavLink>
            <Switcher />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default DesktopHeader;
