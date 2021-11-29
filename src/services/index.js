const STAR_WARS_API = 'https://swapi-trybe.herokuapp.com/api/planets/';
const MSG_ERROR = 'There must be an error, please wait till we solve this =)';

async function fetchStarWarsPlanets() {
  try {
    const response = await fetch(STAR_WARS_API);
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error(MSG_ERROR);
  }
}

export default fetchStarWarsPlanets;
