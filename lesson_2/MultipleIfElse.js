// <18 | 18-55 | >55

let clientAge = 18;
if(clientAge < 18){
	console.log("Con nit ma doi uong bia, khong ban!");
	if(clientAge <= 12){
		console.log("CALLING...")
	}
} else if(clientAge >=18 && clientAge <=55){
	console.log("Unlimited!");
} else {
	console.log("2 chai!");
}