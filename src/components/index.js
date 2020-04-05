import React from "react";
import { render } from "react-dom";
//import { Router } from "@reach/router";
import AppNavBar from "./layout/AppNavBar";
import DashBoard from "./layout/DashBoard";
import { Router } from "@reach/router";
//import { Router } from "@reach/router";

const App = () => {
  return (
    <div className="App">
      <AppNavBar />
      <div className="container">
        <Router>
          <DashBoard path="/" />
        </Router>
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));
