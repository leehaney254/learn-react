//Primitive
let age: number;

age = 12;

let userName: string;

userName = 'Mad';

let isInstructor: boolean = true;

//Arrays
let hobbies: string[];
hobbies = ['Person']

type Person = {
  name: string,
  age: number
}

let person: Person;

person = {
  name: 'Max',
  age: 37
};

// To store an array of objects 
let people: Person[];

// Type inference
let firstName = 'Leehaney';

// Union types
let uni: string | number = 'React course';
uni = 123;

// Funtions with types
function add(a: number, b: number) {
  return a + b;
}


// Generics
function insertAtBegining<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBegining(demoArray, -1);