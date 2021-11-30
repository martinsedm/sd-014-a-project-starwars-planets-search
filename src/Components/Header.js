import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../Context/PlanetsContext';
import SortFilter from './SortFilter';
import FilterSelection from './filterSelection';
import BuscaTexto from './BuscaTexto';

function Header() {
  const { planetsData, setName, setValue,
    setColumn, setComparison, setFiltered } = useContext(PlanetsContext);
  const filterByTextName = (name) => {
    if (name) {
      setFiltered(planetsData.filter((pl) => pl.name.includes(name)));
    } else {
      setFiltered(planetsData);
    }
  };
  useEffect(filterByTextName, [planetsData]);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
    case 'name':
      setName(value);
      filterByTextName(value);
      break;
    case 'column':
      setColumn(value);
      break;
    case 'comparison':
      setComparison(value);
      break;
    case 'value':
      setValue(value);
      break;
    default:
    }
  };

  return (
    <form>
      <BuscaTexto handleChange={ handleChange } />
      <FilterSelection handleChange={ handleChange } />
      <SortFilter />
    </form>
  );
}

export default Header;
