let games = [];

function initCatalog(jsonPath) {
  fetch(jsonPath)
    .then((response) => response.json())
    .then((data) => {
      games = data;
      const container = document.getElementById("game-container");
      data.forEach((game) => {
        const el = document.createElement("a");
        el.href = game.link;
        el.className = "game-link container";
        el.innerHTML = `
          <div class="game-tile gameblur">
            <img class="game-icon" src="${game.imgSrc}" alt="icon" />
            <p class="game-title">${game.title}</p>
          </div>`;
        container.appendChild(el);
      });
      document.getElementById("loader").style.display = "none";
    })
    .catch((error) => console.error("Error:", error));
}

function searchGames() {
  const input = document.getElementById("search");
  const filter = input.value.toUpperCase();
  const container = document.getElementById("game-container");
  container.innerHTML = "";
  games
    .filter((game) => game.title.toUpperCase().includes(filter))
    .forEach((game) => {
      const el = document.createElement("a");
      el.href = game.link;
      el.className = "game-link container";
      el.innerHTML = `
        <div class="game-tile gameblur">
          <img class="game-icon" src="${game.imgSrc}" alt="icon" loading="lazy" />
          <p class="game-title">${game.title}</p>
        </div>`;
      container.appendChild(el);
    });
}

const backToTopButton = document.getElementById('back-to-top');
if (backToTopButton) {
  window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  };
  backToTopButton.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
}