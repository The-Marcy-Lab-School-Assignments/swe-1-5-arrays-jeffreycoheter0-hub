/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  arr = [];
};

const getFirstItem = (array) => {
  return array.shift([0]);
};

module.exports = {
  clearArr,
  getFirstItem,
};
