const getApiStarWars = async (url) => {
  const response = await fetch(url);
  const resultadoJson = await response.json();
  const data = await resultadoJson.results;
  return data;
};

export default getApiStarWars;
