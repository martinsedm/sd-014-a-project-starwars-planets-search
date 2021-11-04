export const starWarsapi = 'https://swapi-trybe.herokuapp.com/api/planets/';

const apir = async () => {
  const api = await fetch(starWarsapi);
  const result = await api.json();
  result.results.filter((planetas) => delete planetas.residents);
  return result;
};

export default apir;
