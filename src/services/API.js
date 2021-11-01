const fetchAPI = async () => {
  try {
    const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
    const apiJson = response.json();
    return apiJson;
  } catch (error) {
    return error;
  }
};

// function foo() {
//   fetch('https://swapi-trybe.herokuapp.com/api/planets/')
//     .then((response) => {
//       response.json()
//         .then((data) => console.log(data.results));
//     })
//     .catch((error) => console.log(`Deu ruim: ${error.mensage}`));
// }

export default fetchAPI;
