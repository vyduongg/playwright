/**
 * Merge 2 SORTED integer array into one SORTED array
 * Array 01: [1, 12, 16, 28, 34]
 * Array 02: [1, 13, 16, 27, 99]
 */

const { setPrompt } = require("readline-sync");

let arr1 = [1, 12, 16, 28, 34]; 
let arr2 = [1, 13, 16, 27, 99];
let mergeArr = arr1.concat(arr2);

let unsortedPosition = mergeArr.length - 1;
while(unsortedPosition > 0){
	for (let index = 0; index < unsortedPosition; index++) {
		const leftValue = mergeArr[index];
		const rightValue = mergeArr[index + 1];

		if(leftValue > rightValue){
			let temp = leftValue;
			mergeArr[index] = rightValue;
			mergeArr[index+1] = leftValue;
		}
	}

	unsortedPosition--;
}

console.log(mergeArr);