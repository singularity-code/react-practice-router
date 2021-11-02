import React from "react";
import { Link, Route, NavLink } from "react-router-dom";
import Profile from "./Profile";
import "./Profiles.scss";

const Profiles = () => {
  const activeStyle = {
    background: "#ff00ff",
    color: 'white',
  };
  return (
    <div>
      <span>
        <Link to="/profiles/id1">User1</Link>
      </span>
      <span>
        <NavLink activeStyle={activeStyle} to="/profiles/id2">User2</NavLink>
      </span>
      <Route path="/profiles" exact render={() => <div>Select a user</div>} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
