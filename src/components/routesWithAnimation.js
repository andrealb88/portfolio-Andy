import React from "react";
import { useLocation } from "react-router-dom";
import { Home } from "../pages/Home";
import { About } from "../pages/about/About";
import { Contact } from "../pages/contact/Contact";
import { Portfolio } from "../pages/work/work";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

<Router history={history}>
  <RoutesWithAnimation />
</Router>;

function RoutesWithAnimation() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/work" element={<Portfolio />} />
      </Routes>
    </AnimatePresence>
  );
}
export default RoutesWithAnimation;
