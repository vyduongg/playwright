import Employee from "./Employee";

export default class FTE extends Employee {
	 
	constructor(name: string){
		super(name, 50000);
	}
}