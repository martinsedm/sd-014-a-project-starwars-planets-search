async function getPlanetsInfo() {
  const planetsInfo = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const planetsInfoJson = await planetsInfo.json();
  return planetsInfoJson.results;
}

export default getPlanetsInfo;
