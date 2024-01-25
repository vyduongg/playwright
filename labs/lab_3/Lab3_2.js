/**
 * Finding maximum value/minimum value from an integer array
 * let intArr = [1, 2, 3, 4, 5];
	Minimum: 1
	Maximum: 5
 */

let intArr = [1, 2, 3, 4, 5];

let max = intArr[0];
let min = intArr[0];

for (let i = 1; i < intArr.length; i++) {
  if (intArr[i] > max) {
    max = intArr[i];
  } else if (intArr[i] < min) {
    min = intArr[i];
  }
}

console.log("Minimum", min);
console.log("Maximum", max);