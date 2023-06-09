// import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import Header from "./components/Header";
// import LocationProvider from "./components/locationProvider";
// import RoutesWithAnimation from "./components/routesWithAnimation";
// import { Home } from "./components/Home";
// import { About } from "./components/About";
// import { Contact } from "./components/Contact";
// import { motion, AnimatePresence } from "framer-motion";
// import React from "react";
// import "./App.css";

// function App() {
//   return (
//     <BrowserRouter>
//       {/* <AnimatePresence> */}
//       <Header />
//       {/* <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/About" element={<About />} />
//           <Route path="/Contact" element={<Contact />} />
//         </Routes>
//       </AnimatePresence> */}
//       <Header />
//       <LocationProvider>
//         <RoutesWithAnimation />
//       </LocationProvider>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter } from "react-router-dom";
import Header from "./pages/Header";
import LocationProvider from "./components/locationProvider";
import RoutesWithAnimation from "./components/routesWithAnimation";
import { AnimatePresence } from "framer-motion";
import React from "react";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <LocationProvider>
        <AnimatePresence>
          <RoutesWithAnimation />
        </AnimatePresence>
      </LocationProvider>
    </BrowserRouter>
  );
}

export default App;
