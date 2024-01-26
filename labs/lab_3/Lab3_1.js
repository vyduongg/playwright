const { filterEvenNum, filterOddNum } = require("../lab_3/ArrayHelper");
/**
 * Count how many odd, even number(s) in an integer array
 * 	let intArr = [1, 2, 3, 4, 5];
 		Even numbers: 2
 		Odd numbers: 3
*/

let intArr = [1, 2, 3, 4, 5];
let totalEven = 0;
let totalOdd = 0;

for (const value of intArr) {
  if (value % 2 === 0) {
    totalEven++;
  } else totalOdd++;
}

console.log("Even numbers: ", totalEven);
console.log("Odd numbers: ", totalOdd);

// Second approach | Delegation
let totalEvenNum = intArr.filter(filterEvenNum).length;
let totalOddNum = intArr.filter(filterOddNum).length;

console.log("totalEvenNum: ", totalEvenNum);
console.log("totalOddNum: ", totalOddNum);
