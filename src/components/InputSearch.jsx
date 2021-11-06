import React, { useContext } from 'react';
import PlanetsContext from '../contexts/PlanetsContext';

function InputSearch() {
  const { filter, setFilter } = useContext(PlanetsContext);
  // Apenas atualizando o estado com o valor do input
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFilter({ ...filter, filterByName: { [name]: value } });
  };

  // filters: {
  //   filterByName: {
  //     name: '',
  //   },
  // },

  return (
    <form>
      <input
        data-testid="name-filter"
        type="text"
        name="name"
        placeholder="filtrar por nome"
        onChange={ handleChange }
      />
    </form>
  );
}

export default InputSearch;
