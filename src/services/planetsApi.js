const getPlanets = async () => {
  const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const data = await response.json();
  const filteredData = data.results
    .map((element) => Object.entries(element)
      .filter((entry) => entry[0] !== 'residents'));
  console.log(filteredData);
  return filteredData;
};

export default getPlanets;
