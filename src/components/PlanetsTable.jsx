import React, { useContext } from 'react';

import { Table } from 'react-bootstrap';
import StarContext from '../context/StarContext';

function PlanetsTable() {
  const { planets, planetsCopy } = useContext(StarContext);

  const getHeaders = () => {
    if (planets.length !== 0) {
      return Object.keys(planets[0]).filter((planet) => planet !== 'residents');
    }
    return [];
  };

  const headers = getHeaders();
  return (
    <section>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={ index }>{ header }</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planetsCopy.map((planet, index) => (
            <tr key={ index }>
              {headers.map((header, i) => (
                <td key={ `${header}-${i}` }>{ planet[header] }</td>
              ))}

            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
}

export default PlanetsTable;
