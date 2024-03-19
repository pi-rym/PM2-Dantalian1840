const renderCards = require("./renderCards");

const handler = () => {
  const movieData = document.getElementsByClassName("form");
  const title = movieData[0].value;
  const director = movieData[1].value;
  const poster = movieData[2].value;
  const year = movieData[3].value;
  const genres = movieData[4].value;
  const rate = movieData[5].value;

  if (!title || !director || !poster || !year || !genres || !rate) {
    alert("Es necesario llenar todos los campos para crear la actividad.");
    return;
  }

  movieData[0].value = "";
  movieData[1].value = "";
  movieData[2].value = "";
  movieData[3].value = "";
  movieData[4].value = "";
  movieData[5].value = "";
};

buttonSubmit.addEventListener("click", handlerSubmit);
buttonClear.addEventListener("click", handlerClear);
