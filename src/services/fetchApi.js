const ENDPOINT = 'planets';
const BASE_API = 'https://swapi-trybe.herokuapp.com/api/';

async function fetchApi() {
  const response = await fetch(`${BASE_API}${ENDPOINT}`);
  const responseJSon = await response.json();
  const data = responseJSon.results;
  data.forEach((dataPlaent) => delete dataPlaent.residents); // Consulta para resolução dessa linha  https://www.ti-enxame.com/pt/javascript/como-faco-para-remover-uma-propriedade-de-um-objeto-javascript/958479429/
  return data;
}
export default fetchApi;
