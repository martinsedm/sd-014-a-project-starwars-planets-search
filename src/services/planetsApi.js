async function getPlanetsInfo() {
  const planetsInfo = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const planetsInfoJson = await planetsInfo.json();
  console.log(planetsInfoJson.results);
  return planetsInfoJson.results;
}

export default getPlanetsInfo;
