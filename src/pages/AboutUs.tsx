// src/pages/AboutUs.tsx
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import restaurantHero from "../assets/restaurant-hero.png";
import restaurantLogo from "../assets/restaurant-logo.png";
import "../styles/AboutUs.css";

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

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
        {/* Amber overlay similar to Contact page */}
        <div className="absolute inset-0 bg-amber-900 opacity-60"></div>
        <div className="relative flex items-center justify-center h-72 md:h-96">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-amber-50 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t("about.heading") || "Our Story"}
          </motion.h1>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.main
        className="bg-amber-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              className="w-full md:w-1/2"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src={restaurantLogo}
                alt="Restaurant Logo"
                className="w-100 object-contain bg-amber-900 rounded-lg p-10"
              />
            </motion.div>
            <motion.div
              className="w-full md:w-1/2"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-bold text-amber-900 mb-4">
                {t("about.heading") || "Our Culinary Journey"}
              </h2>
              <p className="text-gray-700 mb-4">
                {t("about.paragraph1") ||
                  "Founded in 2015, SavoryHaven has been serving exceptional cuisine that combines traditional recipes with modern culinary innovations. Our passion for food and dedication to quality drive every dish we create."}
              </p>
              <p className="text-gray-700">
                {t("about.paragraph2") ||
                  "Our team of experienced chefs and warm staff ensures that every visit is a memorable experience. Whether you are joining us for a casual lunch or a special dinner, we invite you to indulge in our authentic culinary artistry."}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.main>
      <Footer />
    </>
  );
};

export default AboutUs;
