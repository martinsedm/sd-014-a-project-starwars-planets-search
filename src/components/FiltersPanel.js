import React, { useContext } from 'react';
import NameFilter from './NameFilter';
import NumericFilter from './NumericFilter';
import SortFilter from './SortFilter';
import SWContext from '../context/SWContext';

function FiltersPanel() {
  const {
    resetFilters,
  } = useContext(SWContext);

  return (
    <section>
      <NameFilter />
      <NumericFilter />
      <br />
      <SortFilter />
      <button type="button" onClick={ resetFilters }>
        Resetar Filtros
      </button>
    </section>
  );
}

export default FiltersPanel;
