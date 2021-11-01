const compare = {
  'menor que': (a, b) => Number(a) < Number(b),
  'igual a': (a, b) => Number(a) === Number(b),
  'maior que': (a, b) => Number(a) > Number(b),
};

const orderCompare = (a, b, order, numeric) => {
  if (order === 'ASC') {
    return a.localeCompare(b, undefined, { numeric });
  }

  return -a.localeCompare(b, undefined, { numeric });
};

const filterData = (planets, { name, numeric, order }) => {
  const filteredData = planets.filter((planet) => {
    let numericCheck = true;
    if (numeric.length > 0) {
      numeric.forEach(({ column, comparison, value }) => {
        numericCheck = numericCheck && compare[comparison](planet[column], value);
      });
    }

    const nameCheck = RegExp(name, 'i').test(planet.name);

    return nameCheck && numericCheck;
  });

  return filteredData.sort((a, b) => orderCompare(a[order.column], b[order.column],
    order.sort, order.column !== 'name'));
};

export default filterData;
