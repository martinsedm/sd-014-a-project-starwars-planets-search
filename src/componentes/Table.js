import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { data, isLoading, nameFilters } = useContext(PlanetContext);
  const headers = ['name', 'rotation_period', 'orbital_period', 'diameter',
    'climate', 'gravity', 'terrain', 'surface_water', 'population', 'films',
    'created', 'edited', 'url'];

  if (isLoading) return <p>Loading...</p>;

  if (nameFilters.length === 0) return <p>No Planet found</p>;

  return (
    <div>
      <table>
        <tbody>
          <tr className="headers">
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
