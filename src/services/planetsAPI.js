const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function fetchData() {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default fetchData;
