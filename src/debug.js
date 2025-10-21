/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  return arr.splice(0, arr.length);
};

const getFirstItem = (array) => {
  const getFirst = array.map((element) => element);
  return getFirst.at(0);
};

module.exports = {
  clearArr,
  getFirstItem,
};
