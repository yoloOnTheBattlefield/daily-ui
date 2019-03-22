import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import UI001 from "./UI001";

export default () => (
  <React.Fragment>
    <Route path="/" exact component={Home} />
    <Route path="/ui/001" component={UI001} />
  </React.Fragment>
);
