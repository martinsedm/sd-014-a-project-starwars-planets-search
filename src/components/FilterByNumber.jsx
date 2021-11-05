import React, { useState } from 'react';
import { useDataContext, useNumberFilter } from '../context/DataContext';

export default function FilterByNumber() {
  const { apiData } = useDataContext();
  const { numericValue, setNumericValue } = useNumberFilter();
  const optionsToNumeric = Object.entries(apiData[0]).filter((element) => (
    !Number.isNaN(Number(element[1]))
  )).map((element) => element[0]).filter((element) => !numericValue
    .some(({ column }) => element === column));

  const [option, setOption] = useState(optionsToNumeric[0]);
  const [compare, setCompare] = useState('>');
  const [value, setValue] = useState(0);

  function handleClick() {
    const newFilter = {
      column: option,
      comparison: compare,
      value: Number(value),
    };
    setNumericValue([...numericValue, newFilter]);
    setOption(optionsToNumeric[1]);
    setCompare(compare);
  }

  return (
    <div>
      <select
        name="haveNumValue"
        data-testid="column-filter"
        id="haveNumValue"
        onChange={ ({ target }) => setOption(target.value) }
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
        onChange={ ({ target }) => setCompare(target.value) }
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
  );
}
