import createCard from "./card.js";
let pokedex = window.pokedex;
let container = document.getElementById("card-container");
let button = document.getElementById("button-search");

function populate(pokemons) {
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
}

async function getInfo(url) {
  let promise = await fetch(url).then((response) => response.json());
  return promise;
}

await pokedex.getPokemonsList().then(function (response) {
  const pokemons = response.results.map((pokemon) => {
    return pokemon;
  });

  populate(pokemons);

  button.addEventListener("click", function () {
    let name = document.getElementById("input-name").value;
    console.log(name);
    if (name !== undefined && name !== null) {
      let poke = _.findIndex(pokemons, function (p) {
        return p.name == name;
      });
      if (poke !== -1) {
        while (container.firstChild) {
          container.removeChild(container.lastChild);
        }
        let element = pokemons[poke];
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
      } else {
        while (container.firstChild) {
          container.removeChild(container.lastChild);
        }
        populate(pokemons);
      }
    }
  });
});
