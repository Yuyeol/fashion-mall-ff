import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import Home from "Screens/Home";
import About from "Screens/About";
import LookBook from "Screens/LookBook";
import Outer from "Screens/Outer";
import Coat from "Screens/Coat";
import Shirts from "Screens/Shirts";
import Top from "Screens/Top";
import Bottom from "Screens/Bottom";
import ETC from "Screens/ETC";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Router>
    <>
      <Header />
      <Route path="/fashion-mall-ff" exact component={Home} />
      <Route path="/fashion-mall-ff/about" exact component={About} />
      <Route path="/fashion-mall-ff/lookbook" exact component={LookBook} />
      <Route path="/fashion-mall-ff/outer" exact component={Outer} />
      <Route path="/fashion-mall-ff/coat" exact component={Coat} />
      <Route path="/fashion-mall-ff/shirts" exact component={Shirts} />
      <Route path="/fashion-mall-ff/top" exact component={Top} />
      <Route path="/fashion-mall-ff/bottom" exact component={Bottom} />
      <Route path="/fashion-mall-ff/etc" exact component={ETC} />
      <Footer />
    </>
  </Router>
);
