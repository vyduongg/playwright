/* Get input from user about height(m) and weight(kg) then calculate BMI
	Underweight = <18.5
	Normal weight = 18.5 – 24.9
	Overweight = 25–29.9
	Obesity = BMI of 30 or greater
	BMI = weight / (height x 2)
*/

let height = 1.6;
let weight = 40;

let BMI = weight / (height * height);
console.log('Your BMI: ' + BMI);

if(BMI < 18.5){
	console.log('Underweight!');
} else if(BMI <= 24.9){
	console.log('Normal weight!');
} else if(BMI <= 29.9){
	console.log('Overweight!');
} else console.log('Obesity!');