function negate(a) {
  // your code here
  return !a;
}

function both(a, b) {
  // your code here
  return a && b;
}

function either(a, b) {
  // your code here
  return a || b;
}

function none(a, b) {
  // your code here
  return a === false && b === false;
}

function one(a, b) {
  // your code here
  return a === !b;
}

function truthiness(a) {
  // your code here
  return Boolean(a);
}

function isEqual(a, b) {
  // your code here
  return a === b;
}

function isGreaterThan(a, b) {
  // your code here
  return a > b;
}

function isLessThanOrEqualTo(a, b) {
  // your code here
  return a <= b;
}

function isOdd(a) {
  // your code here
  return a % 2 !== 0;
}

function isEven(a) {
  // your code here
  return a % 2 === 0;
}

function isSquare(a) {
  // your code here
  return Number.isInteger(Math.sqrt(a));
}

function startsWith(char, string) {
  // your code here
  return char === string.slice(0, 1);
}

function containsVowels(string) {
  // your code here
  return !!string.match(/[aeiou]/gi);
}

function isLowerCase(string) {
  // your code here
  return !string.match(/[A-Z]/g);
}

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};