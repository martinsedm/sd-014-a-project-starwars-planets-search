import React, { useContext, useState } from 'react';
import myContext from '../MyContext/MyContext';
import '../styles/table.css';
import Loading from './Loading';

function Table() {
  const { planets, loading, filtros, setFiltros } = useContext(myContext);
  const [isFilter, setIsFilter] = useState(false);
  const { filters: { filterByName } } = filtros;
  const nome = 'name';

  const handleTextFilter = (event) => {
    const stateFilter = {
      filters: {
        filterByName: {
          name: event.target.value,
        },
      },
    };
    setFiltros(stateFilter);
    setIsFilter(true);
  };

  const renderAllPlanets = () => (
    planets.map((planeta, index) => (
      <tr key={ index }>
        <td>{ planeta.name }</td>
        <td>{ planeta.rotation_period }</td>
        <td>{ planeta.orbital_period }</td>
        <td>{ planeta.diameter }</td>
        <td>{ planeta.climate }</td>
        <td>{ planeta.gravity }</td>
        <td>{ planeta.terrain }</td>
        <td>{ planeta.surface_water }</td>
        <td>{ planeta.population }</td>
        <td>{ planeta.films }</td>
        <td>{ planeta.created }</td>
        <td>{ planeta.edited }</td>
        <td>{ planeta.url }</td>
      </tr>
    ))
  );

  return (
    loading ? <Loading /> : (
      <main>
        <input type="text" data-testid="name-filter" onChange={ handleTextFilter } />
        <table>
          <thead>
            <tr>
              { Object.keys(planets[0]).map((title, index) => {
                if (title === 'residents') { return null; }
                return (
                  <th key={ index } className="title">
                    {title}
                  </th>
                );
              }) }
            </tr>
          </thead>

          <tbody>
            { isFilter ? planets.filter((plt) => plt.name.includes(filterByName[nome]))
              .map((planeta, index) => (
                <tr key={ index }>
                  <td>{ planeta.name }</td>
                  <td>{ planeta.rotation_period }</td>
                  <td>{ planeta.orbital_period }</td>
                  <td>{ planeta.diameter }</td>
                  <td>{ planeta.climate }</td>
                  <td>{ planeta.gravity }</td>
                  <td>{ planeta.terrain }</td>
                  <td>{ planeta.surface_water }</td>
                  <td>{ planeta.population }</td>
                  <td>{ planeta.films }</td>
                  <td>{ planeta.created }</td>
                  <td>{ planeta.edited }</td>
                  <td>{ planeta.url }</td>
                </tr>
              ))
              : renderAllPlanets() }

          </tbody>
        </table>
      </main>
    )
  );
}

export default Table;
