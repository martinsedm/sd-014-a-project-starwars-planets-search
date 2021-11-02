const fetchAPI = async () => {
  try {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const apiJson = response.json();
    return apiJson;
  } catch (error) {
    return error;
  }
};

export default fetchAPI;
