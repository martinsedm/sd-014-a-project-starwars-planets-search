import React from 'react';

export default function labelSelectOpt(func) {
  return (
    <label htmlFor="column-filter">
      <select
        name="column-filter"
        data-testid="column-filter"
        id="column"
        onChange={ func }
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
    </label>
  );
}

export function labelSelectComp(func) {
  return (
    <label htmlFor="comparison-filter">
      <select name="" data-testid="comparison-filter" onChange={ func }>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
    </label>
  );
}

export const tableInfos = (planeta, index) => (
  <tr key={ index }>
    <td>{ planeta.name }</td>
    <td>{ planeta.rotation_period }</td>
    <td>{ planeta.orbital_period }</td>
    <td>{ planeta.diameter }</td>
    <td>{ planeta.climate }</td>
    <td>{ planeta.gravity }</td>
    <td>{ planeta.terrain }</td>
    <td>{ planeta.surface_water }</td>
    <td>{ planeta.population }</td>
    <td>{ planeta.films }</td>
    <td>{ planeta.created }</td>
    <td>{ planeta.edited }</td>
    <td>{ planeta.url }</td>
  </tr>
);

export const selectFilter = (planets, comparison, options, number) => {
  const selectFiltering = planets.filter((plt) => {
    switch (comparison) {
    case 'maior que':
      if (plt[options] > Number(number)) return true;
      break;
    case 'menor que':
      if (plt[options] < Number(number)) return true;
      break;
    case 'igual a':
      if (plt[options] === number) return true;
      break;
    default:
      break;
    }
    return false;
  })
    .map((planeta, index) => (
      tableInfos(planeta, index)
    ));
  return selectFiltering;
};
