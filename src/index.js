import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//Import UseContext
// import { UserContextProvider } from "./context/UserContext"
import { AuthContextProvider } from "./context/AuthContext";
import { AlertContextProvider } from "./context/AlertContext";

ReactDOM.render(
  <BrowserRouter>
    <AlertContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </AlertContextProvider>
  </BrowserRouter>,
  document.getElementById("root"),
);
