import React, { useEffect, useContext } from 'react';
import TableContext from '../services/contextPages';

function Form() {
  const {
    setFilters,
    dataTest,
    filters: { filterByName: { name } },
    setFilterPlanets,
  } = useContext(TableContext);

  useEffect(() => {
    function filteredName() {
      const filterResu = dataTest.filter((planets) => planets.name.toLowerCase()
        .includes(name.toLowerCase()));
      setFilterPlanets(filterResu);
    }
    filteredName();
  }, [name, dataTest, setFilterPlanets]);

  const handleChange = ({ target }) => {
    setFilters({ filterByName: { name: target.value } });
  };

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ name }
        onChange={ handleChange }
      />
    </div>
  );
}

export default Form;
