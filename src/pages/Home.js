import React, { useContext, useState } from 'react';
import RemoveFilterButton from '../components/RemoveFilterButton';
import Select from '../components/Select';
import Table from '../components/Table';
import PlanetsContext from '../context/PlanetsContext';

const COMPARISON_OPTIONS = ['maior que', 'menor que', 'igual a'];
const SORT_OPTIONS = [
  'name', 'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];

function Home() {
  const { filters: { filterByNumericValues }, columnOptions, orderPlanets,
    data, headers, handleName, handleNumericValues } = useContext(PlanetsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState();
  const [sortColumn, setSortColumn] = useState('name');
  const [sortType, setSortType] = useState();

  return (
    <div>
      <input
        type="text"
        placeholder="Filtre por nome"
        data-testid="name-filter"
        onChange={ ({ target }) => handleName(target.value) }
      />
      <form>
        <Select
          options={ columnOptions }
          testId="column-filter"
          onChange={ setColumn }
        />
        <Select
          options={ COMPARISON_OPTIONS }
          testId="comparison-filter"
          onChange={ setComparison }
        />
        <input
          type="text"
          data-testid="value-filter"
          onChange={ (({ target }) => setValue(target.value)) }
        />
        <button
          type="submit"
          data-testid="button-filter"
          onClick={ (event) => handleNumericValues(event, { column, comparison, value }) }
        >
          Filtrar
        </button>
        <Select
          options={ SORT_OPTIONS }
          testId="column-sort"
          onChange={ setSortColumn }
        />
        <label htmlFor="asc-sort-input">
          Ascendente
          <input
            type="radio"
            data-testid="column-sort-input-asc"
            id="asc-sort-input"
            name="order"
            value="ASC"
            onClick={ ({ target }) => { setSortType(target.value); } }
          />
        </label>
        <label htmlFor="desc-sort-input">
          Descendente
          <input
            type="radio"
            data-testid="column-sort-input-desc"
            id="desc-sort-input"
            name="order"
            value="DESC"
            onClick={ ({ target }) => { setSortType(target.value); } }
          />
        </label>
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ () => orderPlanets(sortColumn, sortType) }
        >
          Ordernar
        </button>
      </form>
      <section className="applied-filters-container">
        {
          filterByNumericValues.map((filter, index) => (
            <RemoveFilterButton key={ filter.column } { ...{ filter, index } } />
          ))
        }
      </section>
      <Table planets={ data } headers={ headers } filters={ filterByNumericValues } />
    </div>
  );
}

export default Home;
