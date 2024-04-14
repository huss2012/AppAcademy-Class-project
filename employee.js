

class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager;

        if (manager !== null) {
            manager.addEmployee(this);
        }
    }

    calculateBonus(multiplier) {
        //employee
            let bonus = this.salary * multiplier;
            return bonus;
    }


}


//Local tests:
// const raph = new Employee('Raphael', 90000, 'Ninja');
// const donny = new Employee('Donatello', 85000, 'Grasshopper');

// console.log(raph.calculateBonus(0.25)); // => 22500
// console.log(donny.calculateBonus(0.15)); // => 12750


module.exports = Employee;
