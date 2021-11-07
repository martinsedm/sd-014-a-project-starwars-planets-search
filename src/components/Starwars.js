import React, { useContext } from 'react';
import '../Starwars.css';
import Table from './Table';
import StarwarsContext from '../context/StarwarsContext';

function Starwars() {
  const options = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const {
    data,
    name,
    column,
    comparison,
    values,
    filterByNumericValues,
    setName,
    setColumn,
    setComparison,
    setValues,
    setFilter,
    setFilterByNumericValues,
  } = useContext(StarwarsContext);

  const handleClick = () => {
    let comparisons;
    if (comparison === 'maior que' && values !== '') {
      comparisons = data
        .filter((plan) => parseInt(plan[column], 10) > parseInt(values, 10));
    }

    if (comparison === 'menor que' && values !== '') {
      comparisons = data
        .filter((plan) => parseInt(plan[column], 10) < parseInt(values, 10));
    }

    if (comparison === 'igual a' && values !== '') {
      comparisons = data
        .filter((plan) => parseInt(plan[column], 10) === parseInt(values, 10));
    }
    setFilter(comparisons);
    setFilterByNumericValues([...filterByNumericValues, column]);
  };

  return (
    <div>
      <header>
        <h1>Star Wars</h1>
      </header>
      <label htmlFor="input">
        <input
          type="text"
          id="input"
          value={ name }
          data-testid="name-filter"
          onChange={ ({ target: { value } }) => setName(value) }
        />
      </label>
      <div>
        <label htmlFor="column-filter">
          <select
            data-testid="column-filter"
            name="select"
            id="column-filter"
            value={ column }
            onChange={ ({ target: { value } }) => setColumn(value) }
          >
            { options.filter((option) => !filterByNumericValues.includes(option))
              .map((opt) => <option key={ opt }>{ opt }</option>)}
          </select>
        </label>
        <label htmlFor="comparison-filter">
          <select
            data-testid="comparison-filter"
            name="select"
            id="comparison-filter"
            value={ comparison }
            onChange={ ({ target: { value } }) => setComparison(value) }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
        </label>
        <label htmlFor="input-number">
          <input
            type="number"
            id="input-number"
            value={ values }
            data-testid="value-filter"
            onChange={ ({ target: { value } }) => setValues(value) }
          />
        </label>
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar
        </button>
        <Table />
      </div>
    </div>
  );
}

export default Starwars;
