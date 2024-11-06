const translate = (key, locale) => {
   return locale[key] || key;
};

const formatNumber = (phoneNumber, locale, location) => {
   const language = locale.language;
   const localizedPhoneNumber = language === "sv" ? phoneNumber.replace("+46 ", "0") : phoneNumber;
   return location === "href" ? localizedPhoneNumber.replace(/[^0-9+]/g, "") : localizedPhoneNumber;
};

module.exports = {
   translate,
   formatNumber,
};
