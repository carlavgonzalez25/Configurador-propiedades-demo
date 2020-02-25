import React, { useReducer } from "react";
import GeneralContext from "./generalContext";
import GeneralReducer from "./generalReducer";
import {
  CHANGE_STEPS,
  LOAD_CONFIG,
  LOAD_USER,
  CHANGE_LANGUAGE
} from "../types";

const GeneralState = props => {
  const initialState = {
    steps: "login",
    config: "",
    selectedUser: "",
    language: "EN"
  };

  const [state, dispatch] = useReducer(GeneralReducer, initialState);

  const changeSteps = step => {
    dispatch({ type: CHANGE_STEPS, payload: step });
    console.log(" change steps, step: " + step);
  };

  const loadConfig = newConfig => {
    dispatch({ type: LOAD_CONFIG, payload: newConfig });
    //setConfig(newConfig);
  };

  const loadUser = username => {
    dispatch({ type: LOAD_USER, payload: username });
    //setSelectedUser(username);
  };

  const changeLanguage = language => {
    dispatch({ type: CHANGE_LANGUAGE, payload: language });
  };

  return (
    <GeneralContext.Provider
      value={{
        changeSteps,
        steps: state.steps,
        config: state.config,
        loadConfig,
        loadUser,
        language: state.language,
        changeLanguage
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};
export default GeneralState;
