import React, { useContext, useState } from 'react' ;
import FilterContext from '../Context/FilterContext';

function Header() {
  const { handlerChangeName, handleFilter } = useContext(FilterContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState('');

  const columnOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'
  ];
  const comparisonOptions = ['maior que', 'menor que', 'igual a'];

  const handleClick = () => handleFilter({ column, comparison, value: number });


  return (
    <Header>
      <input
        type="text"
        placeholder="Digite nome do planeta"
        data-testid="name-filter"
        onChange={ handlerChangeName }
      />
      <select
        data-testid="column-filter"
        onChange={ ({ target: { value } }) => setColumn(value) }
      >
        {columnOptions.map((option) => (
          <option value={ option } key={ option }>{option}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target: { value } }) => setComparison(value) }
      >
        {comparisonOptions.map((option) => (
          <option value={ option } key={ option }>{option}</option>
        ))}
      </select>
      <input
        type="number"
        min="0"
        data-testid="value-filter"
        onChange={ ({ target: { value } }) => setNumber(value) }
      />
      <button type="button" data-testid="button-filter" onClick={ handleClick }>
        Filtrar
      </button>
    </Header>
  );
}

export default Header;