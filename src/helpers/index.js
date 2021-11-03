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

export default makeTheaderArray;
