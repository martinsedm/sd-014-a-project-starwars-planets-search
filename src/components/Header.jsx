import React from 'react';
import logo from '../images/resizedlogo.png';

export default function Header() {
  return (
    <div>
      <header>
        <img src={ logo } alt="Star Wars logo" />
        <h1>Planet Search</h1>
      </header>
    </div>
  );
}
