import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AppContext from '../context/AppContext';

import Loading from './Loading';

export default function Header() {
  const {
    changeName,
    loading,
    setNumericValues,
    removeSelectedColumn,
    columnOptions,
  } = useContext(AppContext);

  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setColumn(columnOptions[0]);
  }, [columnOptions]);

  const comparisonOptions = [
    'maior que',
    'menor que',
    'igual a',
  ];

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
        value={ column }
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
        value={ comparison }
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
        onClick={ () => {
          setNumericValues(column, comparison, number);
          removeSelectedColumn(column);
        } }
      >
        Filtrar
      </button>

    </header>
  );
}
