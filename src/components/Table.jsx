import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

// const ONE_SECOND = 1000;

function Table() {
  const { planets, getPlanets, isLoading, namesFilter } = useContext(PlanetsContext);

  useEffect(() => {
    getPlanets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (<p>Loading...</p>);
  }

  return (
    <table>
      {/* HEAD DA TABELA */}
      <thead>
        <tr>
          {Object.keys(planets[0]).map((planet, i) => <th key={ i }>{planet}</th>)}
        </tr>
      </thead>
      {/* CORPO DA TABELA */}
      <tbody>
        {namesFilter(planets).map((item, i) => (
          <tr key={ i }>
            {Object.values(item).map((value, j) => (
              <td key={ j }>
                {value}
              </td>
            ))}
          </tr> // AJUDA DO FILIPAO E ISAAC MONSTROSOS COM O MAP
        ))}
      </tbody>
    </table>
  );
}

export default Table;
