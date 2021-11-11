const endpointAPI = 'https://swapi-trybe.herokuapp.com/api/planets/';

const DataPlanetasAPI = async () => {
  const resAPI = await fetch(endpointAPI);
  const resAPIJSON = await resAPI.json();
  const PlaneAPI = resAPI.ok ? Promise.resolve(resAPIJSON) : Promise.reject(resAPIJSON);
  return PlaneAPI;
};

export default DataPlanetasAPI;
