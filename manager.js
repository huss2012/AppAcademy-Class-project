const Employee = require("./employee");


class Manager extends Employee {
    constructor(name, salary, title, manager = null, employee = []) {
        super(name, salary, title, manager, employee);
        this.employees = employee;
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }
}

module.exports = Manager;
