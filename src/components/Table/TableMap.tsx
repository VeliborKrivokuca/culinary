import React from "react";
import "./TableMap.css";

interface TableMapProps {
  onSelectTable: (tableId: number) => void;
}

const tables = [
  { id: 1, top: "15%", left: "20%", seats: 4 },
  { id: 2, top: "15%", left: "50%", seats: 2 },
  { id: 3, top: "15%", left: "80%", seats: 6 },
  { id: 4, top: "45%", left: "20%", seats: 4 },
  { id: 5, top: "45%", left: "50%", seats: 2 },
  { id: 6, top: "45%", left: "80%", seats: 6 },
  { id: 7, top: "75%", left: "35%", seats: 4 },
  { id: 8, top: "75%", left: "65%", seats: 2 },
];

const TableMap: React.FC<TableMapProps> = ({ onSelectTable }) => {
  // Render small dots around the outer circle based on the number of seats available
  const renderSeatDots = (seats: number) => {
    const dots = [];
    const radius = 35; // Radius for dot placement (adjustable)
    const dotSize = 5; // Size of each dot in pixels
    const center = 40; // Center of the outer circle (80px / 2)
    for (let i = 0; i < seats; i++) {
      const angle = (2 * Math.PI * i) / seats;
      // Calculate positions so that dots are evenly distributed around the circle
      const left = center + radius * Math.cos(angle) - dotSize / 2;
      const top = center + radius * Math.sin(angle) - dotSize / 2;
      dots.push(
        <span
          key={i}
          style={{
            position: "absolute",
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            borderRadius: "50%",
            backgroundColor: "#D97706", // Amber color
            left: `${left}px`,
            top: `${top}px`,
          }}
        />
      );
    }
    return dots;
  };

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg shadow-md border border-gray-200 restaurant-floor border-amber-500">
      {tables.map((table) => (
        <div
          key={table.id}
          style={{
            top: table.top,
            left: table.left,
            transform: "translate(-50%, -50%)",
          }}
          className="absolute"
        >
          <div className="relative flex items-center justify-center">
            {/* Outer circle with dots representing available seats */}
            <div className="absolute rounded-full border-0 w-20 h-20">
              {renderSeatDots(table.seats)}
            </div>
            {/* Table button */}
            <button
              onClick={() => onSelectTable(table.id)}
              className="bg-white text-amber-700 rounded-full w-14 h-14 flex flex-col items-center justify-center border border-gray-300 hover:bg-amber-100 transition-colors shadow-md relative z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mb-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M5 6h14M5 14h14M3 18h18"
                />
              </svg>
              <span className="text-sm font-semibold">{table.id}</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableMap;
