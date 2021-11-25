import React, { useContext, useEffect, useState } from 'react';

import PlanetsContext from '../Context/PlanetsContext';
import PlanetDetails from './PlanetDetails';

export default function PlanetsList() {
  const { data } = useContext(PlanetsContext);
  const [filterPlanets, setPlanets] = useState(data);
  const [searchText, setSearchText] = useState('');
  const [numericFilters, setNumFilter] = useState([]);

  const defaultSelects = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const [selects, setSelects] = useState(defaultSelects);
  const [selectFilters, setSelectFilters] = useState([]);

  const setFilters = () => {
    const column = document.getElementById('column').value;
    const comparison = document.getElementById('comparison').value;
    const number = document.getElementById('value').value;

    const filtros = [
      ...numericFilters,
      {
        column,
        comparison,
        number,
      },
    ];

    const modifySelects = selects.filter((e) => e !== column);

    setSelectFilters(filtros);
    setNumFilter(filtros);
    setSelects(modifySelects);
  };

  const renderInputText = () => (
    <input
      data-testid="name-filter"
      type="text"
      onChange={ ({ target }) => setSearchText(target.value) }
    />
  );

  const renderNumericFiltersForm = () => (
    <form>
      <select
        id="column"
        data-testid="column-filter"
      >
        { selects.map((e, index) => <option key={ index } value={ e }>{ e }</option>)}
      </select>
      <select
        id="comparison"
        data-testid="comparison-filter"
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        id="value"
        type="number"
        data-testid="value-filter"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setFilters() }
      >
        Filtrar
      </button>
    </form>
  );

  useEffect(() => {
    const planetsFilter = (text) => {
      const planets = data.filter(({ name }) => name.includes(text));
      setPlanets(planets);
    };
    planetsFilter(searchText);
  }, [searchText, data]);

  useEffect(() => {
  }, []);

  return (
    <main>
      { renderInputText() }
      { renderNumericFiltersForm() }
      {
        selectFilters.map(({ column, comparison, number }, index) => (
          <section key={ index } id={ column }>
            <p>{`${column} ${comparison} ${number}`}</p>
            <button type="button" value={ column }>X</button>
          </section>
        ))
      }
      <table>
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
        { filterPlanets.map((e, index) => <PlanetDetails key={ index } planet={ e } />)}
      </table>
    </main>
  );
}
