/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t("brand.name")}</h3>
            <p className="text-gray-400">{t("footer.tagline")}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.contact.heading")}
            </h4>
            <address className="text-gray-400 not-italic">
              <p>{t("footer.contact.address")}</p>
              <p className="mt-2">{t("footer.contact.phone")}</p>
              <p>{t("footer.contact.email")}</p>
            </address>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.hours.heading")}
            </h4>
            <ul className="text-gray-400">
              <li>{t("footer.hours.weekdays")}</li>
              <li>{t("footer.hours.weekends")}</li>
              <li className="text-amber-500 mt-1">
                {t("footer.hours.holidays")}
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t("footer.newsletter.heading")}
            </h4>
            <p className="text-gray-400 mb-2">
              {t("footer.newsletter.description")}
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
                className="px-4 py-2 rounded-l bg-gray-800 border border-gray-700 text-white w-full"
              />
              <button className="bg-amber-700 hover:bg-amber-600 px-4 py-2 rounded-r">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">
            © 2025 {t("brand.name")}. {t("footer.copyright")}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
