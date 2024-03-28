export default class Employee {

	protected name: string;
	protected salary: number;

	constructor(name: string, salary: number){
		this.name = name;
		this.salary = salary;
	}

	getName(): string {
		return this.name;
	}

	getSalary(): number {
		return this.salary;
	}
}