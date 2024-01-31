/**
 * Do NOT use any built-in sort method. Please write a sort logic to sort an integer array from min to max 
	Input: [12, 34, 1, 16, 28]
	Expected output: [1, 12, 16, 28, 34]
 */

let array = [12, 34, 1, 16, 28];
let unsortedPosition = array.length -1;
while(unsortedPosition > 0){
	for (let index = 0; index < unsortedPosition; index++) {
		let leftValue = array[index];
		let rightValue = array[index + 1];

		if (leftValue > rightValue) {
			// Swap with temporary variable
			let temp = leftValue;
			array[index] = rightValue;
			array[index+1] = temp ;
		}
	}
	unsortedPosition--;
}

console.log(array);
