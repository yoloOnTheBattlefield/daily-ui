import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "components/Navigation";
import Routes from "routes";

function AppRouter() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes />
      </div>
    </Router>
  );
}

export default AppRouter;
