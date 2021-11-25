import React from 'react';
import SW from '../images/sw-logo.png';

export default function Header() {
  document.title = 'Star Wars';
  return (
    <header className="cor">
      <img src={ SW } alt="Star-wars-logo" />
    </header>
  );
}
