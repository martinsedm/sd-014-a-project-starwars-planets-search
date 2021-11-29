import React, { useContext } from 'react';

import { Table } from 'react-bootstrap';
import StarContext from '../context/StarContext';

function PlanetsTable() {
  const { planetsCopy, getHeaders } = useContext(StarContext);

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
              {headers.map((header, i) => {
                if (i === 0) {
                  return (
                    <td
                      key={ `${header}-${i}` }
                      data-testid="planet-name"
                    >
                      { planet[header] }
                    </td>
                  );
                }
                return (<td key={ `${header}-${i}` }>{ planet[header] }</td>);
              })}

            </tr>
          ))}
        </tbody>
      </Table>
    </section>
  );
}

export default PlanetsTable;
