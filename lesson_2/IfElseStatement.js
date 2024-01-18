const EXPECTED_TIME = 7;
let arrivalTime = 8;


// if(value){}
// == , === , != , !== , > , < , >= , <=
let isHeOnTime = arrivalTime === EXPECTED_TIME;

if(isHeOnTime){
	console.log("Let's talk!");
} else {
	console.log("Write a letter")
}

console.log("End program!")

/* if(isHeOnTime){
	console.log("Let's talk!");
}  

// !: Revert the boolean value 
if(!isHeOnTime){ 
	console.log("Write a letter")
}
*/
