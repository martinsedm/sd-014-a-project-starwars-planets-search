import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../contextAPI/PlanetsContext';
import Loading from '../components/Loading';
import Loaded from '../components/Loaded';

export default function Home() {
  const { fetchAPI, isLoading } = useContext(PlanetsContext);
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    isLoading ? <Loading /> : <Loaded />
  );
}
