const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront) {
    arr.unshift(value);
  } else {
    arr.push(value)
  }
  return arr
};

const reverseString = (string) => {
  const arr = string.split('');
  const reverse = arr.reverse();
  const join = reverse.join('');
  return join;
};

const newArrayFullOf = (value, numOfValue) => {
  const arr = new Array(numOfValue);
  return arr.fill(value);
};

const insertIntoMiddle = (arr, value) => {
  const findMid = Math.floor(arr.length / 2);
  arr.splice(findMid, 0, value);
};

const deleteFromMiddle = (arr) => {
  const findMid = Math.floor(arr.length / 2);
  arr.splice(findMid, 1);
};

const isRightIndex = (arr, value, index) => {
  return (arr.at(index) === value) ? true : false;
};

const roundAllNumsDown = (arr) => {
  const newArr = arr.map((arr) => Math.floor(arr));
  return newArr;
};

const getAllYCoordinates = (arr) => {
  const newArr = arr.map((arr) => arr[1]);
  return newArr;
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
