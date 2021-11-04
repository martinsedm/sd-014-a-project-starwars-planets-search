async function fetchStarWarsAPI(setResults, setFullResults) {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await response.json();
  setResults(data.results);
  setFullResults(data.results);
}

export default fetchStarWarsAPI;
