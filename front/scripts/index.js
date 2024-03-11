const renderCards = require("./renderCards");
const axios = require("axios");

// $.get("hhttps://students-api.up.railway.app/movies", (data) => {
//   renderCards(data);
// });

const fetchData = async () => {
  try {
    const data = await axios.get("https://students-api.up.railway.app/movies");
    renderCards(data.data);
  } catch (error) {
    alert("No se pudo encontrar información");
  }
};

fetchData();
