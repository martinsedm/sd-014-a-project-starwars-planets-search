export default async function fecthPlanets() {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

  try {
    const response = await fetch(URL);
    const json = await response.json();

    return json;
  } catch (err) {
    console.error(err);
  }
}
