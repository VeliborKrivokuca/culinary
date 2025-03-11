import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FullMenu from "./pages/FullMenu";
import Cart from "./pages/Cart";
import ReserveTable from "./pages/ReserveTable";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./contexts/CartContext";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./i18n";
import "./App.css";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      const handleLoad = () => setLoading(false);
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <CartProvider>
      <Router>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          // Optional custom styling can be added here
        />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/full-menu" element={<FullMenu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/reserve-table" element={<ReserveTable />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
