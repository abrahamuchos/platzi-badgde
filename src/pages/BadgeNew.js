import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";

import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        social: ""
      }
    };
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img src={header} alt="" className="img-fluid" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <Badge
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                jobTitle={this.state.form.jobTitle}
                social={this.state.form.social}
              />
            </div>
            <div className="col-12 col-md-6">
              <BadgeForm
                onChange={this.handleChange}
                formValue={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
