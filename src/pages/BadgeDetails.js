import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import "./styles/BadgeDetails.css";
import confLogo from "../images/platziconf-logo.svg";

import Badge from "../components/Badge";
import DeleteBadgeModal from "../components/DeleteBadgeModal";

/**
 * Custom Hook that increase counter
 * @param {number} max
 */
function useIncreaseCount(max) {
  let [count, setCount] = React.useState(0);

  if (count > max) {
    setCount(0);
  }

  return [count, setCount];
}

function BadgeDetails(props) {
  let badge = props.badge;
  let [count, setCount] = useIncreaseCount(4);

  return (
    <React.Fragment>
      <div className="BadgeDetails__hero">
        <div className="container">
          <div className="row">
            <div className="col-6 text-center">
              <img src={confLogo} alt="Logo" />
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center BadgeDetails__hero-attendant">
              <h1>
                {badge.firstName} {badge.lastName}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              social={badge.social}
              jobTitle={badge.jobTitle}
            />
          </div>
          <div className="col-6">
            <h2>Actions</h2>
            <div>
              <button
                onClick={() => {
                  setCount(count + 1);
                }}
                className="btn btn-primary mr-4"
              >
                Increase Count {count}
              </button>
              <Link to={`badges/${badge.id}/edit`} className="btn btn-primary">
                Edit
              </Link>
            </div>
            <div className="mt-5">
              <button onClick={props.onOpenModal} className="btn btn-danger">
                Delete
              </button>
              <DeleteBadgeModal
                onDeleteBadge={props.onDeleteBadge}
                isOpen={props.modalIsOpen}
                onClose={props.onCloseModal}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BadgeDetails;
