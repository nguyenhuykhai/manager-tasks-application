import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//Import UseContext
import { AuthContextProvider } from "./context/AuthContext";
import { AlertContextProvider } from "./context/AlertContext";
import { ProjectContextProvider } from "./context/ProjectContext";
import { GroupContextProvider } from "./context/GroupContext";

ReactDOM.render(
  <BrowserRouter>
    <AlertContextProvider>
      <AuthContextProvider>
        <ProjectContextProvider>
          <GroupContextProvider>
            <App />
          </GroupContextProvider>
        </ProjectContextProvider>
      </AuthContextProvider>
    </AlertContextProvider>
  </BrowserRouter>,
  document.getElementById("root"),
);
