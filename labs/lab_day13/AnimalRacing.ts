import Animal from "./Animal";

export default class AnimalRacing {

	static getWinner(animalList: Animal[]): Animal{
		//TODO: check the input params: empty
		let winner = animalList[0];
		animalList.forEach(animal => {
			if(animal.getSpeed() > winner.getSpeed()){
				winner = animal;
			}
		})
		return winner

	}
}