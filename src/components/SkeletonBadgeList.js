import React from "react";

import "./styles/Skeleton.css";

class SkeletonBadgeList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul className="list-unstyled">
          <li className="Badge mb-3 py-2 container element">
            <div className="row">
              <div className="col-12 col-md-3 text-center d-flex justify-content-center">
                <div className="skeleton-img"></div>
              </div>
              <div className="col-12 col-md-9 text-center text-md-left">
                <div className="skeleton-case col-5 mt-1 mb-3"></div>
                <div className="skeleton-case col-7 mb-2"></div>
                <div className="skeleton-case col-7"></div>
              </div>
            </div>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default SkeletonBadgeList;
