import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';
import ColunaPlanetas from './ColunaPlanetas';
import Search from '../Components/Search';

function Table() {
  const { data, filters } = useContext(StarwarsContext);

  const filtros = () => {
    if (filters.filterByName.name) {
      return data.filter((e) => e.name.includes(filters.filterByName.name));
    }
    return data;
  };

  if (!data || data.length === 0) {
    return <p>...Loading </p>;
  }
  return (
    <div>
      <Search />
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((infos) => (
              <th key={ infos }>
                {infos}
              </th>
            ))}
          </tr>
        </thead>
        <ColunaPlanetas data={ filtros() } />
      </table>
    </div>
  );
}

export default Table;
