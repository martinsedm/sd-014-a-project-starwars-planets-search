import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { filterByNumber, selectColumn } = useContext(PlanetsContext);
  console.log(filterByNumber);
  const [filters, setFilters] = useState(
    {
      filterByName: {
        name: '',
      },
      filterByNumericValues: [
        {
          column: 'population',
          comparison: 'maior que',
          value: '100000',
        },
      ],
    },
  );
  const [filteredPlanets, setFilteredPlanet] = useState([]);
  const [isSearching, setIsSearchin] = useState(false);
  const sortSelect = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];

  const planetFilter = (e) => {
    if (filters.filterByName.name === '') setIsSearchin(false);
    filters.filterByName.name = e.target.value;
    const { name, value } = e.target;
    setFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // trecho abaixo retirado de https://stackoverflow.com/questions/44469548/es6-filter-data-with-case-insensitive-term
    setFilteredPlanet(filterByNumber.filter(
      (planet) => planet.name.toLowerCase().includes(
        filters.filterByName.name.toLowerCase(),
      ),
    ));
    setIsSearchin(true);
  };
  const [sortOrder, setSort] = useState('ASC');
  const handleSort = ({ target }) => {
    if (target.id === 'ASC') setSort(target.value);
    if (target.id === 'DESC') setSort(target.value);
  };

  return (
    <div>

      <input
        data-testid="name-filter"
        value={ filters.filterByName.name }
        type="text"
        onChange={ planetFilter }
      />
      <select data-testid="column-sort">
        { sortSelect.map((select) => (
          <option
            value={ select }
            key={ select }
          >
            {select}
          </option>))}
      </select>
      <form>
        <label htmlFor="asc">
          ascendente
          <input
            checked={ sortOrder === 'ASC' }
            id="asc"
            type="radio"
            value="ASC"
            onChange={ handleSort }
            data-testid="column-sort-input-asc"
          />
        </label>
        <label htmlFor="des">
          descendente
          <input
            checked={ sortOrder === 'DESC' }
            id="des"
            type="radio"
            value="DESC"
            onChange={ handleSort }
            data-testid="column-sort-input-desc"
          />
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
        >
          Ordenar

        </button>
      </form>

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
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {
            isSearching ? filteredPlanets.map((planet) => (
              <tr key={ planet.name }>
                <td>{planet.name}</td>
                <td>{planet.rotation_period}</td>
                <td>{planet.orbital_period}</td>
                <td>{planet.diameter}</td>
                <td>{planet.climate}</td>
                <td>{planet.gravity}</td>
                <td>{planet.terrain}</td>
                <td>{planet.surface_water}</td>
                <td>{planet.population}</td>
                <td>{planet.films}</td>
                <td>{planet.created}</td>
                <td>{planet.edited}</td>
                <td>{planet.url}</td>
              </tr>))
              : filterByNumber.map((planet) => (
                <tr key={ planet.name }>
                  <td>{planet.name}</td>
                  <td>{planet.rotation_period}</td>
                  <td>{planet.orbital_period}</td>
                  <td>{planet.diameter}</td>
                  <td>{planet.climate}</td>
                  <td>{planet.gravity}</td>
                  <td>{planet.terrain}</td>
                  <td>{planet.surface_water}</td>
                  <td>{planet.population}</td>
                  <td>{planet.films}</td>
                  <td>{planet.created}</td>
                  <td>{planet.edited}</td>
                  <td>{planet.url}</td>
                </tr>))
          }
        </tbody>
      </table>
    </div>
  );
}
export default Table;
