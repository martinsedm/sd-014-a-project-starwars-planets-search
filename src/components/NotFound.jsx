import React from 'react';
import sadBeep from '../images/sad-beep.gif';

export default function NotFound() {
  return (
    <section className="not-found">
      <h3>Nenhum planeta encontrado</h3>
      <img src={ sadBeep } alt="Gif of R2-D2 sadly beeping" />
    </section>
  );
}
