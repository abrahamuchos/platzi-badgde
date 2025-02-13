import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/platziconf-logo.svg";

import Badge from "../components/Badge.js";
import BadgeForm from "../components/BadgeForm";
import api from "../api";

class BadgeNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        loading: false,
        error: null,
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

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/badges");
    } catch (err) {
      this.setState({ loading: false, error: err });
    }
  };

  render() {
    if (this.state.loading) {
      return <div>LOADING...</div>;
    }

    return (
      <React.Fragment>
        <div className="BadgeNew__hero text-center">
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
                email={this.state.form.email}
              />
            </div>
            <div className="col-12 col-md-6">
              <h1>New Attendant</h1>
              <BadgeForm
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                formValue={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
