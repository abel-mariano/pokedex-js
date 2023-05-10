import './style.css';

const fetchPokemon = async (pokemon) => {
  const URL_API = 'https://pokeapi.co/api/v2/pokemon/';

  const response = await fetch(`${URL_API}${pokemon}`);
  const data = await response.json();
  return data;
};

const renderPokemon = async (pokemon) => {
  const data = await fetchPokemon(pokemon);
};
