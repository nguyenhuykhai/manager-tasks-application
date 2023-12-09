import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//Import UseContext
import { AlertContextProvider } from "./context/AlertContext";
import { Provider } from 'react-redux';
import store from './store/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <AlertContextProvider>
        <App />
      </AlertContextProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root"),
);
