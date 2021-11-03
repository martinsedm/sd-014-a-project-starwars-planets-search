export default async function fetchData() {
  try {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await response.json();
    const results = await data.results;
    return results;
  } catch (error) {
    console.error(error);
  }
}
