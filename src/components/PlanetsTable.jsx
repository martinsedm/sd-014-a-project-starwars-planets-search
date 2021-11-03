import React, { useEffect, useContext } from 'react';
import getPlanets from '../services/planetsApi';
import PlanetsSearchContext from '../context/PlanetsSearchContext';

export default function PlanetsTable() {
  const {
    planets, setPlanets } = useContext(PlanetsSearchContext);
  useEffect(() => {
    const fetchPlanets = async () => {
      const results = await getPlanets();
      setPlanets(results);
    };
    fetchPlanets();
  }, [setPlanets]);
  if (!planets.length > 0) return <p>Loading</p>;
  return (
    <table>
      <tr>
        {
          // escrevendo os headers da tabela
          planets[0].map((planet, index) => (
            <th key={ index }>
              { planet[0]
                .replace(/_/g, ' ')}
            </th>))
        }
      </tr>
      {
        // escrevendo as linhas da tabela
        planets.map((_planet, index) => (
          <tr key={ index }>
            {
            // escrevendo os elementos das linhas de cada tabela
              planets[index].map((property, lowerIndex) => (
                <td key={ lowerIndex }>
                  { property[1] }
                </td>
              ))
            }
          </tr>
        ))
      }
    </table>
  );
}
