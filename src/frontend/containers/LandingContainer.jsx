import React from 'react';
import BusinessContainer from "./BusinessContainer.jsx";
import CharityContainer from "./CharityContainer.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function LandingContainer() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/business">Business</Link>
            </li>
            <li>
              <Link to="/charity">Charity</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/business">
            <BusinessContainer />
          </Route>
          <Route path="/charity">
            <CharityContainer />
          </Route>
          <Route path="/">
            <LandingContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );

function Home() {
  return <h2>CommuniLnk</h2>;
}

function Business() {
  return <h2>Business</h2>;
}

function Charity() {
  return <h2>Charity</h2>;
}
}

export default LandingContainer;
