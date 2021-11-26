import React from 'react';
import Button from './atomos/Button';
import Input from './atomos/Input';

export default function SearchBar() {
  return (
    <div>
      <Input placeHolder="0" />
      <Button label="Filtrar" />
    </div>
  );
}
