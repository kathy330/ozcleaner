// import logo from './logo.svg';
import './App.css'
import React from "react"
import {Route, Switch} from "react-router"
import Home from "./pages/Home/Home"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import DongyuPage from "./pages/Dongyu/Dongyu"
import KangkangPage from "./pages/Kangkang/Kangkang"
import YanboPage from "./pages/Yanbo/Yanbo"
import WystanPage from './pages/Wystan/Wystan'
import KathyPage from './pages/Kathy/Kathy'
import ErikPage from './pages/Erik/Erik'
import OliviaPage from './pages/Olivia/Olivia'
import MengxuanPage from './pages/Mengxuan/Mengxuan'
import YanboForm from './pages/Yanbo/YanboForm'

function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dongyu" exact component={DongyuPage} />
      <Route path="/Kangkang" exact component={KangkangPage} />
      <Route path="/Yanbo" exact component={YanboPage} />
      <Route path="/Yanbo/form" exact component={YanboForm} />
      <Route path="/wystan" exact component={WystanPage} />
      <Route path="/kathy" exact component={KathyPage} />
      <Route path="/erik" exact component={ErikPage} />
      <Route path='/mengxuan' exact component={MengxuanPage} />
      <Route path="/Olivia" exact component={OliviaPage} />
      
      <Route component={ErrorPage} />
    </Switch>
  )
}

export default App
