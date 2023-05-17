// 1.

const numbers = [1, 2, 3];

const [first, second, third] = numbers;
console.log(second);

// 2.

const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

const {name, city} = person;
const personName = name;
const personCity = city;
console.log(personName);
console.log(personCity);

// 3.

const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2022
};

// console.log(Object.keys(car));
const keysArray = Object.keys(car);
console.log(keysArray);

// 4.

// console.log(Object.values(car));
const valuesArray = Object.values(car);
console.log(valuesArray);


// 5.

// console.log(Object.entries(car));
const entriesArray = Object.entries(car);
console.log(entriesArray);
