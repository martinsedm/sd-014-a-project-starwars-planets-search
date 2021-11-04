import React, { useContext } from 'react';

import Header from './componets/Header';
import NameSearch from './componets/NameSearch';
import SelectSearch from './componets/SelectSearch';
import Tables from './componets/Tables';
import StarWarsContext from './context/StarWarsContext';

function Page() {
  const { planets } = useContext(StarWarsContext);
  return (
    <div>
      <Header />
      <NameSearch />
      <SelectSearch />
      {planets.length > 0 && <Tables />}
    </div>
  );
}

export default Page;
