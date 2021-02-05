// import logo from './logo.svg';
import './App.css';
import React from "react";
import {Route, Switch} from "react-router";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import DongyuPage from "./pages/Dongyu/Dongyu"
import KangkangPage from "./pages/Kangkang/Kangkang"
import YanboPage from "./pages/Yanbo/Yanbo"




function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dongyu" exact component={DongyuPage} />
      <Route path="/Kangkang" exact component={KangkangPage} />
      <Route path="/Yanbo" exact component={YanboPage} />
     




      <Route component={ErrorPage} />
    </Switch>
  );
}

export default App;
