/**
 * Merge 2 SORTED integer array into one SORTED array
 * Array 01: [1, 12, 16, 28, 34]
 * Array 02: [1, 13, 16, 27, 99]
 */

const arr1 = [1, 12, 16, 28, 34]; 
const arr2 = [1, 13, 16, 27, 99];
const mergedArr = [];

const n1 = arr1.length;
const n2 = arr2.length;
let i = 0;
let j = 0;
let mergedPosition = 0;

while(i < n1 && j < n2){

	if(arr1[i] < arr2[j]){
		mergedArr[mergedPosition] = arr1[i];
		i++;
	} else{
		mergedArr[mergedPosition] = arr2[j];
		j++
	}
	mergedPosition++;
}

while(i < n1){
	mergedArr[mergedPosition] = arr1[i];
	i++;
	mergedPosition++;
}

while(j < n2){
	mergedArr[mergedPosition] = arr2[j];
	j++;
	mergedPosition++
}

console.log('arr1: ', arr1);
console.log('arr2: ', arr2);
console.log('merged: ', mergedArr);
