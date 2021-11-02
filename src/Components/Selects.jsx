import React from 'react';
import { header } from './Table';
// import Context from '../Context/Context';

function Selects() {
  // const { setSearchText, searchText } = useContext(Context);

  return (
    <section>
      <select
        data-testid="column-filter"
      >
        {header.slice(1).map((op) => (<option key={ op.id }>{op}</option>))}
      </select>

      <select
        data-testid="comparison-filter"
      >
        <option />
      </select>

      <select
        data-testid="value-filter"
      >
        <option />
      </select>
    </section>
  );
}

export default Selects;
