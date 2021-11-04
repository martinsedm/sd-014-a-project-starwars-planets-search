import React, { useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppContext from '../context/AppContext';

import Loading from './Loading';

export default function Header() {
  const {
    changeName,
    loading,
    setColumn,
    setComparison,
    setNumber,
    setNumericValues,
    filters,
  } = useContext(AppContext);

  const columnOptions = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const comparisonOptions = [
    'maior que',
    'menor que',
    'igual a',
  ];

  useEffect(() => {
    console.log(filters.filterByNumericValues);
  }, [filters]);

  if (loading) return <Loading />;
  return (
    <header className="mb-4">
      <h1 className="font-semibold text-4xl text-center mb-4">Starwars Planets Search</h1>
      <input
        data-testid="name-filter"
        className="bg-gray-500 text-white text-center mx-10"
        placeholder="Filtrar por texto"
        onChange={ (e) => changeName(e.target.value.toLowerCase()) }
      />

      <select
        data-testid="column-filter"
        onChange={ (e) => setColumn(e.target.value) }
      >
        { columnOptions.map((columnOption) => (
          <option
            key={ uuidv4() }
            value={ columnOption }
          >
            { columnOption }
          </option>
        ))}
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ (e) => setComparison(e.target.value) }
      >
        {comparisonOptions.map((comparisonOption) => (
          <option
            key={ uuidv4() }
            value={ comparisonOption }
          >
            { comparisonOption }
          </option>
        ))}
      </select>

      <input
        className="bg-gray-500 text-white text-center"
        data-testid="value-filter"
        placeholder="Digite um número"
        onChange={ (e) => setNumber(Number(e.target.value)) }
      />

      <button
        type="button"
        className="mx-3 px-2 py-1 bg-blue-400 rounded-md text-black"
        data-testid="button-filter"
        onClick={ () => setNumericValues() }
      >
        Filtrar
      </button>

    </header>
  );
}
