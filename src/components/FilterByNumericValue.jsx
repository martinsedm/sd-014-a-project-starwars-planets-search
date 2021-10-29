import React, { useState } from 'react';
import { useData, useFilterByNumericValue } from '../context/DataContext';

export default function FilterByNumericValue() {
  const { apiDataRaw } = useData();
  const { numericValue, setNumericValue } = useFilterByNumericValue();

  const optionsToNumeric = Object.entries(apiDataRaw[0]).filter((ele) => (
    !Number.isNaN(Number(ele[1]))
  )).map((ele) => ele[0]).filter((ele) => !numericValue
    .some(({ column }) => ele === column));

  const [option, setOption] = useState(optionsToNumeric[0]);
  const [comparator, setComparator] = useState('maior que');
  const [value, setValue] = useState(0);

  function handleClick() {
    const newFilter = {
      column: option,
      comparison: comparator,
      value: Number(value),
    };
    setNumericValue([...numericValue, newFilter]);
    setOption(optionsToNumeric[1]);
    setComparator(comparator);
  }

  return (
    <div>
      <div>
        <select
          name="haveNumValue"
          data-testid="column-filter"
          id="haveNumValue"
          onChange={ (e) => setOption(e.target.value) }
        >
          { optionsToNumeric.map((opt) => (
            <option key={ opt } name="haveNumValue" value={ opt }>
              { opt }
            </option>
          ))}
        </select>
        <select
          name="compNumValue"
          data-testid="comparison-filter"
          id="compNumValue"
          onChange={ ({ target }) => setComparator(target.value) }
        >
          <option name="compNumValue" value="maior que">maior que</option>
          <option name="compNumValue" value="igual a">igual a</option>
          <option name="compNumValue" value="menor que">menor que</option>
        </select>
        <input
          type="number"
          value={ value }
          data-testid="value-filter"
          id="numValue"
          onChange={ ({ target }) => setValue(target.value) }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}
