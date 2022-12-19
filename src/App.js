import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./shared/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useEffect, useState } from "react";
import Catalogue from "./components/Catalogue/Catalogue";
import Property from "./components/Property/Property";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}


function App() {
  const { height, width } = useWindowDimensions();

  return (
    <div className="App">
      <Router>
      <Header width={width} height={height} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:gallery/:type/:feature/:value" element={<Catalogue />} />
          <Route path="/:gallery/:feature" element={<Catalogue />} />
          <Route path="/property/:id" element={<Property />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
