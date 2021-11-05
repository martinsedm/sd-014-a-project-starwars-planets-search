import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import starContext from '../context/starContext';

export default function FiltersButton({ allFilters }) {
  const { filters, setFilters, setData, data, setOptions } = useContext(starContext);
  const { filterByNumericValues } = filters;
  const { column, value, comparison } = allFilters;
  function handleclick() {
    setData(data.filter((el) => {
      switch (comparison) {
      case 'maior que':
        return parseInt(el[column], 10) > parseInt(value, 10);
      case 'menor que':
        return parseInt(el[column], 10) < parseInt(value, 10);
      case 'igual a':
        return parseInt(el[column], 10) === parseInt(value, 10);
      default:
        return data;
      }
    }));
    const providerObject = { column,
      comparison,
      value,
    };

    setOptions((prevState) => ([
      ...prevState.filter((valor) => valor !== column),
    ]));

    setFilters({ ...filters,
      filterByNumericValues: [...filterByNumericValues, providerObject] });
  }
  return (
    <button
      onClick={ handleclick }
      data-testid="button-filter"
      type="button"
    >
      filtrar
    </button>
  );
}

FiltersButton.propTypes = {
  allFilters: PropTypes.shape({
    column: PropTypes.string,
    comparison: PropTypes.string,
    value: PropTypes.number,
  }).isRequired,
};
