export const fetchPokemon = async (pokemon) => {
  const URL_API = 'https://pokeapi.co/api/v2/pokemon/';
  const statusTrue = 200;
  const response = await fetch(`${URL_API}${pokemon}`);

  if (response.status === statusTrue) {
    const data = await response.json();
    return data;
  }
};
