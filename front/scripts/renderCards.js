const renderCards = (data) => {
  const tarjetas = document.getElementById("cards");
  data.forEach((item) => {
    const divPrincipal = document.createElement("div");
    const movieCard = document.createElement("div");
    const newTitle = document.createElement("h3");
    const newPoster = document.createElement("img");
    const navegator = document.createElement("a");
    const newInfo = document.createElement("h4");

    divPrincipal.classList.add("elementos");
    movieCard.classList.add("card");
    newPoster.classList.add("card-img-top");
    newTitle.classList.add("card-title");
    newInfo.classList.add("card-text");

    newTitle.innerHTML = item.title;
    newPoster.src = item.poster;
    newInfo.innerHTML = `Director: ${item.director}<br>Year: ${item.year}<br>Genres: ${item.genre}<br>Rate: ${item.rate}`;
    navegator.href = "./index.html";

    navegator.appendChild(newTitle);
    movieCard.appendChild(newPoster);
    movieCard.appendChild(navegator);
    movieCard.appendChild(newInfo);
    divPrincipal.appendChild(movieCard);

    tarjetas.appendChild(divPrincipal);
  });
};

module.exports = renderCards;
