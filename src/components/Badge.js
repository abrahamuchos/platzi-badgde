import React from "react";

import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";
import Gravatar from "./Gravatar";

class Badge extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      data: undefined
    };
  }

  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Header Conf" />
        </div>

        <div className="Badge__section-name">
          <Gravatar className="Badge__avatar" email={this.props.email} />
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
