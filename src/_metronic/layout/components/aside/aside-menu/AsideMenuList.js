/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import {useLocation} from "react-router";
import {NavLink} from "react-router-dom";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl, checkIsActive} from "../../../../_helpers";
import {routeList} from "../../../../../app/config/routeList";

export function AsideMenuList({layoutProps}) {
    const location = useLocation();
    const getMenuItemActive = (url, hasSubmenu = false) => {
        return checkIsActive(location, url)
            ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open `
            : "";
    };

    return (
        <>
            {/* begin::Menu Nav */}
            <ul className={`menu-nav ${layoutProps.ulClasses}`}>


                {/* Affiliate */}
                {/* begin::section */}
                <li className="menu-section ">
                    <h4 className="menu-text">Admin</h4>
                    <i className="menu-icon flaticon-more-v2"></i>
                </li>
                {/* end:: section */}


                {/*begin::1 Level*/}
                <li
                    className={`menu-item menu-item-submenu ${getMenuItemActive(
                        "/referrals", true
                    )}`}
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                >
                    <NavLink className="menu-link menu-toggle" to="/google-material">
                      <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg")}/>
                      </span>
                        <span className="menu-text">Affiliates</span>
                        <i className="menu-arrow"/>
                    </NavLink>
                    <div className="menu-submenu ">
                        <i className="menu-arrow"/>
                        <ul className="menu-subnav">
                            <li className="menu-item  menu-item-parent" aria-haspopup="true">
                                <span className="menu-link">
                                  <span className="menu-text">Affiliates</span>
                                </span>
                            </li>

                            {/*begin::2 Level*/}
                            <li className={`menu-item menu-item-submenu ${getMenuItemActive(routeList.referrals.add,
                                true)}`} aria-haspopup="true" data-menu-toggle="hover">
                                <NavLink className="menu-link menu-toggle" to={routeList.referrals.view}>
                                    <i className="menu-bullet menu-bullet-dot">
                                        <span/>
                                    </i>
                                    <span className="menu-text">All Affiliates</span>
                                </NavLink>
                                <NavLink className="menu-link menu-toggle" to={routeList.referrals.view_verified}>
                                    <i className="menu-bullet menu-bullet-dot">
                                        <span/>
                                    </i>
                                    <span className="menu-text">Verified Affiliates</span>
                                </NavLink>
                                <NavLink className="menu-link menu-toggle" to={routeList.referrals.view_active}>
                                    <i className="menu-bullet menu-bullet-dot">
                                        <span/>
                                    </i>
                                    <span className="menu-text">Active Affiliates</span>
                                </NavLink>
                                <NavLink className="menu-link menu-toggle" to={routeList.referrals.view_suspended}>
                                    <i className="menu-bullet menu-bullet-dot">
                                        <span/>
                                    </i>
                                    <span className="menu-text">Suspended Affiliates</span>
                                </NavLink>

                            </li>
                            {/*end::2 Level*/}

                        </ul>
                    </div>
                </li>
                {/*end::1 Level*/}


                {/*begin::1 Level*/}
                <li
                    className={`menu-item menu-item-submenu ${getMenuItemActive(
                        "/clients", true
                    )}`}
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                >
                    <NavLink className="menu-link menu-toggle" to="/google-material">
                      <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg")}/>
                      </span>
                        <span className="menu-text">Clients</span>
                        <i className="menu-arrow"/>
                    </NavLink>
                    <div className="menu-submenu ">
                        <i className="menu-arrow"/>
                        <ul className="menu-subnav">

                            {/*begin::2 Level*/}
                            <li className={`menu-item menu-item-submenu ${getMenuItemActive(routeList.clients.view,
                                true)}`} aria-haspopup="true" data-menu-toggle="hover"
                            >
                                <NavLink className="menu-link menu-toggle" to={routeList.clients.add}>
                                    <i className="menu-bullet menu-bullet-dot">
                                        <span/>
                                    </i>
                                    <span className="menu-text">View Clients</span>
                                </NavLink>
                            </li>
                            {/*end::2 Level*/}

                        </ul>
                    </div>
                </li>
                {/*end::1 Level*/}


                {/*begin::1 Level*/}
                <li
                    className={`menu-item menu-item-submenu ${getMenuItemActive(
                        "/clubs", true
                    )}`}
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                >
                    <NavLink className="menu-link menu-toggle" to="/google-material">
                      <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg")}/>
                      </span>
                        <span className="menu-text">Clubs</span>
                        <i className="menu-arrow"/>
                    </NavLink>
                    <div className="menu-submenu ">
                        <i className="menu-arrow"/>
                        <ul className="menu-subnav">

                            {/*begin::2 Level*/}
                            <li className={`menu-item menu-item-submenu ${getMenuItemActive("",
                                true)}`} aria-haspopup="true" data-menu-toggle="hover"
                            >
                                <NavLink className="menu-link menu-toggle" to={routeList.club.view_clubs}>
                                    <i className="menu-bullet menu-bullet-dot">
                                        <span/>
                                    </i>
                                    <span className="menu-text">Club Category</span>
                                </NavLink>
                                <NavLink className="menu-link menu-toggle" to={routeList.club.view_club_members}>
                                    <i className="menu-bullet menu-bullet-dot">
                                        <span/>
                                    </i>
                                    <span className="menu-text">Club Members</span>
                                </NavLink>
                            </li>
                            {/*end::2 Level*/}

                        </ul>
                    </div>
                </li>
                {/*end::1 Level*/}


                {/*begin::1 Level*/}
                <li
                    className={`menu-item menu-item-submenu ${getMenuItemActive(
                        "/chat", true
                    )}`}
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                >
                    <NavLink className="menu-link menu-toggle" to="/google-material">
                      <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg")}/>
                      </span>
                        <span className="menu-text">Chat</span>
                        <i className="menu-arrow"/>
                    </NavLink>
                    <div className="menu-submenu ">
                        <i className="menu-arrow"/>
                        <ul className="menu-subnav">

                            {/*begin::2 Level*/}
                            <li className={`menu-item menu-item-submenu ${getMenuItemActive("",
                                true)}`} aria-haspopup="true" data-menu-toggle="hover"
                            >
                                <NavLink className="menu-link menu-toggle" to="/google-material/inputs">
                                    <i className="menu-bullet menu-bullet-dot">
                                        <span/>
                                    </i>
                                    <span className="menu-text">Chat Request</span>
                                </NavLink>
                                <NavLink className="menu-link menu-toggle" to="/google-material/inputs">
                                    <i className="menu-bullet menu-bullet-dot">
                                        <span/>
                                    </i>
                                    <span className="menu-text">Chat History</span>
                                </NavLink>
                            </li>
                            {/*end::2 Level*/}

                        </ul>
                    </div>
                </li>
                {/*end::1 Level*/}


                {/*begin::1 Level*/}
                <li
                    className={`menu-item menu-item-submenu ${getMenuItemActive(
                        "/google", true
                    )}`}
                    aria-haspopup="true"
                    data-menu-toggle="hover"
                >
                    <NavLink className="menu-link menu-toggle" to="/support">
                      <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Cap-2.svg")}/>
                      </span>
                        <span className="menu-text">Support</span>
                        <i className="menu-arrow"/>
                    </NavLink>
                    <div className="menu-submenu ">
                        <i className="menu-arrow"/>
                        <ul className="menu-subnav">

                            {/*begin::2 Level*/}
                            <li className={`menu-item menu-item-submenu ${getMenuItemActive("",
                                true)}`} aria-haspopup="true" data-menu-toggle="hover"
                            >
                                <NavLink className="menu-link menu-toggle" to="/google-material/inputs">
                                    <i className="menu-bullet menu-bullet-dot">
                                        <span/>
                                    </i>
                                    <span className="menu-text">Support</span>
                                </NavLink>

                            </li>
                            {/*end::2 Level*/}

                        </ul>
                    </div>
                </li>
                {/*end::1 Level*/}


            </ul>

        </>
    );
}
