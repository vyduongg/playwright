const {
  filterEvenNumber,
  convertToEvenNumbers,
  sortNumberASC,
  sortNumberDESC,
} = require("../utils/ArrayHelper");
/*
 * Methods to process array
 */

// Literal declaration
let myNumArray = [1, 2, 3, 4, 5];

// ==== FILTER ====
// 1. Most of methods to process an array can accept a function as a parameter
// 2. The function to process the array: (value, index, array)
let evenNumbers = myNumArray.filter(filterEvenNumber);

	// for (const value of evenNumbers) {
	//   console.log("Even number", value);
	// }

// ==== MAP ====
const evenNumArray = myNumArray.map(convertToEvenNumbers);

	// for (const value of evenNumArray) {
	//   console.log("Even number array: ", value);
	// }

// ==== SORT: Asc, Desc ====
// SORT String
let myStrings = ['A', 'B', 'C'];
myStrings.sort();
myStrings.reverse();

// SORT Number
let complexNumArray = [100, 25, 150, 19, 199];
complexNumArray.sort(sortNumberASC);
complexNumArray.sort(sortNumberDESC);
	// console.log('Sort Number: ', complexNumArray);

// ==== forEach: Str : 1234
let targetStr = '';
function convertToNoSpaceStr(value, index, array){
	targetStr = targetStr + value;
}
myNumArray.forEach(convertToNoSpaceStr);


// PRINT RESULT
console.log(targetStr);