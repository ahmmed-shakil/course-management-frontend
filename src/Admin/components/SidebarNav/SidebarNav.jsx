import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { adminPages } from "../../routes";

const SidebarNav = () => {
  const { pathname } = useLocation();
  return (
    <div className=" pt-5 space-y-8">
      {adminPages?.map((page) => {
        return (
          <NavLink
            to={page.path}
            className={`block text-gray-200 hover:bg-gray-200 hover:text-primary pl-16 pr-6 py-4 ${
              pathname === page.path && "bg-gray-200 text-primary"
            }`}
          >
            {page.value}
          </NavLink>
        );
      })}
    </div>
  );
};

export default SidebarNav;
