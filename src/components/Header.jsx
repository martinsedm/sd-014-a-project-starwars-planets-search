import React, { useContext } from 'react';

import AppContext from '../context/AppContext';

import Loading from './Loading';

export default function Header() {
  const { changeName, loading } = useContext(AppContext);
  if (loading) return <Loading />;
  return (
    <header className="mb-4">
      <h1 className="font-semibold text-4xl text-center mb-4">Starwars Planets Search</h1>
      <input
        data-testid="name-filter"
        className="bg-gray-500 text-white text-center"
        placeholder="Filtrar por texto"
        onChange={ (e) => changeName(e.target.value.toLowerCase()) }
      />
    </header>
  );
}
