import AuthUtils from "../utils/authUtils";
import {apiConstants} from "../constants";
import apiUtils from "../utils/apiUtils";

export const userService = {
  login,
  logout,
  register,
  getProfile,
  updateProfile,
  passwordReset
};

function login(email, password) {
  return apiUtils.post(apiConstants.login, {email, password})
}

function logout() {
  AuthUtils.clearToken();
}

function register(email, password) {
  return apiUtils.post(apiConstants.register, {email, password})
}

function getProfile(){
  return apiUtils.get(apiConstants.login_info, AuthUtils.getRequestHeader())
}

function updateProfile(form_data, id) {
  return apiUtils.patch(`${apiConstants.profile}${id}/`, form_data, AuthUtils.getRequestHeader())
}

function passwordReset() {
  // todo
}