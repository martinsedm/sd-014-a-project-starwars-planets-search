import React, { useEffect, useState } from 'react';
import getData from '../api/data';
import Table from '../Table';

const Home = () => {
  const [starWarsData, setStarWarsData] = useState(null);
  const [headers, setHeaders] = useState(null);

  useEffect(() => {
    getData().then((data) => {
      setStarWarsData(data);
      setHeaders(Object.keys(data.results[0]));
    });
  }, []);

  return (
    <div>
      {headers && (
        <Table
          headers={ headers.filter((header) => header !== 'residents') }
          data={ starWarsData }
        />
      )}
    </div>
  );
};

export default Home;
