const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const getPlanetList = () => (
  fetch(END_POINT)
    .then((response) => (
      response.json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getPlanetList;
