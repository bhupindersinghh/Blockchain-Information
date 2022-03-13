import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Converter from "./Pages/Converter";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Converter">
          <Converter />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
