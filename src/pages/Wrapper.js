import React, { useState, Fragment, useContext } from "react";
import Main from "../pages/Main";
import Login from "../pages/Login";
import "../App.css";
import "typeface-roboto";
import Navbar from "../components/Navbar";
import LoginState from "../context/login/LoginState";
import GeneralContext from "../context/general/generalContext";

const Wrapper = () => {
  const generalContext = useContext(GeneralContext);

  return generalContext.steps === "login" ? (
    <Fragment>
      <Navbar />
      <LoginState>
        <Login />
      </LoginState>
    </Fragment>
  ) : (
    generalContext.steps === "main" && (
      <Main
        changeSteps={generalContext.changeSteps}
        config={generalContext.config}
        selectedUser={generalContext.selectedUser}
      />
    )
  );
};

export default Wrapper;
