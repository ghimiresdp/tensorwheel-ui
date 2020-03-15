import { Constants } from "./constants";

export default function AlertReducer(state = {}, action) {
  let newState;
  switch (action.type) {
    case Constants.SHOW_NOTIFICATION:
      return { ...state, ...{ [action.payload.id]: action.payload.data } };
    case Constants.HIDE_NOTIFICATION:
      newState = Object.assign({}, state);
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};