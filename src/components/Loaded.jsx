import React from 'react';
import Header from './Header';
import PlanetsTable from './PlanetsTable';
import Footer from './Footer';
import SearchBar from './SearchBar';

export default function Loaded() {
  return (
    <>
      <Header />
      <SearchBar />
      <PlanetsTable />
      <Footer />
    </>
  );
}
