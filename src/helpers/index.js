const makeTheaderArray = (array) => Object.keys(array[0]).map((i) => {
  if (i.includes('_')) {
    const underlineIndex = i.indexOf('_');
    let upperCaseFix = i.replace(
      i[underlineIndex + 1], i[underlineIndex + 1].toLocaleUpperCase(),
    );
    upperCaseFix = upperCaseFix.replace(i[underlineIndex], ' ');
    upperCaseFix = upperCaseFix.replace(i[0], i[0].toLocaleUpperCase());
    return upperCaseFix;
  }
  return i.replace(i[0], i[0].toLocaleUpperCase());
});

export const handleOrder = (arr, { column, sort }) => {
  const ONE = 1;
  if (!arr.every((i) => Number(i[column]))) {
    const sorted = arr.sort((a, b) => (
      a[column] < b[column] ? -ONE : Number(a[column] > b[column])));
    return column === 'ASC' ? sorted.reverse() : sorted;
  }
  return arr.sort((a, b) => {
    switch (sort) {
    case 'ASC':
      return a[column] - b[column];
    case 'DESC':
      return b[column] - a[column];
    default: return null;
    }
  });
};

export default makeTheaderArray;
