import React, { useContext, useState } from 'react';
import GlobalContext from '../../context/context';

function NumericFilter() {
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');

  const { setFilters } = useContext(GlobalContext);

  const columnArr = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const handleClick = () => {
    setFilters((prevState) => ({
      ...prevState,
      filterByNumericValues: [
        {
          column,
          comparison,
          value,
        },
      ],
    }));
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => { setColumn(target.value); } }
      >
        {columnArr.map((opt) => (
          <option key={ opt } value={ opt }>{opt}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => { setComparison(target.value); } }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        onChange={ ({ target }) => { setValue(target.value); } }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
}

export default NumericFilter;
