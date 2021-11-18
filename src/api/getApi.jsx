export default async function getApi() {
  const api = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const apiJson = await api.json();
  return apiJson;
}
