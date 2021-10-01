import createCard from "./card.js";
let pokedex = window.pokedex;
let container = document.getElementById("card-container");

const interval = {
  offset: 0,
  limit: 1000000,
};

async function getInfo(url) {
  let promise = fetch(url).then((response) => response.json());
  return promise;
}

pokedex.getPokemonsList(interval).then(function (response) {
  const pokemons = response.results.map((pokemon) => {
    return pokemon;
  });

  pokemons.forEach((element) => {
    getInfo(element.url).then((a) => {
      let url = a.sprites.front_default;
      let health = a.stats[0].base_stat;
      let attack = a.stats[1].base_stat;
      let defense = a.stats[2].base_stat;
      let card = createCard(element.name, url, health, attack, defense);
      let div = document.createElement("div");
      div.innerHTML = card;
      container.appendChild(div);
    });
  });
});
