/** @module services/swAPI */

/* The Star Wars API base URL */
const SW_API_BASE_URL = 'https://swapi-trybe.herokuapp.com/api/';

/** The Star Wars API planets endpoint */
const SW_API_ENDPOINT = 'planets/';

/**
 * getStarWarsPlanets - Get all planets from Star Wars API
 * @returns {Promise} - Array of planet objects
 */
export default async function getStarWarsPlanets() {
  try {
    const response = await fetch(`${SW_API_BASE_URL}${SW_API_ENDPOINT}`);
    const data = await response.json();
    const { results } = data;
    results.forEach((planet) => delete planet.residents);
    return results;
  } catch (error) {
    console.log(error);
  }
}
