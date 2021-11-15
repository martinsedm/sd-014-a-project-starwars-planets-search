import React, { useContext, useState } from 'react';
import Select from '../components/Select';
import Table from '../components/Table';
import PlanetsContext from '../context/PlanetsContext';

const COMPARISON_OPTIONS = ['maior que', 'menor que', 'igual a'];

function Home() {
  const { filters: { filterByNumericValues }, columnOptions,
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
      </form>
      <Table planets={ data } headers={ headers } filters={ filterByNumericValues } />
    </div>
  );
}

export default Home;
