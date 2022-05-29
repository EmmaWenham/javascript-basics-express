const getNthElement = (index, array) => {
  // your code here
  let newIndex = 0;
  if (index >= array.length) {
    newIndex = index - array.length;
  } else {
    newIndex = index;
  }
  return array[newIndex];
  // tutor's answer -- return array[index % array.length];
};

const arrayToCSVString = array => {
  // your code here
  return array.toString();
};

const csvStringToArray = string => {
  // your code here
  return string.split(",");
};

const addToArray = (element, array) => {
  // your code here
  array.push(element);
};

const addToArray2 = (element, array) => {
  // your code here
  return [...array, element];
};

const removeNthElement = (index, array) => {
  // your code here
   return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  // your code here
  return numbers.map(number => number.toString());
};

const uppercaseWordsInArray = strings => {
  // your code here
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  // your code here
  return reverseWords = strings.map(word =>
    word
      .split('')
      .reverse()
      .join('')
  );
  return reverseWords;
};

const onlyEven = numbers => {
  // your code here
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  let removeNth = array.slice(0, index).concat(array.slice(index + 1, array.length));
  return removeNth;
};


// const removeNthElement2 = (index, array) => {
//   // your code here
//   const newArray = array.slice(0, index);
//   const secondArray = array.slice(index + 1);
//   return newArray.concat(secondArray);
// };

const elementsStartingWithAVowel = strings => {
  // your code here
  return strings.filter(strings => (/^[aeiou]/i.test(strings)));
};

const removeSpaces = string => {
  // your code here
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  // your code here
  return numbers.reduce((prev, current) => prev + current, 0);
};

const sortByLastLetter = strings => {
  // your code here
  return strings.sort(
    (a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
  );
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};