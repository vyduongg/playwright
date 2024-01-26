/**
 * Do NOT use any built-in sort method. Please write a sort logic to sort an integer array from min to max 
	Input: [12, 34, 1, 16, 28]
	Expected output: [1, 12, 16, 28, 34]
 */

/**
	unsortedPosition = arr.length -1
	currentIndex = 0 && currentIndex < unsortedPosition

	while(unsortedPosition > 0)

	Loop
	if(leftValue > rightValue) 
		swap
	unsortedPosition-- ;
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
			array[index+1] = leftValue;

			// Swap without temporary variable
			/**
			 * a = 10
			 * b = 2
			 * a = a + b = 10 + 2 = 12 (a=12, b=2)
			 * b = a - b = 12 - 2 = 10 (a=12, b=10)
			 * a = a - b = 12 - 10 = 2 (a=2 , b=10)
			 */
		}
	}
	unsortedPosition--;
}

console.log(array);
