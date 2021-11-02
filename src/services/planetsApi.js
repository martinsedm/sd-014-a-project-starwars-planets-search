const searchApi = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const returnApi = () => (
  fetch(searchApi)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promisse.resolve(json) : Promisse.reject(json)))
    ))
);

export default returnApi;
