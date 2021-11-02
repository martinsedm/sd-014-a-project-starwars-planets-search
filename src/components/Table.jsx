import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { planets } = useContext(PlanetsContext);

  if (!planets.length) return <span>Carregando...</span>;

  const headInfo = Object.keys(planets[0]).filter((info) => info !== 'residents');
  const head = [...headInfo];

  return (
    <div>
      <table>
        <thead>
          <tr>
            { head.map((info) => (<th key={ info }>{info}</th>)) }
          </tr>
        </thead>
        <tbody>
          { planets.map((planet) => (
            <tr key={ planet }>
              {head.map((info) => (<td key={ planet[info] }>{planet[info]}</td>))}
            </tr>)) }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
