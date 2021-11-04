import React, { useContext, useEffect, useState } from 'react';
import MainContext from '../context/MainContext';
import Row from './Row';

export default function Table() {
  const [isLoading, setIsLoading] = useState(false);
  const [funcfetch, planets] = useContext(MainContext);

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
    funcfetch().then(() => setIsLoading(false));
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
          !isLoading && planets
            .map((records) => <Row key={ records } records={ records } />)
        }
      </tbody>
    </table>
  );
}
