import React, { useContext, useState } from 'react';
import Allcontext from '../context/context';

const Header = () => {
  const { updateSearch, filterValues } = useContext(Allcontext);
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [valueNumber, setValueNumber] = useState('');

  const numberSearch = ({ target: { value } }) => {
    setValueNumber(value);
  };

  const submitForm = () => {
    filterValues(column, comparison, valueNumber);
  };

  return (
    <header>
      <h3>Projeto Star Wars - Ttybe</h3>
      <input data-testid="name-filter" onChange={ updateSearch } type="text" />
      <div>
        <select
          id="column-filter"
          onChange={ ({ target: { value } }) => setColumn(value) }
          data-testid="column-filter"
        >
          <option value="population">population</option>
          <option value="orbital_period">orbital_period</option>
          <option value="diameter">diameter</option>
          <option value="rotation_period">rotation_period</option>
          <option value="surface_water">surface_water</option>
        </select>

        <select
          onChange={ ({ target: { value } }) => setComparison(value) }
          data-testid="comparison-filter"
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input onChange={ numberSearch } data-testid="value-filter" type="text" />

        <button
          onClick={ submitForm }
          type="button"
          data-testid="button-filter"
        >
          buscar
        </button>
      </div>
    </header>
  );
};

export default Header;
