const renderCards = (data) => {
  const tarjetas = document.getElementById("cards");
  data.map((item) => {
    const divPrincipal = document.createElement("div");
    const movieCard = document.createElement("div");
    const newTitle = document.createElement("h3");
    const newPoster = document.createElement("img");
    const navegator = document.createElement("a");

    divPrincipal.classList.add("col", "mb-4");
    movieCard.classList.add("card");
    divPrincipal.classList.add("elementos");
    newPoster.classList.add("card-img-top");
    // newTitle.classList.add("tarjeta");

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
