import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../context/MainContext';
import Row from './Row';

export default function Table() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    allPlanets,
    funcfetch,
    filters,
    applyFilters,
  } = useContext(MainContext);

  const filtroName = (alp) => {
    return alp.filter((planeta) => planeta.name.includes(filters.filterByName.name));
  };

  const planetsFilter = () => {
    let planetFName;
    const flitName = filters.filterByName.name;
    if (flitName.length > 0) {
      planetFName = filtroName(allPlanets);
    } else {
      planetFName = allPlanets;
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
