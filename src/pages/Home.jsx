import React from 'react';
import Table from '../components/Table';
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <>
      <header>
        <SearchBar />
      </header>
      <main>
        <Table />
      </main>
    </>
  );
}
