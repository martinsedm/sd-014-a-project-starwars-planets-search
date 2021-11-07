import React, { useContext } from 'react';
import APIContext from '../Context/APIContext';

function Select() {
  const { opcoes, setColuna } = useContext(APIContext);
  return (
    <select
      name="column"
      data-testid="column-filter"
      onChange={ (e) => setColuna(e.target.value) }
    >
      {opcoes.map((cur) => <option key={ cur } value={ cur }>{cur}</option>)}
    </select>

  );
}

Select.contextTypes = APIContext;
export default Select;
