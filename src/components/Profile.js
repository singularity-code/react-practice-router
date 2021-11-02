import React from "react";
import WithRouter from "./WithRouter";

const data = {
  id1: {
    name: "Name1",
    description: "Test first profile",
  },
  id2: {
    name: "Name2",
    description: "Test second profile",
  },
};

const Profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>NOT FOUND</div>;
  }
  return (
    <div>
      <h1>Profile Page</h1>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouter></WithRouter>
    </div>
  );
};

export default Profile;
