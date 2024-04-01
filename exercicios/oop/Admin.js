import User from "./User.js";

export default class Admin extends User {
    constructor(name, email, birthDate, role = 'admin', active = true) {
        super(name, email, birthDate, role, active);
    };

    showInfo() {
        return `${this.name}, ${this.role}, ${this.active}`;
    };

    createCourse(name, seats) {
        return `Course "${name}" created with ${seats} available seats`
    };
}