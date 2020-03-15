import {loginConstants} from "../constants";

const initialState = {
  message: null,
  error: null,
  token: null,
  data: null,
  loading: false
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginConstants.LOGIN_REQUEST:
      return {...state, loading: true};

    case loginConstants.LOGIN_FAILURE:
      return {...state, loading: false, error: action.payload};

    case loginConstants.LOGIN_SUCCESS:
      return {...state, loading: false};

    default:
      return state;
  }
};
export default AuthReducer;