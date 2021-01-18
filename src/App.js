// import logo from './logo.svg';
import './App.css';
import React from "react";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

import {Route, Switch} from "react-router";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route component={ErrorPage} />
    </Switch>
  );
}

export default App;
