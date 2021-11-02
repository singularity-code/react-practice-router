import "./App.scss";
import { Route, Link, Switch } from "react-router-dom";
import About from "./components/About";
import Main from "./components/Main";
import Profiles from "./components/Profiles";
import History from "./components/History";

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
        <span>
          <Link to="/history">History Sample</Link>
        </span>
      </div>
      <Switch>
        <Route path="/" component={Main} exact={true} />
        <Route path={["/about", "/info"]} component={About} />
        <Route path="/profiles" component={Profiles} />
        <Route path="/history" component={History} />
        <Route
          render={({ location }) => (
            <div>
              <h2>This page is not exist</h2>
              <p>{location.pathname}</p>
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
