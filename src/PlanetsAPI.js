const planetFetcher = async () => {
  const fetchPlanets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/?page=1');
  const convertFetch = await fetchPlanets.json();
  const planetList = convertFetch.results.map((planet) => {
    delete planet.residents;
    return planet;
  });
  console.log(planetList);
  return planetList;
  // return convertFetch.results;
};

export default planetFetcher;
