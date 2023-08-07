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
  // const portfolioRef = useRef(null);
  // const contactRef = useRef(null);
  // const aboutRef = useRef(null);
  // const scrollToPortfolio = () => {
  //   if (portfolioRef.current) {
  //     portfolioRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  // const scrollToContact = () => {
  //   if (contactRef.current) {
  //     contactRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  // const scrollToAbout = () => {
  //   if (contactRef.current) {
  //     aboutRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <HashRouter>
      <LocationProvider>
        {/* <Header
          homeRef={homeRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
          portfolioRef={portfolioRef}
        /> */}
        <AnimatePresence>
          <RoutesWithAnimation />
        </AnimatePresence>
      </LocationProvider>
    </HashRouter>
  );
}

export default App;
