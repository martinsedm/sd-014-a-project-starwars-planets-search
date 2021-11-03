const PlanetsKeyDeleted = async (key) => {
  try {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const data = await response.json();
    const dataFormated = data.results.map((planet) => {
      delete planet[key];
      return planet;
    });
    return dataFormated;
  } catch (error) {
    return error;
  }
};

export default PlanetsKeyDeleted;
