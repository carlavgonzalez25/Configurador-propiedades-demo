import React, { Fragment, useContext } from "react";
import Main from "../pages/Main";
import Login from "../pages/Login";
import "../App.css";
import "typeface-roboto";
import Navbar from "../components/Navbar";
import LoginState from "../context/login/LoginState";
import GeneralContext from "../context/general/generalContext";
import MainState from "../context/main/MainState";

const Wrapper = () => {
  const generalContext = useContext(GeneralContext);

  const { changeSteps, config, selectedUser, steps } = generalContext;

  return steps === "login" ? (
    <Fragment>
      <Navbar />
      <LoginState>
        <Login />
      </LoginState>
    </Fragment>
  ) : (
    steps === "main" && (
      <MainState>
        <Main
        /*changeSteps={changeSteps}
          config={config}
          selectedUser={selectedUser}*/
        />
      </MainState>
    )
  );
};

export default Wrapper;
