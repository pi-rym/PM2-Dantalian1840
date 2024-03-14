const renderCards = (data) => {
  const tarjetas = document.getElementById("cards");
  data.forEach((item) => {
    const divPrincipal = document.createElement("div");
    const movieCard = document.createElement("div");
    const newTitle = document.createElement("h3");
    const newPoster = document.createElement("img");
    const navegator = document.createElement("a");

    divPrincipal.classList.add("elementos");
    movieCard.classList.add("card");
    newPoster.classList.add("card-img-top");

    newTitle.innerHTML = item.title;
    newPoster.src = item.poster;
    navegator.href = "./index.html";

    navegator.appendChild(newTitle);
    movieCard.appendChild(newPoster);
    movieCard.appendChild(navegator);
    divPrincipal.appendChild(movieCard);

    tarjetas.appendChild(divPrincipal);
  });
};

module.exports = renderCards;
