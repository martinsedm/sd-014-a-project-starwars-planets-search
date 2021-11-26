const comparar = (a, b) => {
  const descNumber = -1;
  if (a > b) {
    return 1;
  }

  if (a < b) {
    return descNumber;
  }

  return 0;
};

export default comparar;
