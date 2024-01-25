/*
* LOOP: for
*/

// Literal declaration 
 let myNumArray = [1, 2, 3, 4, 5]; 

let arrayLength = myNumArray.length;
console.log('arrayLength: ', arrayLength);
// for (let index = 0; index < myNumArray.length; index++) {
// 	console.log(myNumArray[index]);
// }

/**
 * Convert all number in the array into even number. You can change all values.
 */
// Change
for (let index = 0; index < myNumArray.length; index++) {
	const currentValue = myNumArray[index];
	myNumArray[index] = currentValue * 2;
}

// Print value
for (const value of myNumArray) {
	console.log(value);
}