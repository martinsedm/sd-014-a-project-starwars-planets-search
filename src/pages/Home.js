import React, { useContext, useEffect } from 'react';
import getData from '../api';
import GlobalContext from '../context';
import Table from '../Table';

const Home = () => {
  const {
    starWarsData,
    setStarWarsData,
    headers,
    setHeaders,
  } = useContext(GlobalContext);

  useEffect(() => {
    getData()
      .then((data) => {
        setStarWarsData({ ...data, filters: { filterByName: '' } });
        setHeaders(Object.keys(data.results[0]));
      });
  }, [setHeaders, setStarWarsData]);

  const handleSearch = ({ target: { value } }) => setStarWarsData({
    ...starWarsData, filters: { filterByName: { value } },
  });

  return (
    <div>

      <input type="text" onChange={ handleSearch } data-testid="name-filter" />

      {headers && (
        <Table
          headers={ headers.filter((header) => header !== 'residents') }
          data={
            starWarsData.filters.filterByName.value
              ? starWarsData.results
                .filter((p) => p.name.includes(starWarsData.filters.filterByName.value))
              : starWarsData.results
          }
        />
      )}
    </div>
  );
};

export default Home;
