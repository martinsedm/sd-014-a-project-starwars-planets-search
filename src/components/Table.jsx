import React, { useContext } from 'react';
import StarContext from '../context/context';
import TableHeader from '../utils/TableHeader';

function Table() {
  const { data, loading } = useContext(StarContext);
  return (
    loading ? <h2> Loading ...</h2> : (
      <main>
        {console.log(data)}
        <table>
          <TableHeader />
          {data.map((dataPlanet, index) => (
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
        </table>
      </main>
    )
  );
}

export default Table;
