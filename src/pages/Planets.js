import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import Table from '../components/Table';

function Planets() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <Form />
        </section>
        <section>
          <Table />
        </section>
      </main>
    </div>
  );
}

export default Planets;
