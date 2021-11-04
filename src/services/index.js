const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/?format=json';
const ERRO_FETCH = 'Erro na resposta da requisição';
const ERRO_FUNCTION = 'Erro na função de requisição';

export async function fetchPlanets() {
  try {
    const response = await fetch(END_POINT);
    if (response.ok) {
      const json = await response.json();
      json.results.forEach((object) => delete object.residents);
      return json;
    }
    throw new Error(ERRO_FETCH);
  } catch (err) {
    if (err.message === ERRO_FETCH) {
      throw new Error(ERRO_FETCH);
    }
    throw new Error(ERRO_FUNCTION);
  }
}

export function isEquivalent(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  return keys1.every((key) => obj1[key] === obj2[key]);
}
