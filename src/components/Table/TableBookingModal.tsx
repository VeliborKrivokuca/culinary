// src/components/Table/TableBookingModal.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";

interface TableBookingModalProps {
  tableId: number;
  onClose: () => void;
}

const TableBookingModal: React.FC<TableBookingModalProps> = ({
  tableId,
  onClose,
}) => {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);

  // Generate next 14 days
  const getNextDays = (num: number): Date[] => {
    const dates: Date[] = [];
    for (let i = 0; i < num; i++) {
      const d = new Date();
      d.setDate(d.getDate() + i);
      dates.push(d);
    }
    return dates;
  };

  const days = getNextDays(14);

  useEffect(() => {
    if (selectedDate) {
      // Simulated available times (could be replaced by actual data)
      setAvailableTimes([
        "12:00 PM",
        "12:30 PM",
        "1:00 PM",
        "1:30 PM",
        "2:00 PM",
        "7:00 PM",
        "7:30 PM",
        "8:00 PM",
        "8:30 PM",
        "9:00 PM",
      ]);
      setSelectedTime(null);
    } else {
      setAvailableTimes([]);
    }
  }, [selectedDate]);

  const handleConfirm = () => {
    if (selectedDate && selectedTime) {
      toast.success(
        t("reserveTable.toastSuccess", {
          tableId,
          date: selectedDate.toLocaleDateString(),
          time: selectedTime,
        })
      );
      onClose();
    } else {
      toast.error(t("reserveTable.toastError"));
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-lg p-6 w-11/12 md:w-3/4 lg:w-1/2"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-amber-900">
            {t("reserveTable.modalTitle", { tableId })}
          </h2>
          <p className="mb-4 text-gray-600">
            {t("reserveTable.modalInstruction")}
          </p>
          {/* Calendar */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {days.map((day, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(day)}
                className={`p-2 border rounded transition-colors ${
                  selectedDate &&
                  day.toDateString() === selectedDate.toDateString()
                    ? "bg-amber-700 text-white border-amber-700"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                <div className="text-sm">
                  {day.toLocaleDateString("en-US", { weekday: "short" })}
                </div>
                <div className="text-xs">{day.getDate()}</div>
              </button>
            ))}
          </div>
          {selectedDate && (
            <div className="mb-4">
              <h3 className="font-bold text-gray-800 mb-2">
                {t("reserveTable.availableTimes")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {availableTimes.map((time, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedTime(time)}
                    className={`px-3 py-1 border rounded transition-colors ${
                      selectedTime === time
                        ? "bg-amber-700 text-white border-amber-700"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="flex flex-col md:flex-row justify-end items-center space-y-4 md:space-y-0 md:space-x-4">
            <button
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded"
            >
              {t("reserveTable.cancel")}
            </button>
            <button
              onClick={handleConfirm}
              className="bg-amber-700 hover:bg-amber-800 text-white font-semibold py-2 px-4 rounded"
            >
              {t("reserveTable.confirmReservation")}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TableBookingModal;
