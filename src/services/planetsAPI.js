const urlPlanets = 'https://swapi-trybe.herokuapp.com/api/planets/';
export default async function getPlanets() {
  const response = await fetch(urlPlanets);
  const responseJSON = await response.json();
  responseJSON.results.forEach((result) => {
    delete result.residents;
  });
  return responseJSON.results;
}
