import React, { useContext } from 'react';
import StarsContext from '../context/myContext';

export default function FilterCaracteristic() {
  const { numericFilter, setNumericFilter,
    filters: { filterByNumericValues } } = useContext(StarsContext);
  const caracteristics = [
    'population', 'orbital_period', 'diameter', 'rotation_period',
    'surface_water'];

  function handleChange({ target }) {
    const { value } = target;
    setNumericFilter({
      ...numericFilter,
      caracteristic: value,
    });
  }

  const removeOption = () => {
    filterByNumericValues.forEach(({ caracteristic }) => {
      caracteristics.splice(caracteristics.indexOf(caracteristic), 1);
    });
    return caracteristics;
  };

  return (
    <select
      data-testid="column-filter"
      onChange={ handleChange }
      value={ numericFilter.caracteristic }
    >
      {removeOption()
        .map((caracteristic, i) => (
          <option
            key={ i }
            className="form-control"
          >
            {caracteristic}
          </option>))}
    </select>
  );
}
