import { HashRouter } from "react-router-dom";
import Header from "./pages/Header";
import LocationProvider from "./components/locationProvider";
import RoutesWithAnimation from "./components/routesWithAnimation";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import { useRef } from "react";

function App() {
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);

  return (
    <HashRouter>
      <LocationProvider>
        <AnimatePresence>
          <RoutesWithAnimation />
        </AnimatePresence>
      </LocationProvider>
    </HashRouter>
  );
}

export default App;
