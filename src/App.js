import React, { useState } from "react";
import Main from "./pages/Main";
import Login from "./pages/Login";
import "./App.css";
import "typeface-roboto";

const App = () => {
  const [steps, setSteps] = useState("login");
  const [config, setConfig] = useState("");

  const changeSteps = step => {
    setSteps(step);
  };

  const loadConfig = newConfig => {
    //  console.dir(newConfig);
    setConfig(newConfig);
  };

  if (steps === "login") {
    return <Login changeSteps={changeSteps} loadConfig={loadConfig} />;
  } else if (steps === "main") {
    return <Main changeSteps={changeSteps} config={config} />;
  }
};

export default App;
