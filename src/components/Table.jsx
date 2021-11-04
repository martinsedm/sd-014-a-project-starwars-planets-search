import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function Table() {
  const { data } = useContext(PlanetsContext);
  console.log(data);
  if (data.length === 0) return <p>loading...</p>;
  if (data !== undefined) {
    return (
      <div>
        <table>
          <caption>Star wars</caption>
          <thead>
            <tr>
              {Object.keys(data[0])
                .map((keyName, index) => (<th key={ index }>{keyName}</th>))}
            </tr>
          </thead>
          <tbody>
            { data.map((content, position) => (
              <tr key={ position }>
                {
                  Object.values(content)
                    .map((planets, index) => <td key={ index }>{ planets }</td>)
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
