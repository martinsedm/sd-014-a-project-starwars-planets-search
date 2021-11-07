import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

function Header() {
  const { filter, setFilter } = useContext(MyContext);

  const handleChange = ({ target }) => {
    const { value } = target;
    setFilter({
      ...filter,
      filters: {
        filterByName: {
          name: value,
        },
      },
    });
  };

  // useEffect(() => {
  //   setFilters({
  //     ...filters,
  //     filters: {
  //       filterByName: {
  //         name,
  //       },
  //     },
  //   });
  // }, [filters, name, setFilters]);
  return (
    <header>
      <h1>Star WArs Planet Search</h1>
      <input
        placeholder="Choose the Planet"
        data-testid="name-filter"
        type="text"
        onChange={ handleChange }
        name="search"
        className="input-text"
      />
    </header>
  );
}

export default Header;
