const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchStarWars = async () => {
  try {
    const reponse = await fetch(URL);
    const { results } = await reponse.json();
    return results;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchStarWars;
