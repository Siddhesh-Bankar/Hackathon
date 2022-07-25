import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import CommonValues from "../src/Common/Util";

// Add a request interceptor
axios.interceptors.request.use(
  // (config) => {
  //   if (config.url == `${process.env.REACT_APP_API}User/authenticate`) {
  //     return config;
  //   }
  //   else if (config.url == `${process.env.REACT_APP_API}User/forgetpassword`) {
  //     return config;
  //   }
  //   else if (config.url == `${process.env.REACT_APP_API}User/updatepassword`) {
  //     return config;
  //   }
  //   else {
  //     const token = CommonValues.GetToken().replace(/^"|"$/g, "");
  //     config.headers.Authorization = `Bearer ${token}`;
  //     return config;
  //   }
  // },
  // (error) => {
  //   // Do something with request error
  //   return Promise.reject(error);
  // }
);
  
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();







