//ejercicio 1//

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((res) => {
    if (res.ok === false) throw new Error("error");
    return res.json();
  })
  .then((data) => {
    console.log(JSON.stringify(data));
    data.abilities.slice(0, 3).forEach((h) => {
      console.log(h.ability.name);
    });
  })
  .catch((error) => console.error(error));

//ejercicio 2 y 3 //
const lista = document.querySelector("#lista-pokemon");
const loading = document.querySelector("#loading");

setTimeout(() => {
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => {
      if (res.ok === false) throw new Error("error");
      return res.json();
    })
    .then((data) => {
      loading.textContent = "";

      const pokemones = data.results;
      pokemones.forEach((pokemon) => {
        const li = document.createElement("li");

        const anchor = document.createElement("a");
        anchor.href = pokemon.url;
        anchor.textContent = pokemon.name;

        li.appendChild(anchor);
        lista.appendChild(li);
      });
    })
    .catch((error) => console.error(error));
}, 2000);

// ejercicio 3 //
