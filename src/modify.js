const uppercaseAll = (...theArgs) => {
  const normalWords = theArgs;
  const wordUp = normalWords.toUpperCase();
  return wordUp;
};

const destructureCoordinates = (coordinates) => {
  const x = coordinates[0];
  const y = coordinates[1];
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
