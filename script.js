
// add
// subtract
// multiply
// divide


const add = function add(arr) {
    return arr.length
        ? arr.reduce((accumulator, nextItem) => accumulator + nextItem)
        : 0;
};

const subtract = function subtract(arr) {
    return arr.length
        ? arr.reduce((accumulator, nextItem) => accumulator - nextItem)
        : 0;
};

const multiply = function multiply(arr) {
    return arr.length
        ? arr.reduce((accumulator, nextItem) => accumulator * nextItem)
        : 0;
};

const divide = function divide(arr) {
    return arr.length
        ? arr.reduce((accumulator, nextItem) => accumulator / nextItem)
        : 0;
};

function operate(operator,a,b) {
    //represents equals button action
};