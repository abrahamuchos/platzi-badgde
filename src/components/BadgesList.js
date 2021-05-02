import React from "react";

class BadgesList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul className="list-unstyled">
          {this.props.badges.map(badge => {
            return (
              <li key={badge.id} className="Badge mb-3 py-2 container">
                <div className="row">
                  <div className="col-12 col-md-3 text-center d-flex justify-content-center">
                    <img
                      src={
                        "https://ui-avatars.com/api/?name=" +
                        badge.firstName +
                        "+" +
                        badge.lastName
                      }
                      alt="Avatar"
                      className="Badge__avatar-list"
                    />
                  </div>
                  <div className="col-12 col-md-9 text-center text-md-left">
                    <p className="font-weight-bold mb-2">
                      {badge.firstName} {badge.lastName}
                    </p>
                    <i className="bi bi-twitter"></i>
                    <a href={"https://twitter.com/" + badge.twitter}>
                      {badge.twitter}
                    </a>
                    <p className="text-muted m-0">{badge.jobTitle}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default BadgesList;
