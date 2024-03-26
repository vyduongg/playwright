import Animal from "./Animal"

export default class Dog extends Animal {

	constructor(name: string){
		super(name, Animal.generateRandomSpeed(60));
	}

}