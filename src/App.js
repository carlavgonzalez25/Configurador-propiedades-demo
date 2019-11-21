import React, { Component, useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import "./App.css";
import "typeface-roboto";

const App = () => {
  const [steps, setSteps] = useState("login");
  console.log(steps);

  if (steps === "login") {
    return <Login />;
  } else if (steps === "main") {
    return <Main />;
  }

  /*
  switch (steps) {
    case "login":
      return <Login />;
      break;
    case "main":
      return <App />;
      break;
    default:
      return <App />;
  }
*/

  /*
<Router>
      <Link to="/">Home</Link>
      <Link to="/configurador">App</Link>

      <Switch>
        <Route path="/Configurador">
          <Main />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
 */
};

export default App;
