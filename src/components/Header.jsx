import React, { useContext } from 'react';
import Context from '../contexts/Context';
import Input from './atomos/Input';

export default function Header() {
  const { filters, setFilters, planets, setFilterPlanets } = useContext(Context);

  const filteringByName = (inputName) => {
    if (inputName) {
      const filtered = planets.filter((planet) => planet.name.includes(inputName));
      setFilterPlanets(filtered);
    } else {
      setFilterPlanets(planets);
    }
  };

  const handleChange = ({ target: { value } }) => {
    filteringByName(value);
    // https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
    setFilters({
      ...filters,
      filterByName: {
        ...filters.filterByName,
        name: value,
      },
    });
  };

  return (
    <header>
      <h1>Projeto Star Wars - Trybe</h1>
      <Input
        value={ filters.filterByName.name }
        testId="name"
        placeHolder="Filtrar por nome"
        onChange={ handleChange }
      />
    </header>
  );
}
