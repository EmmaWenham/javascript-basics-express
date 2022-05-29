const express = require('express');
const { type } = require('express/lib/response');
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');
const {
  sayHello,
  lowercase,
  uppercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const app = express();
app.use(express.json());

// --- strings.js
app.get('/strings/hello/:string', (req, res) => {
  res.json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/string', (req, res) => {
  res.json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/string', (req, res) => {
  res.json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-character/string', (req, res) => {
  res.json({ result: firstCharacter(req.params.string) });
});

app.get('/strings/first-characters/string', (req, res) => {
  if (!req.query.length) {
    req.query.length = 1;
  }
  res.json({ result: firstCharacters(req.params.string, req.query.length) });
});

// --- numbers.js
app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }

  return res.status(200).json({ result: add(a, b) });
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = parseInt(req.params.a, 10);
  const b = parseInt(req.params.b, 10);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers.' });
  }
  return res.status(200).json({ result: subtract(b, a) });
});

app.post('/numbers/multiply/', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;

  if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(a, 10)) || Number.isNaN(parseInt(b, 10))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(a, b) });
  }
});

app.post('/numbers/divide/', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;

  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (typeof a === 'undefined' || typeof b === 'undefined') {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(a, 10)) || Number.isNaN(parseInt(b, 10))) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: divide(a, b) });
  }
});

app.post('/numbers/remainder/', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;

  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (typeof a === 'undefined' || typeof b === 'undefined') {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (Number.isNaN(parseInt(a, 10)) || Number.isNaN(parseInt(b, 10))) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: remainder(a, b) });
  }
});

// --- booleans.js
const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');

app.post('/booleans/negate/', (req, res) => {
  const { value } = req.body;

  res.status(200).json({ result: negate(value) });
});

app.post('/booleans/truthiness', (req, res) => {
  const { value } = req.body;

  res.status(200).json({ result: truthiness(value) });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  const { number } = req.params;

  if (isNaN(number)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).json({ result: isOdd(req.params.number) });
  }
});

app.get('/booleans/:string/starts-with/:character', (req, res) => {
  const { character } = req.params;
  const { string } = req.params;

  if (character.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  } else if (string[0] !== character) {
    res.status(200).json({ result: startsWith(string, character) });
  } else {
    res.status(200).json({ result: true });
  }
});

// --- arrays.js
const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  elementsStartingWithAVowel,
  removeNthElement2,
} = require('./lib/arrays');

app.post('/arrays/element-at-index/:index/', (req, res) => {
  const { index } = req.params;
  const { array } = req.body;

  res.status(200).json({ result: getNthElement(index, array) });
});

app.post('/arrays/to-string/', (req, res) => {
  const { array } = req.body;

  res.status(200).json({ result: arrayToCSVString(array) });
});

app.post('/arrays/append/', (req, res) => {
  const { array } = req.body;
  const { value } = req.body;

  res.status(200).json({ result: addToArray2(value, array) });
});

app.post('/arrays/starts-with-vowel/', (req, res) => {
  const { array } = req.body;

  res.status(200).json({ result: elementsStartingWithAVowel(array) });
});

app.post('/arrays/remove-element/', (req, res) => {
  const { index } = req.query;
  const { array } = req.body;
  if (!req.query.index) {
    res.status(200).json({ result: removeNthElement2(0, req.body.array) });
  } else if (req.query.index) {
    res.status(200).json({ result: removeNthElement2(parseInt(req.query.index), req.body.array) });
  }
});

module.exports = app;
