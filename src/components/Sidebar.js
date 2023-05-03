import React from "react";
import chart from "../icons/chart-pie.png";
import dashboard from "../icons/dashboard.png";
import dropdown from "../icons/chevron-up.png";
import userGroup from "../icons/user-group.png";
import about from "../icons/about.png";
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar__wrapper">
        <li className="sidebar__wrapper--single">
          <div className="left__content">
            <div className="icon">
              <img src={chart} alt="" />
            </div>
            <div className="menu">
              <p>Reporting Cycle</p>
            </div>
          </div>
        </li>
        <li className="sidebar__wrapper--single">
          <div className="left__content">
            <div className="icon">
              <img src={dashboard} alt="" />
            </div>
            <div className="menu">
              <p>Dashboard</p>
            </div>
          </div>
          <div className="right__content">
            <img src={dropdown} alt="" />
          </div>
        </li>
        <li className="sidebar__wrapper--single active">
          <div className="left__content">
            <div className="icon">
              <img src={about} alt="" />
            </div>
            <div className="menu">
              <p>About Us</p>
            </div>
          </div>
          <div className="right__content">
            <img src={dropdown} alt="" />
          </div>
        </li>
        <li className="sidebar__wrapper--single">
          <div className="left__content">
            <div className="icon">
              <img src={userGroup} alt="" />
            </div>
            <div className="menu">
              <p>User Management</p>
            </div>
          </div>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
