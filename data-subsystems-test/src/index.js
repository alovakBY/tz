import React from "react";
import ReactDOM from "react-dom";

import { AppContainer } from "./pages/app/containers/AppContainer";

import "./index.css";

ReactDOM.render(
   <React.StrictMode>
      <AppContainer />
   </React.StrictMode>,
   document.getElementById("root")
);
