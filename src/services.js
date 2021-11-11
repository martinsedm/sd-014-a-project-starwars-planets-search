export default async function fetchAPI() {
  const request = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const requestJSON = request.json();
  return requestJSON;
}
