/* eslint-disable no-restricted-imports */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, {useMemo} from "react";
import {Link} from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import objectPath from "object-path";
import {useHtmlClassService} from "../../../_core/MetronicLayout";
import {DropdownTopbarItemToggler} from "../../../../_partials/dropdowns";

export function UserProfileDropdown() {
    let user = JSON.parse(localStorage.getItem("user"));

    const uiService = useHtmlClassService();
    const layoutProps = useMemo(() => {
        return {
            light:
                objectPath.get(uiService.config, "extras.user.dropdown.style") ===
                "light",
        };
    }, [uiService]);

    return (
        <Dropdown drop="down" alignRight>
            <Dropdown.Toggle
                as={DropdownTopbarItemToggler}
                id="dropdown-toggle-user-profile"
            >
                <div
                    className={
                        "btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2"
                    }
                >
          <span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">
            Hi,
          </span>{" "}
                    <span className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">
            {user.name}
          </span>
                    <span className="symbol symbol-35 symbol-light-success">
            <span className="symbol-label font-size-h5 font-weight-bold">
              {user.name}
            </span>
          </span>
                </div>
            </Dropdown.Toggle>
            <Dropdown.Menu
                className="p-0 m-0 dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">


                <div className="navi navi-spacer-x-0 pt-5">
                    <a className="navi-item px-8">
                        <div className="navi-link">
                            <div className="navi-icon mr-2">
                                <i className="flaticon2-calendar-3 text-success"/>
                            </div>
                            <div className="navi-text">
                                <div className="font-weight-bold">My Profile</div>
                                <div className="text-muted">
                                    Account settings and more
                                    <span className="label label-light-danger label-inline font-weight-bold">
                    View
                  </span>
                                </div>
                            </div>
                        </div>
                    </a>


                    <div className="navi-separator mt-3"></div>

                    <button className="navi-footer  px-8 py-5">
                        <Link
                            to="/logout"
                            className="btn btn-light-primary font-weight-bold"
                        >
                            Sign Out
                        </Link>
                    </button>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
}
