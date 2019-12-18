import { LOAD_CONFIG, LOAD_USER, CHANGE_STEPS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case CHANGE_STEPS:
      return { ...state, steps: action.payload };
    case LOAD_CONFIG:
      return { ...state, config: action.payload };
    case LOAD_USER:
      return { ...state, selectedUser: action.payload };

    default:
      return state;
  }
};
