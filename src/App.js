import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Vending from "./Vending";
import Soda from "./Soda";
import Candy from "./Candy";
import Navbar from "./Navbar";
import Chips from "./Chips";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact={true} path="/" component={Vending}>
            <div className="vending-links">
              <Link to="/candy">Candy</Link>
              <Link to="/soda">Soda</Link>
              <Link to="/Chips">Chips</Link>
            </div>
          </Route>
          <Route path="/candy" component={Candy} />
          <Route path="/soda" component={Soda} />
          <Route path="/chips" component={Chips} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
