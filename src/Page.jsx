import React, { useContext } from 'react';

import Header from './componets/Header';
import NameSearch from './componets/NameSearch';
import SelectSearch from './componets/SelectSearch';
import Tables from './componets/Tables';
import RenderSearch from './componets/RenderSearch';
import StarWarsContext from './context/StarWarsContext';

function Page() {
  const { planets, filters } = useContext(StarWarsContext);
  return (
    <div>
      <Header />
      <NameSearch />
      <SelectSearch />
      {filters.filterByNumericValues !== undefined
      && <RenderSearch />}
      {planets.length > 0 && <Tables />}
    </div>
  );
}

export default Page;
