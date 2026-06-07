import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { FloatingCart } from './components/FloatingCart';
import { SideCart } from './components/SideCart';
import { ChatWidget } from './components/ChatWidget';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingCart />
        <SideCart />
        <ChatWidget />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
