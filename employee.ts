export class Employee {
    id: number;
    name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
    displayEmployee() {
        console.log(`Employee id: ${this.id}, Employee name: ${this.name}`);
    }
}