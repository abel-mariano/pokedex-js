import { fetchPokemon } from './helpers/api';
import './style.css';

// Elements
const pokemonImage = document.querySelector('.pokemon__image');
const pokemonName = document.querySelector('.pokemon__name');
const pokemonNumber = document.querySelector('.pokemon__number');
const form = document.querySelector('.form');
const input = document.querySelector('.input__search');

// Functions
const renderPokemon = async (pokemon) => {
  const data = await fetchPokemon(pokemon);

  pokemonImage.src = data.sprites.versions['generation-v']['black-white']
    .animated.front_default;
  pokemonNumber.innerHTML = data.id;
  pokemonName.innerHTML = data.name;
  input.value = '';
};

// Events
form.addEventListener('submit', (event) => {
  event.preventDefault();

  renderPokemon(input.value);
});

/* export const getNewDeck = async () => {
  try {
    const newDeck = await fetchAPI('new');
    if (newDeck.success === false) {
      throw new Error(newDeck.error);
    }
    return newDeck;
  } catch (error) {
    console.log(error);
  }
}; */
