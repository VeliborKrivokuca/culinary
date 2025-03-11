import React from "react";
import { Feature } from "../../types/Feature";
import { useTranslation } from "react-i18next";

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const { t } = useTranslation();
  return (
    <div className="bg-white p-8 rounded-lg shadow-md text-center">
      <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold text-amber-800 mb-2">
        {t(feature.titleKey)}
      </h3>
      <p className="text-gray-600">{t(feature.descriptionKey)}</p>
    </div>
  );
};

export default FeatureCard;
