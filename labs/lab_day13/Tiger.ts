import Animal from "./Animal"

export default class Tiger extends Animal {

	constructor(name: string){
		super(name, Animal.generateRandomSpeed(100));
	}

}