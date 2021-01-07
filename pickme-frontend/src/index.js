import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import ApiService from "./service/api_service";

const apiService = new ApiService();
ReactDOM.render(
  <React.StrictMode>
    <App apiService={apiService} />
  </React.StrictMode>,
  document.getElementById("root")
);
