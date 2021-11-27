import React, { useContext } from 'react';
import Context from '../contexts/Context';
import Button from './atomos/Button';
import Input from './atomos/Input';

export default function Header() {
  const { columns, filters, setFilters } = useContext(Context);
  // const [numericValues, setNumericValues ] = useState({});
  const comparisons = ['maior que', 'menor que', 'igual a'];

  const handleChange = ({ target: { value, name } }) => {
    setFilters({
      ...filters,
      filterByNumericValues: [
        {
          ...filters.filterByNumericValues[0],
          [name]: value,
        },
      ],
    });
  };

  const handleClick = (() => {
    console.log('click');
  });

  if (!columns) return <span>Loading...</span>;

  return (
    <header>
      <select
        value={ filters.filterByNumericValues[0].column }
        name="column"
        onChange={ handleChange }
        data-testid="column-filter"
      >
        {columns.map((col) => (
          <option key={ col }>{ col }</option>
        ))}
      </select>
      <select
        value={ filters.filterByNumericValues[0].comparison }
        name="comparison"
        onChange={ handleChange }
        data-testid="comparison-filter"
      >
        {comparisons.map((comp) => (
          <option key={ comp }>{ comp }</option>
        ))}
      </select>
      <Input
        type="number"
        testId="value"
        name="value"
        onChange={ handleChange }
        value={ filters.filterByNumericValues[0].value }
      />
      <Button label="Filtrar" onClick={ handleClick } />
    </header>
  );
}
