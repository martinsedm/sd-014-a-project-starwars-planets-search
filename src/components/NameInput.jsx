import React, { useCallback, useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';

function NameInput() {
  const { setResults, fullResults } = useContext(AppContext);
  const [nameFilter, setNameFilter] = useState('');
  const handleChange = useCallback((usableText) => {
    if (usableText === '') return setResults(fullResults);
    const newResults = fullResults.filter((planet) => planet.name.includes(nameFilter));
    setResults(newResults);
  }, [fullResults, nameFilter, setResults]);
  useEffect(() => {
    handleChange(nameFilter);
  }, [handleChange, nameFilter]);
  return (
    <input
      type="text"
      data-testid="name-filter"
      placeholder="Digite algum texto"
      value={ nameFilter }
      onChange={ ({ target: { value } }) => setNameFilter(value) }
    />
  );
}

export default NameInput;
