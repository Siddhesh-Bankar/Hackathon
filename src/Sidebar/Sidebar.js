import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Header from "../Header/Header";


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ToggleSideBar: true,
      ToggleSideBarNav: false,
    };
  }

  onToggleButtonClick = () => {
    this.props.ToggleSideBar();
  };

  onSideBarToggle = () => {
    this.setState({
      ToggleSideBarNav: !this.state.ToggleSideBarNav,
    });
  };

  render() {
    return (
      <>
        <div
          className={
            this.state.ToggleSideBarNav
              ? "sidebar-mini layout-fixed sidebar-collapse"
              : "sidebar-mini layout-fixed"
          }
          style={{ height: "auto" }}
        >
          <Header
            onToggleButtonClick={this.onToggleButtonClick}
            onSideBarToggle={this.onSideBarToggle}
          />
          <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
              <span
                className="brand-text font-weight-light"
                style={{ color: "white" }}
              >
              </span>
              <div className="sidebar" style={{ height: "1000px" }}>
                <nav className="mt-2">
                  <ul
                    className="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false">
                    <li className="nav-item">
                      <NavLink
                        to="/Company"
                        className="nav-link"
                        activeClassName="active"
                      >
                        <i className="fa fa-circle nav-icon"></i>
                        Company
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/Person"
                        className="nav-link"
                        activeClassName="active"
                      >
                        <i className="fa fa-circle nav-icon"></i>
                        Contact
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/P2P"
                        className="nav-link"
                        activeClassName="active"
                      >
                        <i className="fa fa-circle nav-icon"></i>
                        P 2 P
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/Ecosystem"
                        className="nav-link"
                        activeClassName="active"
                      >
                        <i className="fa fa-circle nav-icon"></i>
                        Ecosystem
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        to="/Flow"
                        className="nav-link"
                        activeClassName="active"
                      >
                        <i className="fa fa-circle nav-icon"></i>
                        Studio
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
            </aside>
          </div>
        </div>
      </>
    );
  }
}

export default Sidebar;
