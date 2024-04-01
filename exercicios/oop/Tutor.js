import User from "./User.js";

export default class Tutor extends User {
    constructor(name, email, birthDate, role = 'tutor', active = true) {
        super(name, email, birthDate, role, active);
    };

    approvesStudent(student, course) {
        return `Student, ${student}, approved in ${course}`;
    };
}