import React, { useContext, useState, useEffect } from 'react';
import planetContext from '../context';

function FilterInput() {
  const { setFilter } = useContext(planetContext);
  const [name, setName] = useState('');

  useEffect(() => {
    // setFilter({ filters: { ...filter.filters, filterByName: { name } } });
    // passando uma callback como parametro do setState para garantir que está pegando o valor correto do estado global.
    setFilter((prevFilters) => (
      { filters: { ...prevFilters.filters, filterByName: { name } } }
    ));
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
