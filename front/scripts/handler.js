const buttonSubmit = document.getElementById("buttonSubmit");
const buttonClear = document.getElementById("buttonClear");

const handlerSubmit = () => {
  const movieData = document.getElementsByClassName("form-movie");
  const title = movieData[0].value;
  const director = movieData[1].value;
  const poster = movieData[2].value;
  const year = movieData[3].value;
  const rate = movieData[4].value;
  const genresSelect = document.querySelector(".form-select");
  const selectedGenres = [];

  for (const option of genresSelect.options) {
    if (option.selected) {
      selectedGenres.push(option.value);
    }
  }

  if (
    !title ||
    !director ||
    !poster ||
    !year ||
    selectedGenres.length === 0 ||
    !rate
  ) {
    alert("Es necesario llenar todos los campos para crear la actividad.");
    return;
  }

  movieData[0].value = "";
  movieData[1].value = "";
  movieData[2].value = "";
  movieData[3].value = "";
  movieData[4].value = "";

  console.log("Selected genres: ", selectedGenres);
};

const handlerClear = () => {
  document.getElementById("form").reset();
};

buttonSubmit.addEventListener("click", handlerSubmit);
buttonClear.addEventListener("click", handlerClear);
