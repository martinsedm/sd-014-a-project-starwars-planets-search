import React, { useContext, useState } from 'react';
import Select from '../components/Select';
import Table from '../components/Table';
import PlanetsContext from '../context/PlanetsContext';

const COLUMN_OPTIONS = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];
const COMPARISON_OPTIONS = ['maior que', 'menor que', 'igual a'];

function Home() {
  const { filters: { filterByNumericValues },
    data, headers, handleName, handleNumericValues } = useContext(PlanetsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState();

  return (
    <div>
      <input
        type="text"
        placeholder="Filtre por nome"
        data-testid="name-filter"
        onChange={ ({ target }) => handleName(target.value) }
      />
      <form
        onSubmit={
          (event) => handleNumericValues(event, { column, comparison, value })
        }
      >
        <Select
          options={ COLUMN_OPTIONS }
          testId="column-filter"
          onClick={ setColumn }
        />
        <Select
          options={ COMPARISON_OPTIONS }
          testId="comparison-filter"
          onClick={ setComparison }
        />
        <input
          type="text"
          data-testid="value-filter"
          onChange={ (({ target }) => setValue(target.value)) }
        />
        <button
          type="submit"
          data-testid="button-filter"
        >
          Filtrar
        </button>
      </form>
      <Table planets={ data } headers={ headers } filters={ filterByNumericValues } />
    </div>
  );
}

export default Home;
