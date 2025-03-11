// src/components/AnimatedFoodAnimation.tsx
import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/tea-cup.json"; // Update with your JSON file path

const AnimatedFoodAnimation: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Lottie
        animationData={animationData}
        loop={true}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default AnimatedFoodAnimation;
