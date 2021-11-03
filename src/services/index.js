const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
const ERRO_FETCH = 'Erro na resposta da requisição';
const ERRO_FUNCTION = 'Erro na função de requisição';

async function fetchPlanets() {
  try {
    const response = fetch(END_POINT);
    if (response.ok) {
      const { result } = await response.json();
      return result;
    }
    throw Error(ERRO_FETCH);
  } catch (err) {
    if (err.message !== ERRO_FETCH) {
      throw new Error(ERRO_FUNCTION);
    }
    return err;
  }
}

export default fetchPlanets;
