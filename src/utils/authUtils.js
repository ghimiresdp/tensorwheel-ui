import {apiConstants} from "../constants";
import Axios from "axios";

const AuthUtils = (
  () => {
    let _service;

    function _getService() {
      if (!_service) {
        _service = this;
        return _service
      }
      return _service
    }

    function _setToken(tokenObj) {
      localStorage.setItem('access', tokenObj['access']);
      localStorage.setItem('refresh', tokenObj['refresh']);
    }

    function _getAccessToken() {
      return localStorage.getItem('access')
    }

    function _getRefreshToken() {
      return localStorage.getItem('refresh');
    }

    function _clearToken() {
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
    }

    function _getRequestHeader() {
      return {headers:{Authorization: `Bearer ${_getAccessToken()}`}}
    }

    function _refreshToken() {
      Axios.post(apiConstants.token.refresh,
        {"refresh": _getRefreshToken()}
      ).then(
        result => {
          if (result.status === 200) {
            localStorage.setItem('access', result.data['access']);
            window.location.reload();
          } else {
          }
        }
      ).catch(error => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
        window.location.reload();
      });
    }
    return {
      getService: _getService,
      setToken: _setToken,
      getAccessToken: _getAccessToken,
      getRefreshToken: _getRefreshToken,
      clearToken: _clearToken,
      refreshToken: _refreshToken,
      getRequestHeader: _getRequestHeader
    }
  })();
export default AuthUtils;