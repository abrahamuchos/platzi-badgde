import React from "react";
import { Link } from "react-router-dom";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";

import api from "../api";
import SkeletonBadgeList from "../components/SkeletonBadgeList";
import BadgeList from "../components/BadgesList";

class Badges extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      data: undefined
    };
  }

  componentDidMount() {
    this.fetchData();
    // this.interval = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    // clearInterval(this.interval);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (err) {
      this.setState({ loading: false, error: err.message });
    }
  };

  render() {
    if (this.state.loading) {
      return (
        <React.Fragment>
          {/* Hero */}
          <div className="Badges">
            <div className="Badges__hero">
              <div className="Badges__container">
                <img
                  className="Badges__conf-logo"
                  src={confLogo}
                  alt="conf Logo"
                />
              </div>
            </div>
          </div>
          {/* End Hero */}

          <div className="Badges__container">
            <div className="Badges__buttons">
              <Link to="/badges/new" className="btn btn-primary">
                New Badge
              </Link>
            </div>

            <div className="Badges__list">
              <div className="Badges__container">
                <SkeletonBadgeList />
                <SkeletonBadgeList />
                <SkeletonBadgeList />
                <SkeletonBadgeList />
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }

    if (this.state.error) {
      return `Upps error: ${this.state.error}`;
    }

    return (
      <React.Fragment>
        {/* Hero */}
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges__conf-logo"
                src={confLogo}
                alt="conf Logo"
              />
            </div>
          </div>
        </div>
        {/* End Hero */}

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <div className="Badges__list">
            <div className="Badges__container">
              <BadgeList badges={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
