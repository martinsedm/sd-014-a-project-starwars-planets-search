import React from 'react';
import Input from './generic/Input';
import Select from './generic/Select';
import Button from './generic/Button';

function FormOrderFilter() {
  const colunsOrder = ['option 1', 'option 2', 'option3'];

  return (
    <form>
      <Select
        name="ColunasNumericas"
        setState={ (value) => console.log(value) }
        testId="column-filter"
        options={ colunsOrder }
        value="option 2" // valor do state, no valor inincial deve estar o valor padrao
      />
      <Input
        type="radio"
        id="ASC"
        name="order"
        setState={ (value) => console.log(value) }
        value="ASC"
        textLabel="ascendente"
      />
      <Input
        type="radio"
        id="DESC"
        name="order"
        setState={ (value) => console.log(value) }
        value="DESC"
        textLabel="descendente"
      />
      <Button
        testId="column-sort-button"
        onClick={ () => console.log('função que manipula state') }
        text="Ordenar"
      />
    </form>
  );
}

export default FormOrderFilter;
