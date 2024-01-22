const myAge = 19;
console.log(myAge);

const myFloat1 = 19.0;
console.log(myFloat1);

const myFloat2 = 19.1001;
console.log(myFloat2);

const myName = "Alainengiya";

// comparism operator
console.log(myAge === myFloat2);
console.log(myAge === myName);
console.log(myAge === myFloat1);

const myAgeString = "19";
// concatinating string and number
console.log(myAgeString + 2);

// converting a string to a Number
console.log(Number(myAgeString));

// Note: In javascrpt both integers and floats are considered as Number data type

// Interger methods
// checking if a value is an integer
console.log(Number.isInteger(myAge));

// parsing a value to a float, return Nan if is not a number
console.log(Number.parseFloat(myAge));
console.log(Number.parseFloat(myAgeString));

// formating a number according to how many decimal points you want, returns a string
console.log(myFloat2.toFixed(2));

// converting a string to an integer
console.log(Number.parseInt(myAgeString));
