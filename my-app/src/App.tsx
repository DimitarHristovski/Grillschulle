import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import MeatDetails from './pages/MeatDetails';
import QuoteDrawer from './components/QuoteDrawer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<MeatDetails />} />
      </Routes>
      <QuoteDrawer />
    </div>
  );
}

export default App;