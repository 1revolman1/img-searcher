import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home/index";
import styled from "styled-components";
const Nav = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    li {
      list-style: none;
    }
  }
`;
export default function App() {
  // TODO: Make loader for img-preloader
  // TODO: Store favorite data to local storage
  return (
    <Router>
      <div>
        <Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/favorite">Favorite</Link>
            </li>
          </ul>
        </Nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/favorite">
            <h1>Hello Word!</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
