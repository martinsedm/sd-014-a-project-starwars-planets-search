import React, { useState, useContext, useEffect } from 'react';
import ColumnFilter from './ColumnFilter';
import ComparisonFilter from './ComparisonFilter';
import FiltersButton from './FiltersButton';
import FilterTags from './FilterTags';
import ValueFilter from './ValueFilter';
import starContext from '../context/starContext';
import OrderSelector from './OrderSelector';

export default function Header() {
  const { options } = useContext(starContext);
  const [column, setColumn] = useState(options[0]);
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(0);

  useEffect(() => { setColumn(options[0]); }, [options]);

  return (
    <>
      <ColumnFilter column={ setColumn } />
      <ComparisonFilter comparison={ setComparison } />
      <ValueFilter value={ setValue } />
      <FilterTags />
      <FiltersButton allFilters={ { column, comparison, value } } />
      <OrderSelector />
    </>
  );
}
