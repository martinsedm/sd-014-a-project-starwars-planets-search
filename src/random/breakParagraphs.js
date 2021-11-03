import React from 'react';

export default function breakParagraphs(text) {
  const newParagraph = text
    .map((item) => (
      <p className="film-item" key={ item }>
        <a
          href={ item }
          className="film-link"
        >
          { item }
        </a>
      </p>
    ));
  return newParagraph;
}
