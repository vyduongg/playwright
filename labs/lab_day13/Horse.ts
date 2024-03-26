import Animal from "./Animal"

export default class Horse extends Animal {

	constructor(name: string){
		super(name, Animal.generateRandomSpeed(75));
	}

}