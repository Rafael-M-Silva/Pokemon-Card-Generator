const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.querySelector(".card");
const btn = document.querySelector("#btn-generate");

let getPokemonData = () => {
  // gerando um numero random
  let id = Math.floor(Math.random() * 150) + 1;

  // Concatenando o Id random com a url (API)
  let finalUrl = url + id;

  fetch(finalUrl)
    .then((response) => response.json())
    .then((data) => {
      generateCard(data);
    })
    .catch((err) => console.log(`ERRO: ${err}`));
};

let generateCard = (data) => {
  let pokemonImg = data.sprites.other.dream_world.front_default;
  let defense = data.stats[2].base_stat;
  let attack = data.stats[1].base_stat;
  let speed = data.stats[5].base_stat;
  let life = data.stats[0].base_stat;
  let type = data.types[0].type.name;
  let name = data.name;

  // Renderizando as variaveis no card
  card.innerHTML = `
  <div class="color"></div>
  <div class="life"><p><b>hp</b> <span>${life}</span></p></div>
  <img src="${pokemonImg}" alt="pokemon">
  <h1>${name}</h1>
  <div class="type"><span>${type}</span></div>
  <div class="att_deff_spp">
      <div class="power">
          <p>${attack}</p>
          <span>Attack</span>
      </div>
      <div class="power">
          <p>${defense}</p>
          <span>Defense</span>
      </div>
      <div class="power">
          <p>${speed}</p>
          <span>Speed</span>
      </div>
  </div>
  `;
};

btn.addEventListener("click", getPokemonData);

// podemos garantir que a função só seja executada quando todos os elementos necessários estiverem disponíveis.
window.addEventListener("load", getPokemonData);
