import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { planets } = useContext(PlanetsContext);

  if (!planets.length) return <span>Carregando...</span>;

  const head = Object.keys(planets[0]).filter((info) => info !== 'residents');

  return (
    <div>
      <table>
        <thead>
          <tr>
            { head.map((info, index) => (<th key={ index }>{info}</th>)) }
          </tr>
        </thead>
        <tbody>
          { planets.map((planet, index) => (
            <tr key={ index }>
              {head.map((info) => (<td key={ planet[info] }>{planet[info]}</td>))}
            </tr>)) }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
