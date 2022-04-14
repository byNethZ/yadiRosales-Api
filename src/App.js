import "./App.css";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Menu from "./shared/Menu";
import OpenHouses from "./components/openhouses/OpenHouses";
import Admin from "./components/admin/Admin";

import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={<OpenHouses />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
