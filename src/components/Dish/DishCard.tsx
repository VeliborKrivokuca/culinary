import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Dish } from "../../types/Dish";

export interface DishCardProps {
  dish: Dish;
  addToCart: (dish: Dish) => void;
}

const DishCard: React.FC<DishCardProps> = ({ dish, addToCart }) => {
  const { t } = useTranslation();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(dish);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // Hide overlay after 2 seconds
  };

  return (
    <div className="relative bg-amber-50 rounded-lg overflow-hidden shadow-md">
      <div
        className="h-48 bg-center bg-cover"
        style={{ backgroundImage: `url('${dish.image}')` }}
      ></div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold text-amber-900">
            {t(dish.titleKey)}
          </h3>
          <span className="text-amber-700 font-bold">${dish.price}</span>
        </div>
        <p className="text-gray-600 mb-4">{t(dish.descriptionKey)}</p>
        <button
          onClick={handleAdd}
          className="w-full bg-amber-700 hover:bg-amber-800 text-white font-semibold py-2 rounded-lg transition-colors relative z-10"
        >
          {t("buttons.addToCart")}
        </button>
        <AnimatePresence>
          {added && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.5 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </motion.svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DishCard;
