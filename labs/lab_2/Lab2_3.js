/* Get input from user about height(m) and weight(kg) then calculate BMI and Suggest user to increase/decrease weight
	Underweight = <18.5
	Normal weight = 18.5 – 24.9
	Overweight = 25–29.9
	Obesity = BMI of 30 or greater
	BMI = weight / (height x 2)
*/

let height = 1.6;
let weight = 40;

const BMI = weight / (height * height);
console.log('Your BMI: ' + BMI);

let suggestIncrease = (19 - BMI).toFixed(2);
let suggestDecrease = (BMI - 24.9).toFixed(2);

if(BMI < 18.5){
	console.log('Underweight! You should try to increase more ' + suggestIncrease + ' kg');

} else if(BMI <= 24.9){
	console.log('Normal weight! You should try to maintain your weight.');

} else if(BMI <= 29.9){
	console.log('Overweight! You should try to decrease more ' + suggestDecrease + ' kg');

} else {
	console.log('Obesity! You should try to decrease more ' + suggestDecrease + ' kg');

}

// const readline = require('readline').createInterface({
// 	input: process.stdin,
// 	output: process.stdout
//     });
    
//     readline.question('Enter your height in meters (e.g., 1.65): ', height => {
// 	readline.question('Enter your weight in kilograms (e.g., 40): ', weight => {
// 	    const BMI = weight / (height * height);
// 		...
// 	    readline.close();
// 	});
//     });
    