let pokedex = window.pokedex;
let list = document.getElementById("poke-list");

const interval = {
  offset: 0,
  limit: 10000,
};
pokedex.getPokemonsList(interval).then(function (response) {
  const pokemons = response.results.map((pokemon) => {
    let names = pokemon.name
    return names
  })
  pokemons.forEach((element) => {
    console.log(element);
    let ul = document.createElement("li");
    ul.innerText = element;
    list.appendChild(ul);
  });
});
