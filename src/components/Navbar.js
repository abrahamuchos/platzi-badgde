import React from "react";
import Link from "react-router-dom/Link";

import logo from "../images/logo.svg";
import "../components/styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <Link to="/" className="Navbar__brand">
            <img
              className="Navbar__brand_logo"
              src={logo}
              alt="Logo Platzi conf"
            />
            <span className="font-weight-light">Platzi</span>
            <span className="font-weight-bold">Conf</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
