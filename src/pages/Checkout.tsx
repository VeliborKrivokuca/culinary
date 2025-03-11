// src/pages/Checkout.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useCart } from "../contexts/CartContext";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";

// Importing Lottie animations
import checkoutAnimation from "../assets/checkout.json";
import creditCardAnimation from "../assets/credit-card.json";
import paypalAnimation from "../assets/paypal.json";
import cashAnimation from "../assets/cash.json";
import successfulCheckoutAnimation from "../assets/successful-checkout.json";

// Custom Select Dropdown Component
const CustomSelect: React.FC<{
  options: string[];
  value: string;
  onChange: (value: string) => void;
}> = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 border border-gray-300 rounded bg-white flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
      >
        <span>{value}</span>
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1">
          {options.map((option) => (
            <li
              key={option}
              className={`p-3 cursor-pointer hover:bg-amber-100 transition-colors ${
                value === option ? "bg-amber-200" : ""
              }`}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Checkout: React.FC = () => {
  const { t } = useTranslation();
  const { cartItems, totalPrice, clearCart } = useCart();
  const [currentStep, setCurrentStep] = useState(1);

  // Form state for customer details
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  // Form state for payment details
  const [paymentInfo, setPaymentInfo] = useState({
    method: "Credit Card",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  // For final confirmation
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleCustomerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerInfo({ ...customerInfo, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const validateStep = () => {
    if (currentStep === 1) {
      // Validate customer info fields
      if (
        !customerInfo.name ||
        !customerInfo.email ||
        !customerInfo.phone ||
        !customerInfo.address
      ) {
        setError(
          t("checkout.fillCustomerDetails") ||
            "Please fill in all customer details."
        );
        return false;
      }
    } else if (currentStep === 2) {
      // Validate payment details if Credit Card is chosen
      if (paymentInfo.method === "Credit Card") {
        if (
          !paymentInfo.cardNumber ||
          !paymentInfo.expiry ||
          !paymentInfo.cvv
        ) {
          setError(
            t("checkout.fillPaymentDetails") ||
              "Please fill in all payment details."
          );
          return false;
        }
      }
    }
    setError("");
    return true;
  };

  const nextStep = () => {
    if (validateStep() && currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handlePlaceOrder = () => {
    if (!validateStep()) return;
    // Generate a random order number (for demo)
    const orderNum = "ORD-" + Math.floor(Math.random() * 1000000);
    setOrderNumber(orderNum);
    setOrderPlaced(true);
    clearCart();
  };

  // Variants for step transitions
  const stepVariants = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  };

  // Determine payment animation based on selected method
  const paymentAnimationData =
    paymentInfo.method === "Credit Card"
      ? creditCardAnimation
      : paymentInfo.method === "PayPal"
      ? paypalAnimation
      : cashAnimation;

  // Thank You component once order is placed
  const ThankYou = () => {
    const [showSuccessAnimation, setShowSuccessAnimation] = useState(true);
    return (
      <motion.div
        className="bg-white p-8 rounded-lg shadow-md border border-gray-200 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {showSuccessAnimation && (
          <div className="mb-4">
            <Lottie
              animationData={successfulCheckoutAnimation}
              loop={false}
              // onComplete callback will hide the animation once done.
              onComplete={() => setShowSuccessAnimation(false)}
              className="w-64 h-64 mx-auto"
            />
          </div>
        )}
        <h2 className="text-3xl font-bold text-amber-900 mb-4">
          {t("checkout.thankYou") || "Thank You for Your Order!"}
        </h2>
        <p className="text-xl text-gray-700 mb-4">
          {t("checkout.orderNumber") || "Your order number is:"} {orderNumber}
        </p>
        <button
          onClick={() => {
            navigate("/full-menu");
          }}
          className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded transition-colors"
        >
          {t("checkout.continueShopping") || "Continue Shopping"}
        </button>
      </motion.div>
    );
  };

  return (
    <>
      <Header />
      <motion.div
        className="pt-24 min-h-screen bg-gradient-to-br from-amber-50 to-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 py-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold text-center text-amber-900 mb-8"
          >
            {t("checkout.title") || "Checkout"}
          </motion.h1>
          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-red-600 mb-4"
            >
              {error}
            </motion.p>
          )}
          {orderPlaced ? (
            <ThankYou />
          ) : (
            <AnimatePresence mode="wait">
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="bg-white bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg shadow-md border border-gray-200 mb-8"
                >
                  <h2 className="text-2xl font-bold text-amber-900 mb-4">
                    {t("checkout.customerDetails") || "Customer Details"}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left: Lottie animation for checkout */}
                    <div className="flex items-center justify-center">
                      <Lottie
                        animationData={checkoutAnimation}
                        loop={true}
                        className="w-64 h-64"
                      />
                    </div>
                    {/* Right: Customer details form */}
                    <div className="grid grid-cols-1 gap-4 self-start">
                      <input
                        type="text"
                        name="name"
                        value={customerInfo.name}
                        onChange={handleCustomerChange}
                        placeholder={t("checkout.name") || "Name"}
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      />
                      <input
                        type="email"
                        name="email"
                        value={customerInfo.email}
                        onChange={handleCustomerChange}
                        placeholder={t("checkout.email") || "Email"}
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={customerInfo.phone}
                        onChange={handleCustomerChange}
                        placeholder={t("checkout.phone") || "Phone"}
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      />
                      <input
                        type="text"
                        name="address"
                        value={customerInfo.address}
                        onChange={handleCustomerChange}
                        placeholder={t("checkout.address") || "Address"}
                        className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end space-x-4">
                    <button
                      onClick={nextStep}
                      className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded transition-colors"
                    >
                      {t("checkout.next") || "Next"}
                    </button>
                  </div>
                </motion.div>
              )}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="bg-white bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg shadow-md border border-gray-200 mb-8"
                >
                  <h2 className="text-2xl font-bold text-amber-900 mb-4">
                    {t("checkout.paymentDetails") || "Payment Details"}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left: Lottie animation based on payment method */}
                    <div className="flex items-center justify-center">
                      <Lottie
                        animationData={paymentAnimationData}
                        loop={true}
                        className="w-64 h-64"
                      />
                    </div>
                    {/* Right: Payment details form */}
                    <div className="grid grid-cols-1 gap-4 self-start">
                      <CustomSelect
                        options={["Credit Card", "PayPal", "Cash"]}
                        value={paymentInfo.method}
                        onChange={(value) =>
                          setPaymentInfo({ ...paymentInfo, method: value })
                        }
                      />
                      {paymentInfo.method === "Credit Card" ? (
                        <div className="space-y-4">
                          <input
                            type="text"
                            name="cardNumber"
                            value={paymentInfo.cardNumber}
                            onChange={handlePaymentChange}
                            placeholder={
                              t("checkout.cardNumber") || "Card Number"
                            }
                            className="p-3 border border-gray-300 rounded block w-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                          />
                          <input
                            type="text"
                            name="expiry"
                            value={paymentInfo.expiry}
                            onChange={handlePaymentChange}
                            placeholder={
                              t("checkout.expiry") || "Expiry (MM/YY)"
                            }
                            className="p-3 border border-gray-300 rounded block w-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                          />
                          <input
                            type="text"
                            name="cvv"
                            value={paymentInfo.cvv}
                            onChange={handlePaymentChange}
                            placeholder={t("checkout.cvv") || "CVV"}
                            className="p-3 border border-gray-300 rounded block w-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="mt-6 flex justify-between">
                    <button
                      onClick={prevStep}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition-colors"
                    >
                      {t("checkout.previous") || "Previous"}
                    </button>
                    <button
                      onClick={nextStep}
                      className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded transition-colors"
                    >
                      {t("checkout.next") || "Next"}
                    </button>
                  </div>
                </motion.div>
              )}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  variants={stepVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="bg-white bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg shadow-md border border-gray-200 mb-8"
                >
                  <h2 className="text-2xl font-bold text-amber-900 mb-4">
                    {t("checkout.reviewOrder") || "Review Your Order"}
                  </h2>
                  {/* Add checkout animation inside the review order form */}
                  <div className="mb-4 flex justify-center">
                    <Lottie
                      animationData={checkoutAnimation}
                      loop={true}
                      className="w-32 h-32"
                    />
                  </div>
                  <div className="mb-4">
                    <p className="font-bold">
                      {t("checkout.customerDetails") || "Customer Details"}:
                    </p>
                    <p>{customerInfo.name}</p>
                    <p>{customerInfo.email}</p>
                    <p>{customerInfo.phone}</p>
                    <p>{customerInfo.address}</p>
                  </div>
                  <div className="mb-4">
                    <p className="font-bold">
                      {t("checkout.paymentDetails") || "Payment Details"}:
                    </p>
                    <p>{paymentInfo.method}</p>
                    {paymentInfo.method === "Credit Card" && (
                      <>
                        <p>
                          {t("checkout.cardNumber") || "Card Number"}: **** ****
                          **** {paymentInfo.cardNumber.slice(-4)}
                        </p>
                        <p>
                          {t("checkout.expiry") || "Expiry"}:{" "}
                          {paymentInfo.expiry}
                        </p>
                      </>
                    )}
                  </div>
                  <div className="mb-4">
                    <p className="font-bold">
                      {t("checkout.orderSummary") || "Order Summary"}:
                    </p>
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex justify-between">
                        <span>
                          {item.quantity} x {t(item.titleKey)}
                        </span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="flex justify-between font-bold mt-2">
                      <span>{t("checkout.total") || "Total"}:</span>
                      <span>${totalPrice().toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <button
                      onClick={prevStep}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded transition-colors"
                    >
                      {t("checkout.previous") || "Previous"}
                    </button>
                    <button
                      onClick={handlePlaceOrder}
                      className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded transition-colors"
                    >
                      {t("checkout.placeOrder") || "Place Order"}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Checkout;
