import React, { useContext, useState, useEffect } from 'react';
import planetContext from '../context';

function FilterInput() {
  const { filter, setFilter } = useContext(planetContext);
  const [name, setName] = useState('');

  useEffect(() => {
    setFilter({ filters: { ...filter.filters, filterByName: { name } } });
  }, [name, setFilter]);

  return (
    <div>
      <form>
        <input
          type="text"
          data-testid="name-filter"
          value={ name }
          placeholder="Digite o nome de uma planeta"
          onChange={ ({ target }) => setName(target.value) } // target recebe o valor da pesquisa
        />
      </form>
    </div>
  );
}

export default FilterInput;
