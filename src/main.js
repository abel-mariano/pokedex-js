import { fetchPokemon } from './helpers/api';
import './style.css';

// Global variable
let searchPokemon = 1;

// Elements
const pokemonImage = document.querySelector('.pokemon__image');
const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const form = document.querySelector('.form');
const input = document.querySelector('.input__search');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

// Functions
const renderPokemon = async (pokemon) => {
  pokemonName.innerHTML = 'Loading...';
  pokemonNumber.innerHTML = '';

  const data = await fetchPokemon(pokemon);
  const pokeId = 650;

  if (!data) {
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = 'Não encontrado';
    pokemonNumber.innerHTML = '';
    input.value = '';
  } else if (data.id >= pokeId) {
    pokemonImage.style.display = 'block';
    pokemonImage.src = data.sprites.front_default;
    pokemonNumber.innerHTML = data.id;
    pokemonName.innerHTML = data.name;
    input.value = '';
    searchPokemon = data.id;
  } else {
    pokemonImage.style.display = 'block';
    pokemonImage.src = data.sprites.versions['generation-v']['black-white']
      .animated.front_default;
    pokemonNumber.innerHTML = data.id;
    pokemonName.innerHTML = data.name;
    input.value = '';
    searchPokemon = data.id;
  }
};
renderPokemon(searchPokemon);

// Events
form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

btnPrev.addEventListener('click', () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

btnNext.addEventListener('click', () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

/* pokemonImage.style.display = 'block';
  pokemonImage.src = data.sprites.versions['generation-v']['black-white']
    .animated.front_default;
  pokemonNumber.innerHTML = data.id;
  pokemonName.innerHTML = data.name;
  input.value = '';
  searchPokemon = data.id; */
