// Acessando a api planets

const PLANETS_ENDPOINT_API = 'https://swapi-trybe.herokuapp.com/api/planets/';

const planetsApi = () => (
  fetch(PLANETS_ENDPOINT_API)
    .then((data) => (
      data.json()
        .then((json) => (data.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);
// data === response
// console.log('API planets', planetsApi());

export default planetsApi;
