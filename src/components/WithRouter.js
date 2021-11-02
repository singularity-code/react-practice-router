import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const WithRouter = ({ location, match, history }) => {
  return (
    <div>
      <h1>Location</h1>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      ></textarea>
      <h2>Match</h2>
      <textarea
        value={JSON.stringify(match, null, 2)}
        rows={7}
        readOnly={true}
      ></textarea>
      <button onClick={() => history.push("/")}>TO MAIN</button>
    </div>
  );
};

export default withRouter(WithRouter);
