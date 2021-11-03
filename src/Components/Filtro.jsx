import React from 'react';
import APIContext from '../Context/APIContext';

class Filtro extends React.Component {
  render() {
    const { filtro } = this.context;
    return (
      <input type="text" onChange={ filtro } data-testid="name-filter" />
    );
  }
}
Filtro.contextType = APIContext;
export default Filtro;
