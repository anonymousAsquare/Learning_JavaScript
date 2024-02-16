_array = []; // Empty array
//  adding elements at different index
_array[0] = 7;
_array[1] = "Asquare";
_array[2] = false;

console.log(_array);
console.log(_array[2]);
console.log(_array.length);

// adding to the array at the end
_array.push(2.45);
console.log(_array);

// removing the last element of the array
_array.pop();
console.log(_array);

// adding element at the array
_array.unshift(3.45);
console.log(_array);

// removing the first element of the array
_array.shift();
console.log(_array);

// deleting an element from an index leaving the index empty
delete _array[1];
console.log(_array);

// removing an element from an array at an index
_array.splice(1,1);
console.log(_array);

// replacing an element at an index position
_array.splice(1,1, "George");
console.log(_array);

// adding an element before an index position
_array.splice(1,0, false);
console.log(_array);

_array2 = ["A","B","C","D","E","F"];
console.log(_array2);

// slicing an array from an index position
console.log(_array2.slice(2));
console.log(_array2.slice(2,5));

// reversing an array
console.log(_array2.reverse());

// joining an array to a string 
const _string = _array2.join();
console.log(_string);

// spliting the string to an array
console.log(_string.split(","));

const _arrayA = ["A","B","C"];
const _arrayB = ["D","E","F"];
console.log(_arrayA);
console.log(_arrayB);

// concatnating two arrays
console.log(_arrayA.concat(_arrayB))

// joining two arrays
console.log([..._arrayA,..._arrayB])

