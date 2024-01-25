/**
 * DRY: to group same logic bloc into same place --> reusable
 * Group same logic category into same place
 * ==> Maintainable -> extendable -> reliable
 */

// Function declaration | It's hoisted to the top of the scope
let myReturnedValue = functionName();
console.log(myReturnedValue);

function functionName(){
	return 2;
}

// Function expression | It's NOT hoisted like Function declaration
const addNumber = function(firstNum, secondNum){
	return firstNum + secondNum;
}
console.log(addNumber(1,2));