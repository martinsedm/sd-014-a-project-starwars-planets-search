async function fetchApi() {
  const api = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const results = await api.json();
  return results;
}

export default fetchApi;
