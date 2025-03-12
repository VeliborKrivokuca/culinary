// src/pages/FullMenu.tsx
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Dish } from "../types/Dish";
import { useCart } from "../contexts/CartContext";
import DishCard from "../components/Dish/DishCard";
import restaurantHero from "../assets/restaurant-hero.png";

const FullMenu: React.FC = () => {
  const { t } = useTranslation();
  const { addToCart } = useCart();

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
            className="text-4xl md:text-5xl font-bold text-amber-50 text-center px-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t("menu.fullMenuHeading") || "Full Menu"}
          </motion.h1>
        </div>
      </motion.section>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <section id="full-menu" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-bold text-amber-900 mb-2">
                {t("menu.fullMenuHeading")}
              </h2>
              <div className="w-24 h-1 bg-amber-600 mx-auto mb-4"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("menu.fullMenuSubheading")}
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {dishes.map((dish) => (
                <DishCard key={dish.id} dish={dish} addToCart={addToCart} />
              ))}
            </div>
          </div>
        </section>
      </motion.div>
      <Footer />
    </>
  );
};

export default FullMenu;
