const translate = (key, locale) => {
   return locale[key] || key;
};
const format = (number) => {
   return number.replace(/[^\d+]/g, "");
};

const getAllArtists = (artists) => {
   return artists.map((artist) => artist.name).join(", ");
};

module.exports = {
   translate,
   format,
   getAllArtists,
};
