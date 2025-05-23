import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Catalog from "../src/pages/Catalog";
import MeatDetails from "./pages/MeatDetails";
import QuoteDrawer from "./components/quote/QuoteDrawer";
import About from "./pages/About";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <Navbar />
      <div className="pt-16">
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<MeatDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <QuoteDrawer />
      <Footer />
    </div>
  );
}

export default App;
