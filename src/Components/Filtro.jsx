import React, { useContext } from 'react';
import APIContext from '../Context/APIContext';

function Filtro() {
  const {
    nameFilter,
    setNameFilter,
    setColuna,
    setComparacao,
    setValor,
    setFiltrado,
    filtros,
    coluna,
    comparacao,
    valor,
    filtro,
    setFiltro, } = useContext(APIContext);
  const { filterByName, filterByNumericValues } = filtros.filters;

  const changeName = (e) => {
    setNameFilter(e.target.value);
  };

  const filterBtn = () => {
    setFiltrado(true);
    setFiltro([...filtro, { column: coluna, comparison: comparacao, value: valor }]);
    console.log(filtro);
    // filterByNumericValues.push(...filtro);
    console.log(filterByNumericValues);
    console.log(filterByNumericValues.length);
  };

  return (
    <>
      <input
        type="text"
        value={ filterByName.name }
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
        onClick={ () => filterBtn() }
      >
        Filtrar
      </button>
      {filtro.length > 0 && filtro.map((cur, i) => (
        <p key={ `filtro-${i}` }>{`${cur.column} ${cur.comparison} ${cur.value}`}</p>
      ))}
    </>
  );
}
Filtro.contextType = APIContext;
export default Filtro;
