/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import StarContext from '../context/context';
import TableHeader from '../utils/TableHeader';

function Table() {
  const { filterData, loading, name } = useContext(StarContext);

  return (
    loading ? <h2> Loading ...</h2> : (
      <div>
        <table>
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            {filterData
              .filter((planet) => planet.name.includes(name))
              .map((dataPlanet, index) => (
                <tr key={ index }>
                  <td data-testid="planet-name">{dataPlanet.name}</td>
                  <td>{dataPlanet.rotation_period}</td>
                  <td>{dataPlanet.orbital_period}</td>
                  <td>{dataPlanet.diameter}</td>
                  <td>{dataPlanet.climate}</td>
                  <td>{dataPlanet.gravity}</td>
                  <td>{dataPlanet.terrain}</td>
                  <td>{dataPlanet.surface_water}</td>
                  <td>{dataPlanet.population}</td>
                  <td>{dataPlanet.films}</td>
                  <td>{dataPlanet.created}</td>
                  <td>{dataPlanet.edited}</td>
                  <td>{dataPlanet.url}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    )
  );
}

export default Table;
