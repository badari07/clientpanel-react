import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { store } from "../store";
import { rrfProps } from "../store";
import AppNavBar from "./layout/AppNavBar";
import DashBoard from "./layout/DashBoard";
import AddClient from "./clients/AddClient";
import ClientDetails from "./clients/ClientDetails";

const App = () => {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <div className="App">
          <AppNavBar />
          <div className="container">
            <Router>
              <DashBoard path="/" />
              <AddClient path="/client/add" />
              <ClientDetails path="/client/:id" />
            </Router>
          </div>
        </div>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
};

render(<App />, document.getElementById("root"));
