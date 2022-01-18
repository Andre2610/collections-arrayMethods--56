// Arrays
// How to target differents indexes
// Objects
// How to target specific keys

// Array methods
// .find
// .filter
// .map

const studentNames = [
  'Yesim', // 0
  'Fabio', // 1
  'Steven',
  'Norman', // 3
  'Dario',
  7,
  true,
  [1, 2, 3],
];

// console.log(studentNames[4]);

const studentName = 'Norman';
const studentName2 = 'Yesim';
const studentName3 = 'Fabio';
const studentName4 = 'Steven';
const studentName5 = 'Dario';

const beverage = {
  alcoholPercentage: 0,
  volume: '500ml',
  color: 'Transparent',
  nameOfProduct: 'Water',
  temperature: 'cold',
};

const target = 'temperae';

// console.log('option 1', beverage[0]);
console.log('option 2', beverage[target]);
// console.log('option 3', beverage['temperature']);

// function output(target) {
//   console.log('inside function', target);
// }

const students = [
  {
    name: 'steven',
    nationality: 'nl',
    randomArray: [1, 2, 3, 4, 5],
  },
  {
    name: 'Abidemi',
    nationality: 'ng',
    randomArray: [1, 2, 3, 4, 5],
  },
  {
    name: 'Luiz',
    nationality: 'br',
    randomArray: [1, 2, 3, 4, 5],
  },
  {
    name: 'Dario',
    nationality: 'it',
    randomArray: [1, 2, 3, 4, 5],
  },
];

console.log(students[3].randomArray[2]);
