import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Filters() {
  const typeFilter = ['TODOS', 'population', 'orbital_period', 'diameter',
    'rotation_period', 'surface_water'];
  const compare = ['TODOS', 'maior que', 'menor que', 'igual a'];
  const { data, handleChangeColum, handleChangeComparison, handleChangeNumber,
    filters: { filterByNumericValues } } = useContext(StarWarsContext);

  /* const Filters = (coluna, compara, numero) => {
    switch (compara) {
    case 'maior que':
      return data.filter((planet) => Number(planet[coluna]) > Number(numero));
    case 'menor que':
      return data.filter((planet) => Number(planet[coluna]) < Number(numero));
    case 'igual a':
      filteredNerics = datau
        .filter((planet) => Number(planet[coluna]) === Number(numero));
    default:
      return filteredNumerics;
    }
  }; */

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ handleChangeColum }
        value={ filterByNumericValues[0].colum }
      >
        {typeFilter.map((types) => (
          <option key={ types }>{types}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ handleChangeComparison }
        value={ filterByNumericValues[0].compare }
      >
        {compare.map((comparison) => (
          <option key={ comparison }>{comparison}</option>
        ))}
      </select>
      <input
        type="number"
        value={ filterByNumericValues[0].number }
        data-testid="value-filter"
        onChange={ handleChangeNumber }
      />
      <input type="button" data-testid="button-filter" value="FILTER" />
    </div>
  );
}
