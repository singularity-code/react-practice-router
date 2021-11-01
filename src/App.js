import "./App.scss";
import { Route, Link } from "react-router-dom";
import About from "./components/About";
import Main from "./components/Main";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <span>
        <Link to="/">Main</Link>
      </span>
      <span>
        <Link to="/about">About</Link>
      </span>
      <span>
        <Link to="/info">Info</Link>
      </span>
      <span>
        <Link to="/profile/id1">User1</Link>
      </span>
      <span>
        <Link to="/profile/id2">User2</Link>
      </span>
      <span>
        <Link to="/about?detail=true">True</Link>
      </span>

      <Route path="/" component={Main} exact={true} />
      <Route path={["/about", "/info"]} component={About} />
      <Route path="/profile/:username" component={Profile} />
    </div>
  );
}

export default App;
