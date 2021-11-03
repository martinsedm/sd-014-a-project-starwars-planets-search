// import React, { useContext, useEffect } from 'react';

// import PlanetsContext from '../context/PlanetsContext';

// export default function fetchPlanetApi() {
//   const { isLoading, setIsLoading, data, setData } = useContext(PlanetsContext);

//   useEffect(() => {
//     setIsLoading(true);

//     const fetchData = async () => {
//       const fetchApi = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
//       const response = await fetchApi.json();
//       const apiResults = await response.results;
//       await setData(apiResults);
//       await setIsLoading(false);
//     };

//     fetchData();
//   }, []);

//   return { data, isLoading };
// }

// // https://stackoverflow.com/questions/60209671/asynchronous-context-with-useeffect-in-react
