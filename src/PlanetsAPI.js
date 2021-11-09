const planetFetcher = async () => {
  const fetchPlanets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/?page=1');
  const convertFetch = await fetchPlanets.json();
  const planetList = await convertFetch.results.map((planet) => {
    delete planet.residents;
    return planet;
  });
  // console.log(planetList);
  const INVERT = -1;
  const PROCEED = 1;
  return planetList.sort((a, b) => (a.name > b.name ? PROCEED : INVERT));
  // return convertFetch.results;
};

export default planetFetcher;
