import React, { useContext, useEffect } from 'react';
import SWContext from '../context/SWContext';
import Loading from '../components/Loading';
import Header from '../components/Header';
import Table from '../components/Table';
import Form from '../components/Form';

function Home() {
  const { fetchData, isLoading } = useContext(SWContext);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Header />
      { isLoading ? <Loading /> : (
        <main>
          <Form />
          <Table />
        </main>
      )}
    </div>
  );
}

export default Home;
