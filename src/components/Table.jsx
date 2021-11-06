import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function Table() {
  const { data, filter } = useContext(PlanetsContext);
  const { filterByName: { name } } = filter;

  const renderHead = () => Object.keys(data[0])
    .map((keyName, index) => (<th key={ index }>{keyName}</th>));

  const renderBody = () => data.map((content, position) => (
    <tr key={ position }>
      {Object.values(content)
        .map((planets, index) => <td key={ index }>{ planets }</td>)}
    </tr>
  ));

  // função filtro, faz um filtro no array(data) de planetas com base na informação de name(estado),
  // transforma o nome do planeta em caixa baixa e verifica se o nome digitado(caixa baixa) existe na lista.

  const filterPlanets = () => data.filter((searchInfo) => searchInfo.name
    .toLowerCase().includes(name.toLowerCase()))
    .map((planet, index) => (
      <tr key={ index }>
        {Object.values(planet).map((filtered, i) => (<td key={ i }>{filtered}</td>))}
      </tr>
    ));

  console.log(data);
  if (data.length === 0) return <p>loading...</p>;
  if (data !== undefined) {
    return (
      <div>
        <table>
          <thead>
            <tr>
              { renderHead() }
            </tr>
          </thead>
          <tbody>
            { name.length === 0 ? renderBody() : filterPlanets() }
            {/* { renderBody() } */}
          </tbody>
        </table>
      </div>
    );
  }
}
// { name.length === 0 ? renderBody() : filterPlanets() }
export default Table;
