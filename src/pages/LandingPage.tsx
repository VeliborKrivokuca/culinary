// src/pages/LandingPage.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import DishCard from "../components/Dish/DishCard";
import FeatureCard from "../components/FeatureCard/FeatureCard";
import { Feature } from "../types/Feature";
import { Dish } from "../types/Dish";
import AnimatedSpoonFork from "../components/AnimatedLogo/AnimatedSpoonFork";
import coffeeCupAnimation from "../assets/coffee-cup.json";
import Lottie from "lottie-react";
import phoneMenuAnimation from "../assets/phone-menu.json";
import vloggerAnimation from "../assets/vlogger.json";
import foodDeliveryAnimation from "../assets/food-delivery.json";
import "../styles/LandingPage.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext"; // Import the cart context

const LandingPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { addToCart } = useCart(); // Get the addToCart function

  // Features data using larger Lottie animations for icons
  const features: Feature[] = [
    {
      id: 1,
      icon: (
        <div style={{ width: 200, height: 200 }}>
          <Lottie
            animationData={phoneMenuAnimation}
            loop={true}
            className="w-[150px]"
          />
        </div>
      ),
      titleKey: "features.farmToTable.title",
      descriptionKey: "features.farmToTable.description",
    },
    {
      id: 2,
      icon: (
        <div style={{ width: 200, height: 200 }}>
          <Lottie
            animationData={vloggerAnimation}
            loop={true}
            className="w-[150px]"
          />
        </div>
      ),
      titleKey: "features.artisanChefs.title",
      descriptionKey: "features.artisanChefs.description",
    },
    {
      id: 3,
      icon: (
        <div style={{ width: 200, height: 200 }}>
          <Lottie
            animationData={foodDeliveryAnimation}
            loop={true}
            className="w-[150px]"
          />
        </div>
      ),
      titleKey: "features.cozyAtmosphere.title",
      descriptionKey: "features.cozyAtmosphere.description",
    },
  ];

  // Dishes data (for menu preview)
  const dishes: Dish[] = [
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1663036447682-8f0d918adbed?q=80&w=3687&auto=format&fit=crop",
      titleKey: "menu.lambDish.title",
      price: 34,
      descriptionKey: "menu.lambDish.description",
      tagKey: "menu.tags.chefsSpecial",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1513442542250-854d436a73f2?q=80&w=3114&auto=format&fit=crop",
      titleKey: "menu.risottoDish.title",
      price: 28,
      descriptionKey: "menu.risottoDish.description",
      tagKey: "menu.tags.vegetarian",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1543826173-70651703c5a4?q=80&w=3445&auto=format&fit=crop",
      titleKey: "menu.salmonDish.title",
      price: 32,
      descriptionKey: "menu.salmonDish.description",
      tagKey: "menu.tags.glutenFree",
    },
  ];

  return (
    <>
      <Header />
      <motion.section
        id="home"
        className="h-screen bg-gradient-to-b from-black to-amber-900 flex items-center relative pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 opacity-30 bg-center bg-cover restaurant-hero"></div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
          {/* Left side: Hero Text */}
          <div className="flex-1 text-center md:text-left md:ml-12">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4 lg:mt-0 mt-24"
            >
              {t("hero.title1")}{" "}
              <span className="text-amber-400">{t("hero.titleHighlight")}</span>
              <br />
              {t("hero.title2")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl text-gray-200 mb-8 max-w-lg"
            >
              {t("hero.subtitle")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col md:flex-row gap-4 justify-center md:justify-start flex md:flex lg:block"
            >
              <button className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 rounded-lg transition-colors py-3 block mb-3">
                {t("buttons.viewMenu")}
              </button>
              <button
                className="btn-hover bg-transparent border-2 border-white text-white hover:bg-white hover:text-amber-900 font-semibold py-3 px-8 rounded-lg transition-colors"
                onClick={() => navigate("/reserve-table")}
              >
                {t("buttons.bookTable")}
                <div className="text-center animated-icon">
                  <AnimatedSpoonFork />
                </div>
              </button>
            </motion.div>
          </div>
          {/* Right side: Animated SVG */}
          <Lottie animationData={coffeeCupAnimation} loop={true} />
        </div>
      </motion.section>

      <motion.section
        id="features"
        className="py-16 bg-amber-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold text-amber-900 mb-2">
              {t("features.heading")}
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="menu"
        className="py-16 bg-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-2">
              {t("menu.heading")}
            </h2>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("menu.subheading")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dishes.map((dish) => (
              // Now using the real addToCart function from context
              <DishCard key={dish.id} dish={dish} addToCart={addToCart} />
            ))}
          </div>
          <div className="text-center mt-12">
            <button
              className="bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              onClick={() => navigate("/full-menu")}
            >
              {t("buttons.fullMenu")}
            </button>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="py-16 bg-amber-900 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t("about.heading")}</h2>
              <p className="mb-4">{t("about.paragraph1")}</p>
              <p className="mb-6">{t("about.paragraph2")}</p>
              <button
                className="bg-amber-100 hover:bg-white text-amber-900 font-semibold py-3 px-8 rounded-lg transition-colors"
                onClick={() => navigate("/about")}
              >
                {t("buttons.ourStory")}
              </button>
            </div>
            <div
              className="h-64 bg-center bg-cover rounded-lg mt-12"
              style={{
                backgroundImage: `url('https://www.restoranibeograd.com/storage/restaurant/interior/76/splav_restoran_amphora_4.jpg')`,
              }}
            ></div>
          </div>
        </div>
      </motion.section>
      <Footer />
    </>
  );
};

export default LandingPage;
