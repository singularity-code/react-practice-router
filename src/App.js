import "./App.scss";
import { Route, Link } from "react-router-dom";
import About from "./components/About";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <span><Link to="/">Main</Link></span>
      <span><Link to="/about">About</Link></span>
      <span><Link to="/info">Info</Link></span>
      <Route path="/" component={Main} exact={true}/>
      <Route path={["/about", "/info"]} component={About} />
    </div>
  );
}

export default App;
