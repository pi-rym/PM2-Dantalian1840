const renderCards = (data) => {
  data.map((item) => {
    const movieCard = document.createElement("div");
    const newTitle = document.createElement("h3");
    const newPoster = document.createElement("img");
    const navegator = document.createElement("a");

    movieCard.classList.add("elementos");
    movieCard.classList.add("card");
    movieCard.classList.add("col");
    movieCard.classList.add("card-size");
    newTitle.classList.add("tarjeta");

    newTitle.innerHTML = item.title;
    newPoster.src = item.poster;
    navegator.href = "/front/index.html";

    newTitle.appendChild(navegator);
    movieCard.appendChild(newTitle);
    movieCard.appendChild(newPoster);

    const tarjetas = document.getElementById("cards");
    tarjetas.appendChild(movieCard);
  });
};

module.exports = renderCards;
