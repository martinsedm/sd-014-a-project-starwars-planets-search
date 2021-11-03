import React, { Component } from 'react';
import Filter from '../components/Filter';
import Table from '../components/Table';

class Home extends Component {
  render() {
    return (
      <main>
        <Filter />
        <Table />
      </main>
    );
  }
}

export default Home;
