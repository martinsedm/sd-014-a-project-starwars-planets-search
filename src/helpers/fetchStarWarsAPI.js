async function fetchStarWarsAPI(setResults) {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await response.json();
  return setResults(data.results);
}

export default fetchStarWarsAPI;
