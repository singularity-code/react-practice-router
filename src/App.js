import "./App.scss";
import { Route, Link } from "react-router-dom";
import About from "./components/About";
import Main from "./components/Main";
import Profiles from "./components/Profiles";

function App() {
  return (
    <div className="App">
      <div className="Header">
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
          <Link to="/profiles">Profiles</Link>
        </span>
        <span>
          <Link to="/about?detail=true">True</Link>
        </span>
      </div>
      <Route path="/" component={Main} exact={true} />
      <Route path={["/about", "/info"]} component={About} />
      <Route path="/profiles" component={Profiles} />
    </div>
  );
}

export default App;
