// src/pages/Contact.tsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import restaurantHero from "../assets/restaurant-hero.png";
import Lottie from "lottie-react";
import contactAnimation from "../assets/contact.json";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send data to your backend if needed.
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <Header />
      {/* Hero Section */}
      <motion.section
        className="relative pt-24 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${restaurantHero})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-amber-900 opacity-60"></div>
        <div className="relative flex items-center justify-center h-72 md:h-96">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-amber-50 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t("contact.title") || "Contact Us"}
          </motion.h1>
        </div>
      </motion.section>

      <motion.main
        className="bg-amber-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 py-16">
          <motion.p
            className="text-center text-amber-900 text-xl mb-12 font-sans"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            {t("contact.subtitle") ||
              "We'd love to hear from you. Please fill out the form below."}
          </motion.p>

          <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="max-w-xl w-full bg-white bg-opacity-90 backdrop-blur-sm p-8 rounded-lg shadow-xl"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name Field with User Icon */}
                <motion.div
                  className="relative"
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-700">
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
                        d="M5.121 17.804A10 10 0 1118.88 6.196a10 10 0 01-13.758 11.608z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t("contact.name") || "Your Name"}
                    className="pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 w-full"
                    required
                  />
                </motion.div>
                {/* Email Field with Mail Icon */}
                <motion.div
                  className="relative"
                  variants={inputVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-700">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t("contact.email") || "Your Email"}
                    className="pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 w-full"
                    required
                  />
                </motion.div>
              </div>
              <motion.div
                className="relative mb-6"
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-700">
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder={t("contact.subject") || "Subject"}
                  className="pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 w-full"
                  required
                />
              </motion.div>
              <motion.div
                className="relative mb-6"
                variants={inputVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              >
                <span className="absolute top-3 left-0 flex items-start pl-3 text-amber-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h10M7 12h4m1 8h3a2 2 0 002-2V7a2 2 0 00-2-2h-3m-4 0H7a2 2 0 00-2 2v11a2 2 0 002 2h3"
                    />
                  </svg>
                </span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t("contact.message") || "Your Message"}
                  className="pl-10 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 w-full h-40"
                  required
                />
              </motion.div>
              <motion.button
                type="submit"
                className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 rounded-lg transition-colors"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              >
                {t("contact.send") || "Send Message"}
              </motion.button>
            </motion.form>

            {/* Lottie Animation Next to the Form */}
            <motion.div
              className="max-w-md w-full"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <Lottie animationData={contactAnimation} loop={true} />
            </motion.div>
          </div>

          {submitted && (
            <motion.div
              className="max-w-xl mx-auto bg-white bg-opacity-95 p-8 rounded-lg shadow-lg text-center mt-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-bold text-amber-900 mb-4">
                {t("contact.thankYou") || "Thank You!"}
              </h2>
              <p className="text-xl text-gray-700 mb-6">
                {t("contact.response") ||
                  "Your message has been sent. We will get back to you shortly."}
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-2 px-6 rounded-full transition-colors"
              >
                {t("contact.sendAnother") || "Send Another Message"}
              </button>
            </motion.div>
          )}
        </div>
      </motion.main>
      <Footer />
    </>
  );
};

export default Contact;
