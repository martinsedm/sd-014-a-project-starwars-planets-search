import React from 'react';

import '../styles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="filter-container">
        <h1> Star Wars</h1>
        <p> Planets Search </p>
        <input
          type="text"
          placeholder="Filtrar por Nome"
          data-testid="name-filter"
        />
      </div>
    );
  }
}

export default Header;
