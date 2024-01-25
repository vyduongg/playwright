/*
* CRUD : Create Read Update Delete
*/

// Literal declaration (tuong minh, ro rang)
 let myNumArray = [1, 2, 3, 4, 5]; 

// Via Array constructor
// let viaConstructor = new Array(1, 2, 3, 4, 5);

/*
* length: number of element
* index: 0 -> (length -1) 
*/

// Read
console.log('Array length: ', myNumArray.length);

// Update
console.log('Value of the second num before updating: ', myNumArray[1]);
myNumArray[1] = 100;
console.log('Value of the second num after updating: ', myNumArray[1]);

// =====
console.log(myNumArray[99]);
// Possibly undefine holes
// myNumArray[10] = 1000;

// Them gia tri vao 1 mang, tranh undefine holes ==> dung method push
// Adding one more on top of array
myNumArray.push(6)
console.log(myNumArray);
// 1, 2, 3, 4, 5, undefine, undefine, undefine,... 10

// Removing the last element from array (Lay gia tri cuoi cung ra khoi array)
let removeValue = myNumArray.pop();
console.log(removeValue);
console.log('After removing last element: ', myNumArray);

// Removing the first element
myNumArray.shift();
console.log('After removing firsr element: ', myNumArray);

// Deleting | splice
myNumArray.splice(1,1);
console.log('Deleting number 3: ', myNumArray);

// Inserting | splice
let myNewArray = [1, 3, 4, 5];
let whereToInsert = 3;
let numberOfArgToBeRemove = 0;
let valueToBeAdded = 2;
myNewArray.splice(whereToInsert, numberOfArgToBeRemove, valueToBeAdded);
console.log('Insert number 2 into index 1: ', myNewArray);