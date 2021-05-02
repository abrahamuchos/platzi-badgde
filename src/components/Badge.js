import React from "react";

import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Header Conf" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            alt="Avatar"
          />
          <h3 className="ml-3">
            {this.props.firstName} <br /> {this.props.lastName}
          </h3>
        </div>

        <div className="Badge__section-info py-3">
          <p className="mb-1">{this.props.jobTitle} </p>
          <div>{this.props.social}</div>
        </div>

        <div className="Badge__footer">
          <p className="mb-0">#PlatziConf</p>
        </div>
      </div>
    );
  }
}

export default Badge;
