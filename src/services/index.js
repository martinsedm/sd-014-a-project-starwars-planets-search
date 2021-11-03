const planetsAPI = async () => {
  const planets = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  return planets.json()
    .then((response) => {
      response.results.map((i) => delete i.residents);
      return response.results;
    });
};

export default planetsAPI;
