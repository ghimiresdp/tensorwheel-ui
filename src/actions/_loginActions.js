import {loginConstants} from "../constants";
import {userService} from "../services/userService";
import AuthUtils from "../utils/authUtils";
import {AppRoutes} from "../Routes";

const login = (email, password) => {
  return dispatch => {
    dispatch({type: loginConstants.LOGIN_REQUEST});
    userService.login(email, password).then(
      response => {
        dispatch({type: loginConstants.LOGIN_SUCCESS});
        AuthUtils.setToken(response.data);
        window.location = AppRoutes.index;
      }
    ).catch(
      err => {
        dispatch({type: loginConstants.LOGIN_FAILURE, data: err.response.data.detail})
      }
    )
  }
};

const signup = (email, password) => {
  return dispatch => {
    dispatch({type: loginConstants.REGISTER_REQUEST});
    userService.register(email, password).then(
      response => {
        dispatch({type: loginConstants.REGISTER_SUCCESS});
        window.location = AppRoutes.index;
      }
    ).catch(
      err => {
        dispatch({type: loginConstants.REGISTER_FAILURE, data: err.response.data.detail})
      }
    )
  }
};
export const loginActions = {
  login,
  signup,
  // logout,
  // login_google,
  // login_facebook,
  // login_linkedin
};
