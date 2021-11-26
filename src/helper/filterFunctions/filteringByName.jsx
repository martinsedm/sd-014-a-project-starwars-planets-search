import { useContext } from 'react';
import Context from '../../contexts/Context';

export default function FilteringByName({ target: { value } }) {
  const { setFilters } = useContext(Context);
  setFilters(value);
}
