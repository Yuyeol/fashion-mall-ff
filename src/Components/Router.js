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
import LookBookDetail from "Screens/LookBookDetail";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Router>
    <>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/lookbook" exact component={LookBook} />
      <Route path="/lookbook/:id" exact component={LookBookDetail} />
      <Route path="/outer" exact component={Outer} />
      <Route path="/coat" exact component={Coat} />
      <Route path="/shirts" exact component={Shirts} />
      <Route path="/top" exact component={Top} />
      <Route path="/bottom" exact component={Bottom} />
      <Route path="/etc" exact component={ETC} />
      <Footer />
    </>
  </Router>
);
