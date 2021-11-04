import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import TableContext from './TableContext';

function TableProvider({ children }) {
  const [response, setReponse] = useState({ data: [] });
  const [filter, setfilter] = useState([false]);

  const [filterText, setFilterText] = useState([]);
  const [colum, setColum] = useState([]);
  const [comparsion, setComparsion] = useState([]);
  const [value, setValue] = useState([]);

  const requestApi = async () => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const fetchUrl = await fetch(url);
    const responseApi = await fetchUrl.json();
    setReponse({
      data: responseApi.results,
    });
  };

  const removeColum = () => {
    const colums = document.querySelector('#colum-id');
    colums.childNodes.forEach((option) => {
      if (option.innerHTML === colum) option.remove();
    });
  };

  const btnSubmit = () => {
    if (filter === true) {
      setfilter(false);
    } else {
      setfilter(true);
    }
    removeColum();
  };

  const handleChange = ({ target }) => setFilterText(target.value);

  const createTd = (planets, index) => (
    <tr key={ index }>
      <td>{ planets.name }</td>
      <td>{ planets.rotation_period }</td>
      <td>{ planets.orbital_period }</td>
      <td>{ planets.diameter }</td>
      <td>{ planets.climate }</td>
      <td>{ planets.gravity }</td>
      <td>{ planets.terrain }</td>
      <td>{ planets.surface_water }</td>
      <td>{ planets.population }</td>
      <td>{ planets.films }</td>
      <td>{ planets.created }</td>
      <td>{ planets.edited }</td>
      <td>{ planets.url }</td>
    </tr>
  );

  useEffect(() => {
    requestApi();
  }, []);

  const context = {
    response,
    handleChange,
    btnSubmit,
    setColum,
    setComparsion,
    setValue,
    filterText,
    filter,
    colum,
    comparsion,
    value,
    createTd,
  };

  return (
    <TableContext.Provider value={ context }>
      { children }
    </TableContext.Provider>
  );
}

TableProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TableProvider;
