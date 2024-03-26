export default class Animal {
	
	protected name: string;
	protected speed: number;

	constructor(name: string, speed: number){
		this.name = name;
		this.speed= speed;
	}

	getSpeed(): number {
		return this.speed;
	}

	getName(): string {
		return this.name;
	}

	// Support method
	static generateRandomSpeed(maxSpeed: number) : number {
		return Math.floor(Math.random() * maxSpeed) +1;
	}
}