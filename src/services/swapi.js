async function swapi() {
  const midpoint = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
  const { results: endpoint } = await midpoint.json();
  // const endpoint = results;
  const filterResults = endpoint.map((result) => {
    delete result.residents;
    return result;
  });

  return filterResults;
}

export default swapi;
