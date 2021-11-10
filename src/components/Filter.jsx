import React from 'react';
import Context from '../context/Context';
import InputValue from './InputValue';

function Filters() {
  const {
    filters,
    setRender,
    data,
    render,
    exceptions,
    setExceptions,
  } = React.useContext(Context);

  React.useEffect(() => {
    const { inputText } = filters;
    const filteredData = data.filter(
      (planet) => planet.name.toLowerCase().includes(inputText.toLowerCase()),
    );

    setRender(filteredData);
  }, [filters, data, setRender]);

  function filter() {
    let filteredData = [];
    const magicNumber = 10;
    if (filters.comparissionFilter === 'maior que') {
      filteredData = render.filter((planet) => (
        parseInt(planet[filters.columnFilter],
          magicNumber) > parseInt(filters.value, magicNumber)));
    } else if (filters.comparissionFilter === 'menor que') {
      filteredData = render.filter((planet) => (
        parseInt(planet[filters.columnFilter],
          magicNumber) < parseInt(filters.value, magicNumber)));
    } else if (filters.comparissionFilter === 'igual a') {
      filteredData = render.filter((planet) => (
        parseInt(planet[filters.columnFilter],
          magicNumber) === parseInt(filters.value, magicNumber)));
    }
    setRender(filteredData);
    setExceptions([...exceptions, filters.columnFilter]);
  }

  return (
    <>
      <InputValue />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ filter }
      >
        Filtrar
      </button>
    </>
  );
}

export default Filters;
