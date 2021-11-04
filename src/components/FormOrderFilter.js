import React, { useContext, useState } from 'react';
import Input from './generic/Input';
import Select from './generic/Select';
import Button from './generic/Button';
import StarwarsSearch from '../Context/StarwarsContext';

function FormOrderFilter() {
  const { planetsFiltred,
    filters,
    setFilters } = useContext(StarwarsSearch);

  const [order, setOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });

  const setFilterOrderGeneric = (value, keyOrder) => {
    setOrder({
      ...order,
      [keyOrder]: value,
    });
  };

  return (
    <form>
      { planetsFiltred.length > 0
      && <Select
        name="column"
        setState={ (value, keyOrder) => setFilterOrderGeneric(value, keyOrder) }
        options={ Object.keys(planetsFiltred[0]) }
        value={ order.column } // valor do state, no valor inincial deve estar o valor padrao
        testId="column-sort"
      />}
      <Input
        type="radio"
        id="ASC"
        name="sort"
        setState={ (value, keyOrder) => setFilterOrderGeneric(value, keyOrder) }
        value="ASC"
        textLabel="ascendente"
        testId="column-sort-input-asc"
      />
      <Input
        type="radio"
        id="DSC"
        name="sort"
        setState={ (value, keyOrder) => setFilterOrderGeneric(value, keyOrder) }
        value="DSC"
        textLabel="descendente"
        testId="column-sort-input-desc"
      />
      <Button
        testId="column-sort-button"
        onClick={ () => setFilters({
          ...filters,
          order: {
            ...order,
          },
        }) }
        text="Ordenar"
      />
    </form>
  );
}

export default FormOrderFilter;
