const axios = require("axios");

const buttonSubmit = document.getElementById("buttonSubmit");
const buttonClear = document.getElementById("buttonClear");

let dataMovies;

const handlerSubmit = () => {
  const movieData = document.getElementsByClassName("form-movie");
  const title = movieData[0].value;
  const director = movieData[1].value;
  const poster = movieData[2].value;
  const year = movieData[3].value;
  const duration = movieData[4].value;
  const rate = movieData[5].value;
  const genresSelect = document.querySelector(".form-select");
  const genre = [];

  for (const option of genresSelect.options) {
    if (option.selected) {
      genre.push(option.value);
    }
  }

  if (
    !title ||
    !director ||
    !poster ||
    !year ||
    !duration ||
    genre.length === 0 ||
    !rate
  ) {
    alert("Please fill all the inputs.");
    return;
  }

  // Year & rate is a number validations

  if (isNaN(year)) {
    alert("Year is not a number.");
    return;
  }
  if (isNaN(rate)) {
    alert("Rate is not a number");
    return;
  }
  if (year <= 1890) {
    alert("Year invalid. Please fill with a year after 1890. ");
    return;
  }
  if (year >= 2025) {
    alert("Year invalid. Please fill with a year before 2025. ");
    return;
  }

  //Movies object update

  dataMovies = {
    title,
    director,
    poster,
    year,
    duration,
    genre,
    rate,
  };

  document.getElementById("form").reset();
};

const handlerClear = () => {
  document.getElementById("form").reset();
};

//Buttons reaction
buttonSubmit.addEventListener("click", handlerSubmit);
buttonClear.addEventListener("click", handlerClear);

buttonSubmit.addEventListener("click", async () => {
  try {
    await axios.post("http://localhost:3000/movies", dataMovies);
    alert("Movie sent. All good.");
  } catch (error) {
    throw Error(error.message);
  }
});
