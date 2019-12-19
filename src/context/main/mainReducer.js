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

export default (state, action) => {
  switch (action.type) {
    case CLEAR_STATE:
      return { ...state, ...action.payload };
    case LOAD_CONFIG:
      return { ...state, [action.payload.key]: action.payload.value };
    case SELECT_CAT:
      return { ...state, selected: action.payload };
    case SELECT_OPT:
      return {
        ...state,
        [action.payload.category]: opciones,
        imgElegida: opciones.image_url
      };
    case SHOW_IMAGE:
      return { ...state, imgElegida: action.payload };
    case CHANGE_STEPS:
      return { ...state, step: action.payload };
    case SET_ALERT:
      return { ...state, alert: action.payload };
    case CHECK_FILENAME:
      return { ...state, filename: action.payload };

    default:
      return state;
  }
};
