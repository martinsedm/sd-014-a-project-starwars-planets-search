import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

export default function Table() {
  const { data } = useContext(PlanetsContext);

  if (!data.length) return <span>Carregando...</span>;

  const headInfo = Object.keys(data[0]).filter((info) => info !== 'residents');
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
          { data.map((planet) => (
            <tr key={ planet }>
              {head.map((info) => (<td key={ planet[info] }>{planet[info]}</td>))}
            </tr>)) }
        </tbody>
      </table>
    </div>
  );
}
