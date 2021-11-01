import React from "react";
import { Link, Route } from "react-router-dom";
import Profile from "./Profile";
import "./Profiles.scss";

const Profiles = () => {
  return (
    <div>
      <span>
        <Link to="/profiles/id1">User1</Link>
      </span>
      <span>
        <Link to="/profiles/id2">User2</Link>
      </span>
      <Route path="/profiles" exact render={() => <div>Select a user</div>} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
