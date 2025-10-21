const uppercaseAll = (...theArgs) => {
  for (let i = 0; i < theArgs.length; i++) {
    theArgs[i] = theArgs[i].toUpperCase();
  }
  return theArgs;
};

const destructureCoordinates = (coordinates) => {
  let x = coordinates[0];
  let y = coordinates[1];
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
