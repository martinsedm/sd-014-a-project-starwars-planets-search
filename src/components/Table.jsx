import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function Table() {
  const { data, filter } = useContext(PlanetsContext);
  const { filters: { filterByName: { name } } } = filter;
  console.log(filter);
  // console.log(filters.filters.filterByName.name);

  const renderHead = () => Object.keys(data[0])
    .map((keyName, index) => (<th key={ index }>{keyName}</th>));

  const renderBody = () => data.map((content, position) => (
    <tr key={ position }>
      {Object.values(content)
        .map((planets, index) => <td key={ index }>{ planets }</td>)}
    </tr>
  ));

  const filterPlanets = () => data.filter((searchInfo) => searchInfo.name
    .toLowerCase().includes(name.toLowerCase()))
    .map((planet, index) => (
      <tr key={ index }>
        {Object.values(planet).map((filterd, i) => (<td key={ i }>{filterd}</td>))}
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
