// src/pages/ReserveTable.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import TableMap from "../components/Table/TableMap";
import TableBookingModal from "../components/Table/TableBookingModal";
import restaurantHero from "../assets/restaurant-hero.png";
import Lottie from "lottie-react";
import reservationPerson from "../assets/reservation-person.json";
import "../styles/custom-toast.css";
import { useTranslation } from "react-i18next";

const ReserveTable: React.FC = () => {
  const { t } = useTranslation();
  const [selectedTable, setSelectedTable] = useState<number | null>(null);

  const handleTableSelect = (tableId: number) => {
    setSelectedTable(tableId);
  };

  const closeModal = () => {
    setSelectedTable(null);
  };

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
        <div className="absolute inset-0 bg-amber-900 opacity-60"></div>
        <div className="relative flex flex-col items-center justify-center h-[20rem]">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-amber-50 text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {t("reserveTable.heroTitle")}
          </motion.h1>
        </div>
      </motion.section>

      <motion.main
        className="min-h-screen bg-amber-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 py-16">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-center text-amber-900 text-xl mb-12 font-sans"
          >
            {t("reserveTable.instruction")}
          </motion.p>
          <div className="bg-white rounded-xl shadow-lg p-8 block md:block lg:flex border-2">
            <TableMap onSelectTable={handleTableSelect} />
            <motion.div
              className="end-of-div-left"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              <Lottie animationData={reservationPerson} loop={true} />
            </motion.div>
          </div>
          <p className="text-amber-900 mt-10">
            {t("reserveTable.description")}
          </p>
        </div>
      </motion.main>

      <Footer />
      {selectedTable !== null && (
        <TableBookingModal tableId={selectedTable} onClose={closeModal} />
      )}
    </>
  );
};

export default ReserveTable;
