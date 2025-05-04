import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import About from "./components/about/About";
// import PriceCalculator from "./components/PriceCalculator/PriceCalculator";
// import WhatsAppForm from "./components/form/WhatsAppForm";
import Footer from "./components/Footer/Footer";
// import Gallery from "./components/library/Gallery";
// import CategoryPage from "./components/library/CategoryPage";
const App = () => {
  return (
    <Router>
      {/* Navigation bar stays visible on all pages */}
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}></Route>

      </Routes>

      {/* Footer stays visible on all pages */}
      <Footer />
    </Router>
  );
};

export default App;
