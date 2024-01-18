const EXPECTED_TIME = 7;
let arrivalTime = 8;

let isHeOnTime = arrivalTime === EXPECTED_TIME
let msgContent = '';

/*
if(isHeOnTime){
	msgContent = "Let's talk!";
} else {
	msgContent = "Write a letter!";
}
*/

// Ternary Operator
msgContent = isHeOnTime ? "Let's talk!" : "Write a letter!"  ;
console.log(msgContent);