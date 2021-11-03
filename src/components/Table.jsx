import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

// const ONE_SECOND = 1000;

function Table() {
  const { planets, getPlanets, isLoading, filterNames } = useContext(PlanetsContext);

  useEffect(() => {
    getPlanets();
  }, []);

  if (isLoading) {
    return (<p>Loading...</p>);
  }

  return (
    <table>
      {/* HEAD DA TABELA */}
      <tr>
        {Object.keys(planets[0]).map((planet, i) => <th key={ i }>{planet}</th>)}
      </tr>

      {/* CORPO DA TABELA */}
      {filterNames(planets).map((item, i) => (
        <tr key={ i }>
          {Object.values(item).map((value, j) => (
            <td key={ j }>
              {value}
            </td>
          ))}
        </tr> // AJUDA DO FILIPAO E ISAAC MONSTROSOS COM O MAP
      ))}
    </table>
  );
}

export default Table;
