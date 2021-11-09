import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import InputFilter from './InputFilter';

function Filters() {
  const { filters, handleChange } = useContext(PlanetsContext);

  const { filterByName: { name } } = filters;

  return (
    <section>
      <InputFilter
        setup={
          ['text', 'filterByName', 'name', name, handleChange, 'name-filter']
        }
      />
    </section>
  );
}

export default Filters;
