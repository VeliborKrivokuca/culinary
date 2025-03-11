import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css";

const Cart: React.FC = () => {
  const { t } = useTranslation();
  const {
    cartItems,
    addToCart,
    removeFromCart,
    decrementFromCart,
    totalPrice,
    clearCart,
  } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <motion.div
        className="pt-24 cart-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <section id="cart" className="py-16">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl font-bold text-amber-900 mb-6 text-center"
            >
              {t("cart.heading")}
            </motion.h2>
            {cartItems.length === 0 ? (
              <p className="text-center text-gray-600">{t("cart.empty")}</p>
            ) : (
              <>
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="flex flex-col md:flex-row items-center justify-between bg-white p-4 rounded shadow"
                    >
                      <div className="flex flex-col md:flex-row items-center w-full space-y-4 md:space-y-0 md:space-x-4">
                        <div
                          className="w-16 h-16 bg-center bg-cover rounded flex-shrink-0"
                          style={{ backgroundImage: `url('${item.image}')` }}
                        ></div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-bold text-amber-900">
                            {t(item.titleKey)}
                          </h3>
                          <p className="text-gray-600">
                            {t("cart.quantity")}: {item.quantity}
                          </p>
                        </div>
                        {/* Controls grouped together */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => decrementFromCart(item.id)}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-1 px-2 rounded"
                          >
                            -
                          </button>
                          <span className="font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => addToCart(item)}
                            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-1 px-2 rounded"
                          >
                            +
                          </button>
                          {/* Delete icon placed inline with plus/minus */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="bg-amber-500 hover:bg-red-600 text-white font-bold p-2 rounded hover:shadow-lg"
                            title={t("cart.remove")}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4m-4 0a1 1 0 00-1 1v1h6V4a1 1 0 00-1-1m-4 0h4"
                              />
                            </svg>
                          </button>
                          <span className="text-amber-700 font-bold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 flex flex-col md:flex-row justify-end items-center space-y-4 md:space-y-0 md:space-x-4">
                  <div className="text-xl font-bold text-amber-900">
                    {t("cart.total")}: ${totalPrice().toFixed(2)}
                  </div>
                  <button
                    onClick={clearCart}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
                  >
                    {t("cart.clear")}
                  </button>
                  <button
                    onClick={() => navigate("/checkout")}
                    className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded"
                  >
                    {t("cart.checkout")}
                  </button>
                </div>
              </>
            )}
          </div>
        </section>
      </motion.div>
      <Footer />
    </>
  );
};

export default Cart;
