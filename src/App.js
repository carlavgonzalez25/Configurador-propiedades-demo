import React, { useState } from "react";
import Main from "./pages/Main";
import Login from "./pages/Login";
import "./App.css";
import "typeface-roboto";

const App = () => {
  const [steps, setSteps] = useState("login");
  const [config, setConfig] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  const changeSteps = step => {
    setSteps(step);
  };

  const loadConfig = newConfig => {
    //  console.dir(newConfig);
    setConfig(newConfig);
  };

  const loadUser = username => {
    setSelectedUser(username);
  };

  if (steps === "login") {
    return (
      <Login
        changeSteps={changeSteps}
        loadConfig={loadConfig}
        loadUser={loadUser}
      />
    );
  } else if (steps === "main") {
    return (
      <Main
        changeSteps={changeSteps}
        config={config}
        selectedUser={selectedUser}
      />
    );
  }
};

export default App;
