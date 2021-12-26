import React from "react";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home.jsx";
import Navbar from "./Navbar";
import Manually from "./Manually.jsx";
import { Switch, Route, Redirect } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Manually" component={Manually} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}
