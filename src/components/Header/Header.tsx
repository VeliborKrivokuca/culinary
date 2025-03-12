// src/components/Header.tsx
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useCart } from "../../contexts/CartContext";
import logo from "../../assets/restaurant-logo.png";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.css";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const leftVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const rightVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <motion.header
      className={`fixed z-50 transition-all duration-300 
        ${
          isScrolled
            ? "top-5 scrolled right-4 bg-amber-900 shadow-lg py-2 rounded-xl"
            : "top-0 left-0 right-0 bg-black/50 py-4"
        }
      `}
    >
      <div>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Left Side: Logo */}
          <motion.div
            className="flex items-center"
            variants={leftVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <button onClick={() => navigate("/")} className="cursor-pointer">
              <img src={logo} alt="Logo" className="mr-2 w-50 logo" />
            </button>
          </motion.div>

          {/* Right Side: Navigation & Controls */}
          <motion.div
            className="flex items-center space-x-4"
            variants={rightVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          >
            <nav className="hidden md:block">
              <ul className="flex space-x-8">
                <li className="nav-link">
                  <button
                    onClick={() => navigate("/")}
                    className="flex items-center text-white hover:text-amber-300 transition-colors"
                  >
                    {t("nav.home")}
                  </button>
                </li>
                <li className="nav-link">
                  <button
                    onClick={() => navigate("/full-menu")}
                    className="flex items-center text-white hover:text-amber-300 transition-colors"
                  >
                    {t("nav.menu")}
                  </button>
                </li>
                <li className="nav-link">
                  <button
                    onClick={() => navigate("/about")}
                    className="flex items-center text-white hover:text-amber-300 transition-colors"
                  >
                    {t("nav.about")}
                  </button>
                </li>
                <li className="nav-link">
                  <button
                    onClick={() => navigate("/contact")}
                    className="flex items-center text-white hover:text-amber-300 transition-colors"
                  >
                    {t("nav.contact")}
                  </button>
                </li>
              </ul>
            </nav>

            <button
              className="relative text-white"
              onClick={() => navigate("/cart")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.2 6m0 0a1 1 0 001 1h12a1 1 0 001-1m-14.2 0L5 5"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-amber-600 rounded-full text-xs w-4 h-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            <div className="hidden md:flex space-x-2 nav-">
              <button
                onClick={() => changeLanguage("en")}
                className={`px-2 py-1 rounded ${
                  i18n.language === "en"
                    ? "bg-amber-600 text-white"
                    : "text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("sr")}
                className={`px-2 py-1 rounded ${
                  i18n.language === "sr"
                    ? "bg-amber-600 text-white"
                    : "text-white"
                }`}
              >
                SR
              </button>
            </div>

            <button
              onClick={() => navigate("/reserve-table")}
              className="hidden md:block bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-6 rounded-full transition-colors"
            >
              {t("buttons.reserveTable")}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Full Screen Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 w-full h-screen header-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative text-center">
                {/* Close Icon */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="fixed top-4 right-4 text-white text-3xl p-7"
                >
                  &times;
                </button>
                <ul className="space-y-8 text-white text-2xl">
                  <li>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        navigate("/");
                      }}
                      className="hover:text-amber-300 transition-colors"
                    >
                      {t("nav.home")}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        navigate("/full-menu");
                      }}
                      className="hover:text-amber-300 transition-colors"
                    >
                      {t("nav.menu")}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        navigate("/about");
                      }}
                      className="hover:text-amber-300 transition-colors"
                    >
                      {t("nav.about")}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        navigate("/contact");
                      }}
                      className="hover:text-amber-300 transition-colors"
                    >
                      {t("nav.contact")}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        navigate("/reserve-table");
                      }}
                      className="hover:text-amber-300 transition-colors"
                    >
                      {t("buttons.reserveTable")}
                    </button>
                  </li>

                  <button
                    onClick={() => changeLanguage("en")}
                    className={`px-2 py-1 rounded ${
                      i18n.language === "en"
                        ? "bg-amber-600 text-white"
                        : "text-white"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => changeLanguage("sr")}
                    className={`px-2 py-1 rounded ${
                      i18n.language === "sr"
                        ? "bg-amber-600 text-white"
                        : "text-white"
                    }`}
                  >
                    SR
                  </button>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
