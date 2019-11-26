import React, { Component, useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import "./App.css";
import "typeface-roboto";

const App = () => {
  const [steps, setSteps] = useState("login");
  console.log(steps);

  const changeSteps = step => {
    setSteps(step);
  };

  if (steps === "login") {
    return <Login changeSteps={changeSteps} />;
  } else if (steps === "main") {
    return <Main changeSteps={changeSteps} />;
  }
};

export default App;
