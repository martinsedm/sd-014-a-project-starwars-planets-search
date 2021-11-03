async function planetsAPI() {
  const endpoint = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const result = await endpoint.json();
  return result;
}

export default planetsAPI;
