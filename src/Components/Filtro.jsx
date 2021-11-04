import React, { useContext } from 'react';
import APIContext from '../Context/APIContext';

function Filtro() {
  const {
    nameFilter,
    setNameFilter,
    setColuna, setComparacao, setValor, setFiltrado } = useContext(APIContext);

  const changeName = (e) => {
    setNameFilter(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        value={ nameFilter }
        onChange={ changeName }
        data-testid="name-filter"
      />
      <select
        name="column"
        data-testid="column-filter"
        onChange={ (e) => setColuna(e.target.value) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ (e) => setComparacao(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        name="value"
        type="number"
        data-testid="value-filter"
        onChange={ (e) => setValor(e.target.value) }
      />
      <button
        type="submit"
        data-testid="button-filter"
        onClick={ () => setFiltrado(true) }
      >
        Filtrar
      </button>
    </>
  );
}
Filtro.contextType = APIContext;
export default Filtro;
