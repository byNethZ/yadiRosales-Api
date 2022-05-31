import "./App.css";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Menu from "./shared/Menu";
import OpenHouses from "./components/openhouses/OpenHouses";
import Residential from "./components/properties/Residential";
import Rental from "./components/properties/Rental";
import Multifamily from "./components/properties/Multifamily";
import Lots from "./components/properties/Lots";
import Admin from "./components/admin/Admin";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./components/properties/Content";
import Dropdown from "./shared/Dropdown";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path="/" element={<Residential />} />
          <Route path="/multifamily" element={<Multifamily />} />
          <Route path="/lots" element={<Lots />} />
          <Route path="/rental" element={<Rental />} />
          <Route path="/property" element={<Content />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

/* 
      <Header />
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<OpenHouses />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/multifamily" element={<Multifamily />} />
          <Route path="/lots" element={<Lots />} />
          <Route path="/rental" element={<Rental />} />
        </Routes>
      </Router>
      <Footer />

*/
