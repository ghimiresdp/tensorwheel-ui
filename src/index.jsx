import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import * as ServiceWorker from "./serviceWorker";
import "bootstrap";
import "./assets/scss/style.scss";
import "./assets/css/night-owl.css";
import App from "./App";
import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <App/>{/*<ToastNotification/>*/}</Provider>, document.getElementById("root"));
ServiceWorker.unregister();