import Axios from "axios";

Axios.interceptors.response.use(null, error => {
  const err = error.response && error.response.code >= 400 && error.response.code < 500;
  if (!err) console.log(error.response);
  return Promise.reject(error);
});

export default {
  get:Axios.get,
  post:Axios.post,
  put: Axios.put,
  patch: Axios.patch,
  delete: Axios.delete
}