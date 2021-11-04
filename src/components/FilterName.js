import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

// Req. 2: Criação de input para filtro através do nome do planeta
function FilterName() {
  const { filter, setFilter } = useContext(PlanetsContext); // são trazidos de Provider através do parâmetro de value

  // função que recebe o valor digitado no input e salva na variável name
  const handleChange = ({ target }) => {
    const { value } = target;
    setFilter({
      ...filter, // itens salvos em filter até o momento
      filters: {
        filterByName: {
          name: value,
        },
      },
    });
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Filtrar por nome"
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </div>
  );
}

export default FilterName;
