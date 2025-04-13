import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import MeatDetails from './pages/MeatDetails';
import QuoteDrawer from './components/QuoteDrawer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <Navbar />
      <div className="pt-16"> {/* Added padding-top to prevent content overlap with navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<MeatDetails />} />
        </Routes>
      </div>
      <QuoteDrawer />
      <Footer />
    </div>
  );
}

export default App;