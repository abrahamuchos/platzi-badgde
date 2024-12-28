import React from "react";
import { Link } from "react-router-dom";

function useSearchBadges(badges) {
  let [query, setQuery] = React.useState("");
  const [filterBadges, setFiltersBadges] = React.useState(badges);

  React.useMemo(() => {
    let result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFiltersBadges(result);
  }, [badges, query]);

  return { query, setQuery, filterBadges };
}

function BadgesList(props) {
  let badges = props.badges;
  const { query, setQuery, filterBadges } = useSearchBadges(badges);

  if (filterBadges.length === 0) {
    return (
      <React.Fragment>
        <h3>No badges were found</h3>
        <Link to="/badges/new" className="btn btn-primary">
          Create a new badge
        </Link>
        <div className="BadgesList">
          <div className="form-group">
            <label> Filter Badges</label>
            <input
              type="text"
              className="form-control"
              value={query}
              onChange={e => {
                setQuery(e.target.value);
              }}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className="BadgesList">
        <div className="form-group">
          <label> Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>
      </div>
      <ul className="list-unstyled d-flex flex-column-reverse">
        {filterBadges.map(badge => {
          return (
            <li key={badge.id} className="Badge mb-3 py-2 container">
              <Link
                to={`/badges/${badge.id}`}
                className="row text-reset text-decoration-none"
              >
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
              </Link>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default BadgesList;
