import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../context/MainContext';
import Row from './Row';

export default function Table() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    allPlanets,
    funcfetch,
    filters,
    // handlefilter: teste,
    setListFiltered,
  } = useContext(MainContext);

  let planetFName;

  const planetsFilter = () => {
    const teste = setListFiltered();
    const filtName = filters.filterByName.name;
    if (filtName.length > 0) {
      if (teste.length > 0) {
        planetFName = teste.filter((planeta) => planeta.name.includes(filtName));
      } else {
        planetFName = allPlanets.filter((planeta) => planeta.name.includes(filtName));
      }
    } else if (filtName.length <= 0) {
      if (teste.length > 0) {
        planetFName = teste;
      } else {
        planetFName = allPlanets;
      }
    }
    return planetFName;
  };

  // console.log(planetsFilter());

  const headerDaTabela = [
    'Name',
    'Rotation Period',
    'Orbital Period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface Water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'URL',
  ];

  useEffect(() => {
    setIsLoading(true);
    funcfetch()
      .then(() => setIsLoading(false));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          {
            headerDaTabela.map((key, index) => (
              <th key={ index }>{ key }</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          !isLoading && planetsFilter()
            .map((records) => <Row key={ records.diameter } records={ records } />)
        }
      </tbody>
    </table>
  );
}
