import React, { useContext } from 'react';
import Rendered from '../components/Rendered';
import Loading from '../components/Loading';
import StarsContext from '../context/myContext';

export default function Home() {
  const { isLoading } = useContext(StarsContext);
  return (
    isLoading ? <Loading /> : <Rendered />
  );
}
