import Employee from "./Employee";

export default class EmployeeController {

	static getTotalSalary(employeeList: Employee[]) : number {
		let totalSalary = 0;
		employeeList.forEach(employee => {
			totalSalary = totalSalary + employee.getSalary();
		});
		return totalSalary;
	}
}