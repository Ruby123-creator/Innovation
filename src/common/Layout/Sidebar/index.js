import React, { useState } from "react";
import sidebarList from "./sidebarList";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import PartialViewRoute from "../../../route/partialViewRoute";
const Sidebar = (props) => {
  const navigate = useNavigate(); // Use `useNavigate` for navigation
  const [activeMenuChild, setMenuChild] = useState();
  console.log(props, "check the info");
  return (
    <div className="sidebar">
      <div key="menu-div1">
        <ul className="sidebar-list">
          {(sidebarList || []).map((item, index) => {
            return (
              <li
                className="sidebar-menu"
                onClick={() => {
                  if ((item?.childList || []).length) {
                    if (activeMenuChild === item?.menuName) {
                      props.updateState({
                        activeMenuChild: false,
                      });
                    }
                    props.updateState({
                      activeMenuChild: item?.menuName,
                      activeMenuChildList: item?.childList,
                    });
                  } else {
                    navigate(item?.path); // Navigate to the path
                  }
                }}
                key={`side-menu-${index}`}
              >
                <div className="sidebar-icon">{item?.iconClassName}</div>
                <div className="sidebar-name">{item?.menuName}</div>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        key="menu-div2"
        className={`active-menu ${
          props.activeMenuChild && (props.activeMenuChildList || [])?.length
            ? "visible"
            : ""
        }`}
      >
        {props.activeMenuChild && (props.activeMenuChildList||[])?.length ? (
          <>
            <div className="menu-header">
              {props.activeMenuChild}
              <div
                className="menu-closure"
                onClick={() => {
                  props.updateState({ activeMenuChild: false });
                }}
              >
                <FaAngleLeft/>
              </div>
            </div>
            <ul key={"menuul2"}>
              {props?.activeMenuChildList?.length
                ? props.activeMenuChildList.map((menuItem, index) => {
                    return (
                      <li key={`activeMenu` + index}>
                        <div
                          key={"amenudiv1" + index}
                          className={`menu-item ${
                            activeMenuChild &&
                            activeMenuChild === menuItem.menuName
                              ? "active"
                              : ""
                          }`}
                          onClick={() => {
                            if (menuItem?.childList?.length) {
                              setMenuChild(
                                activeMenuChild &&
                                  activeMenuChild === menuItem.menuName
                                  ? false
                                  : menuItem.menuName
                              );
                            } else {
                              navigate(menuItem.path || "/admin/not-found");
                             
                              setMenuChild(menuItem.menuName);
                              props.updateState({ activeMenuChild: false });
                              return;
                            }
                          }}
                        >
                          <span className="menu-icon">
                            {menuItem?.iconClassName}
                          </span>
                          <span className="menu-name">
                                           
                                           {menuItem?.menuName}
                                        </span>
                          <span
                            className={`right-icon ${
                              activeMenuChild &&
                              activeMenuChild === menuItem.menuName
                                ? "trans"
                                : ""
                            }`}
                          >
                            {menuItem?.childList?.length ? (
                              <i className="fi fi-rs-angle-right" />
                            ) : (
                              ""
                            )}
                          </span>
                        </div>
                      </li>
                    );
                  })
                : ""}
            </ul>
          </>
        ) : (
          ""
        )}
      </div>

    
    </div>
  );
};

export default Sidebar;
