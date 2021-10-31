const compare = {
  'menor que': (a, b) => Number(a) < Number(b),
  'igual a': (a, b) => Number(a) === Number(b),
  'maior que': (a, b) => Number(a) > Number(b),
};

const filterData = (planets, { name, numeric }) => planets.filter((planet) => {
  let numericCheck = true;
  if (numeric.length > 0) {
    const { column, comparison, value } = numeric[0];
    numericCheck = compare[comparison](planet[column], value);
  }

  const nameCheck = RegExp(name, 'i').test(planet.name);

  return nameCheck && numericCheck;
});

export default filterData;
