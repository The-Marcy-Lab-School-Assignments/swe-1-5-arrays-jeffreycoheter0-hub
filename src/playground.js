const { clearArr, getFirstItem } = require('./debug');
const {
    addToFrontOrBack,
    reverseString,
    newArrayFullOf,
    insertIntoMiddle,
    deleteFromMiddle,
    isRightIndex,
    roundAllNumsDown,
    getAllYCoordinates,
} = require('./from-scratch');
const { uppercaseAll, destructureCoordinates } = require('./modify');

console.log(addToFrontOrBack([1, 2, 3, 4, 5, 6], 7, true));
console.log(reverseString('Hello World!'));