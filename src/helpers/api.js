export const fetchPokemon = async (pokemon) => {
  const URL_API = 'https://pokeapi.co/api/v2/pokemon/';

  if (!pokemon) throw new Error('Pokemon não encontrado!');

  const response = await fetch(`${URL_API}${pokemon.toLowerCase()}`);
  const data = await response.json();
  return data;
};
