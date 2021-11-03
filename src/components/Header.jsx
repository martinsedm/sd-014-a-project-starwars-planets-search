import React, { Component } from 'react';
import MyContext from './MyContext';

export class Header extends Component {
  render() {
    return (
      <div>
        <h1>Projeto Qual Planeta Vou Explodir Hoje</h1>
        <MyContext.Consumer>
          {(value) => (
            <div>
              <input
                type="text"
                data-testid="name-filter"
                onChange={ value.contextValue.handleChange }
              />
            </div>
          )}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default Header;
