import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import WasteItems from "./pages/WasteItems";
import WasteDetails from "./pages/WasteDetails";
import Categories from "./pages/Categories";
import Tips from "./pages/Tips";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/waste" element={<WasteItems />} />
          <Route path="/waste/:id" element={<WasteDetails />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
