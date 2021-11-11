import React, { useContext } from 'react';
import StarwarsContext from '../context/StarwarsContext';
import Search from '../Components/Search';
import SearchByNumericValues from '../Components/SearchByNumeric';
import Filtro from '../Components/Filtro';

function Table() {
  const { data } = useContext(StarwarsContext);

  if (data.length === 0) return <p>...Loading </p>;
  return (
    <div>
      <SearchByNumericValues />
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
        <Filtro />
      </table>
    </div>
  );
}
export default Table;
