const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/?format=json';
const ERRO_FETCH = 'Erro na resposta da requisição';
const ERRO_FUNCTION = 'Erro na função de requisição';

async function fetchPlanets() {
  try {
    const response = await fetch(END_POINT);
    if (response.ok) {
      const { results } = await response.json();
      return results;
    }
    throw new Error(ERRO_FETCH);
  } catch (err) {
    if (err.message === ERRO_FETCH) {
      throw new Error(ERRO_FETCH);
    }
    throw new Error(ERRO_FUNCTION);
  }
}

export default fetchPlanets;
