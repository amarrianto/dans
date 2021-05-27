import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const { menus } = props;
  return (
    <div className="SideBar">
      {menus.map((data) => {
        return (
          <Link to={data.path}>
            <div className="btn-sidebar">{data.icon} {data.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
