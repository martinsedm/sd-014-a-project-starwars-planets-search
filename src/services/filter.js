export default function filter(filters, planetInfo, filterClick) {
  if (filters.filterByName.name) {
    return planetInfo.filter(
      (planet) => (planet.name).toLowerCase().includes((filters.filterByName.name)),
    );
  }
  if (filterClick === true) {
    if (
      filters.filterByNumericValues[0].column
      && filters.filterByNumericValues[0].comparison === 'maior que') {
      console.log('oid');
      return planetInfo.filter(
        (planet) => Number(
          planet[filters.filterByNumericValues[0].column]
          ,
        ) > Number(filters.filterByNumericValues[0].value),
      );
    }
    if (
      filters.filterByNumericValues[0].column
      && filters.filterByNumericValues[0].comparison === 'menor que') {
      console.log('oid');
      return planetInfo.filter(
        (planet) => Number(
          planet[filters.filterByNumericValues[0].column]
          ,
        ) < Number(filters.filterByNumericValues[0].value),
      );
    }
    if (
      filters.filterByNumericValues[0].column
      && filters.filterByNumericValues[0].comparison === 'igual a') {
      console.log('oid');
      return planetInfo.filter(
        (planet) => Number(
          planet[filters.filterByNumericValues[0].column],
        ) === Number(filters.filterByNumericValues[0].value),
      );
    }
  }
  return planetInfo;
}
