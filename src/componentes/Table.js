import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data, isLoading } = useContext(PlanetContext);
  if (isLoading) return <p>Loading...</p>;

  const headers = ['name', 'rotation_period', 'orbital_period', 'diameter',
    'climate', 'gravity', 'terrain', 'surface_water', 'population', 'films',
    'created', 'edited', 'url'];

  return (
    <div>
      <table>
        <tbody>
          <tr>
            { headers.map((title) => <th key={ title }>{title}</th>) }
          </tr>
          { data.map((planet) => (
            <tr key={ planet.id }>
              {headers.map((title, index) => {
                if (index === 0) {
                  return (
                    <td key={ planet[title] } data-testid="planet-name">
                      {planet[title]}
                    </td>
                  );
                }
                return (
                  <td key={ planet[title] }>
                    {planet[title]}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
