import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import TableRow from './TableRow';

function Table() {
  const {
    order,
    setOrder,
    loading,
    planets,
    getPlanetsData,
    numberFilters,
    filters,
  } = useContext(StarWarsContext);
  const [planetsUpdated, setPlanetsUpdated] = useState(planets);

  useEffect(() => {
    setPlanetsUpdated(planets);
  }, [getPlanetsData, planets]);

  if (loading) return <p>Loading...</p>;

  const filterPlanets = () => {
    const newPlanets = [...planetsUpdated];
    const { filterByNumericValues } = numberFilters;
    const { filterByName } = filters;
    if (filterByName.name) {
      return planetsUpdated.filter(
        ({ name }) => name.toLowerCase().includes(filterByName.name),
      );
    }
    if (filterByNumericValues[0]) {
      return filterByNumericValues.reduce((accumulator, currentValue) => {
        const { comparison, column, value } = currentValue;
        switch (comparison) {
        case 'maior que':
          console.log(' xulambs', planetsUpdated);
          accumulator = planetsUpdated
            .filter((planet) => Number(planet[column]) > Number(value));
          break;

        case 'menor que':
          accumulator = planetsUpdated
            .filter((planet) => Number(planet[column]) < Number(value));
          break;

        case 'igual a':
          accumulator = planetsUpdated
            .filter((planet) => Number(planet[column]) === Number(value));
          break;

        default:
          break;
        }
        return accumulator;
      }, [planetsUpdated]);
    }
    return newPlanets;
  };

  function sortFilter() {
    const { column, sort } = order;
    console.log('column', column, 'sort', sort);
    const arrOfPlanets = filterPlanets();

    const comparar = (a, b) => {
      const descNumber = -1;
      if (a > b) {
        return 1;
      }

      if (a < b) {
        return descNumber;
      }

      return 0;
    };

    if (column === 'name') {
      if (sort === 'ASC') {
        arrOfPlanets.sort((a, b) => comparar(a[column], b[column]));
      }

      if (sort === 'DESC') {
        arrOfPlanets.sort((a, b) => comparar(b[column], a[column]));
      }
    } else {
      if (sort === 'ASC') {
        arrOfPlanets.sort((a, b) => comparar(Number(a[column]), Number(b[column])));
      }

      if (sort === 'DESC') {
        arrOfPlanets.sort((a, b) => comparar(Number(b[column]), Number(a[column])));
      }
    }

    return (arrOfPlanets
      .map((planet, index) => <TableRow key={ index } planet={ planet } />));
  }

  function handleChangeSorte({ target }) {
    setOrder({
      ...order,
      sort: target.value,
    });
  }

  return (

    <div>
      <div>
        <select
          value={ order.column }
          onChange={ ({ target }) => setOrder({
            ...order,
            column: target.value,
          }) }
          data-testid="column-sort"
        >
          <option value="name">name</option>
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          name="radio-btn"
          value="ASC"
          onChange={ handleChangeSorte }
        />
        Ascendente
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          name="radio-btn"
          value="DESC"
          onChange={ handleChangeSorte }
        />
        Descendente
        <button
          data-testid="column-sort-button"
          type="button"
        >
          Ordenar
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          { sortFilter() }
        </tbody>
      </table>
    </div>

  );
}

export default Table;
