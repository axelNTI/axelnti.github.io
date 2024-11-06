const translate = (key, locale) => {
   return locale[key] || key;
};
const format = (number) => {
   return number.replace(/[^\d+]/g, "");
};

module.exports = {
   translate,
   format,
};
