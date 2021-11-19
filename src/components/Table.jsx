import React, { useEffect } from 'react';
// import Context from '../contexts/Context';

export default function Table() {
  // const planets = useContext(Context);

  // let planets = [];
  // planets = fetchByPlanets;
  // console.log(planets);
  const fecthPlanets = async () => {
    const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const response = await fetch(URL);
    const json = await response.json();
    console.log(json);
  };

  useEffect(() => {
    fecthPlanets();
  }, []);

  return (
    <table>
      <tr>
        xxx
      </tr>
    </table>
    // { xxx.map(() => {
    //   return (
    //     <tr key= >
    //       <td></td>
    //     </tr>
    //   )
    // })
    // }
  );
}
