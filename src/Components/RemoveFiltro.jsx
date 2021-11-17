import React, { useContext, useEffect, useState } from 'react';
import PlanetsContext from '../ContextAPI/PlanetsContext';

function RemoveFiltro() {
  const { filter: { filters: { filterByNumericValues } } } = useContext(PlanetsContext);
  const [click, setClick] = useState(false);

  const handleClick = (index) => {
    filterByNumericValues.splice(index, 1);
    setClick(!click);
    console.log(click);
  };

  const criandoFiltros = () => filterByNumericValues
    .map(({ column, comparison, value }, index) => (
      <div key={ index }>
        <span>{`${column} | ${comparison} | ${value}`}</span>
        <button type="button" onClick={ () => handleClick(index) }>X</button>
      </div>
    ));

  useEffect(() => {
    console.log('aqui');
    criandoFiltros();
  }, [click]);

  return (
    <div>
      { filterByNumericValues ? criandoFiltros() : null }
    </div>
  );
}

export default RemoveFiltro;
