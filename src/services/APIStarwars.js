const getApiStarWars = async (url) => {
  const response = await fetch(url);
  const resultadoJson = await response.json();
  const resultado = await resultadoJson.results;
  return resultado;
};

export default getApiStarWars;
