import React from "react";
import mainReducer from "./mainReducer";
import mainContext from "./mainContext";
import {
  CLEAR_STATE,
  LOAD_CONFIG,
  SELECT_CAT,
  SELECT_OPT,
  SHOW_IMAGE,
  CHANGE_STEPS,
  SET_ALERT,
  CHECK_FILENAME
} from "../types";

const MainState = () => {
  const initialState = {
    shingles: "",
    tileThroughout: "",
    showerFloorTile: "",
    cabinets: "",
    kitchenSink: "",
    bathroomSink: "",
    bathroomFaucet: "",
    interiorWallColor: "",
    exteriorWallColor: "",
    graniteEdge: "",
    grout: "",
    selected: "",
    imgElegida: logoSolo,
    step: { der: "images", izq: "categories" },
    alert: null,
    filename: ''
  };

  const [state, dispatch] = useReducer(MainReducer, initialState);

  const clearState = dispatch({
    type: CLEAR_STATE,
    payload: {
      shingles: "",
      tileThroughout: "",
      showerFloorTile: "",
      cabinets: "",
      kitchenSink: "",
      bathroomSink: "",
      bathroomFaucet: "",
      interiorWallColor: "",
      exteriorWallColor: "",
      graniteEdge: "",
      grout: "",
      selected: "",
      imgElegida: logoSolo,
      step: { der: "images", izq: "categories" },
      alert: null,
      filename: ''
    }
  });

  const loadConfig = (key, value) => {
    dispatch({ type: LOAD_CONFIG, payload: { key, value } });
  };

  selectCat = nombre => {
    dispatch({ type: SELECT_CAT, payload: nombre });
  };

  selectOpt = (category, opciones) => {
    initialState.hasOwnProperty(category) &&
      dispatch({ type: SELECT_OPT, payload: { category, opciones } });
    /*this.setState({
        [category]: opciones,
        imgElegida: opciones.image_url
      });*/
  };

  showImage = opciones => {
    dispatch({ type: SHOW_IMAGE, payload: opciones.image_url });
    /*this.setState({
      imgElegida: opciones.image_url
    });*/
  };

  changeSteps = (panel, step) => {
    let newStep = state.step;
    newStep[panel] = step;
    dispatch({ type: CHANGE_STEPS, payload: newStep });
    /*this.setState({
      step: newStep
    });*/
  };

  setAlert = (msg, type) => {
    dispatch({type: SET_ALERT, payload: {msg, type}});  
    /*this.setState({
      alert: { msg: msg, type: type } //Esto se puede reescribir como alert: {msg, type}
    });*/
    //console.log("entro a cheqeuar el alert" + msg + " " + type);
    state.alert !== null &&
      setTimeout(() => dispatch({type: SET_ALERT, payload: null});//this.setState({ alert: null }), 4000);
  };

  

  closeAlert = () => {
    dispatch({type: SET_ALERT, payload: null});
    //this.setState({ alert: null });
  };

  checkFilename = e => {
    dispatch({type: CHECK_FILENAME, payload: e.target.value});
    
    /*this.setState({
      filename: e.target.value
    });*/
  };

  return (
    <MainContext.Provider
      value={{
        shingles: state.shingles,
        tileThroughout: state.tileThroughout,
        showerFloorTile: state.showerFloorTile,
        cabinets: state.cabinets,
        kitchenSink: state.kitchenSink,
        bathroomSink: state.bathroomSink,
        bathroomFaucet: state.bathroomFaucet,
        interiorWallColor: state.interiorWallColor,
        exteriorWallColor: state.exteriorWallColor,
        graniteEdge: state.graniteEdge,
        grout: state.grout,
        selected: state.selected,
        imgElegida: state.imgElegida,
        step: state.step,
        alert: state.alert,
        filename: state.filename,
        clearState,
        loadConfig,
        selectCat,
        selectOpt,
        showImage,
        changeSteps,
        setAlert,
        closeAlert,
        checkFilename
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;
