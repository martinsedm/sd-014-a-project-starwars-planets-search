import React, { useContext } from 'react';
import SelectForms from './SelectForms';
import { types, comparisonFilter } from '../consts';
import StarWarsContext from '../context/StarWarsContext';

const Filters = () => {
  const { setFilter,
    filter, filter: { filterByNumericValues },
    /* setFiltersSelect, setNewData,  */newData, setisFilter,
  } = useContext(StarWarsContext);

  const handleOption = (({ target: { name, value } }) => {
    const index = (filterByNumericValues.length - 1);
    setFilter({ ...filter,
      filterByNumericValues: [{ ...filterByNumericValues[index], [name]: value }] });
  });

  const handleClick = () => {
    console.log('oi');
    // const index = (filterByNumericValues.length - 1);
    setisFilter(true);
    // setNewData(setFiltersSelect(filterByNumericValues[index]));
    // newOption(filterByNumericValues[index]);
    // setFilter({ ...filter,
    //   filterByNumericValues: [...filterByNumericValues, { column, comparison, value }] });
  };

  return (
    <div>
      {console.log(newData, 'newData in Filters')}
      <SelectForms values={ types } handleChange={ handleOption } />
      <SelectForms values={ comparisonFilter } handleChange={ handleOption } />
      <input
        type="number"
        onChange={ handleOption }
        name="value"
        data-testid="value-filter"
        min="0"
        placeholder="0"
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
};

export default Filters;
