import React, { Component } from "react";
import CommonValues from '../Common/Util';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //LoggedInUserName: CommonValues.GetUserName().replace(/^"|"$/g, '')
    }
  }

  componentDidMount = () => {
  }

  onToggleClick = () => {
    this.props.onSideBarToggle();
    this.props.onToggleButtonClick();
  };
  render() {

    return (
      <div>
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">

          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="pushmenu"
                role="button"
                onClick={this.onToggleClick}
              >
                <i className="fa fa-bars" />
              </a>
            </li>
          </ul>
          {/* Right navbar links */}
          <ul class="navbar-nav ml-auto">
            {/* Navbar Search */}
            <li class="nav-item">
              
            </li>
            <li className="nav-item dropdown"></li>
          </ul>

          <p >
            <h5>
               {/* <b>Welcome </b> */}
            </h5>
          </p>
          <ul className="navbar-nav">
            <li className="nav-item">
              </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
