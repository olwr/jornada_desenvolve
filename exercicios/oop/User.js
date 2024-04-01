export default class User {
    #name;
    #email;
    #birthDate;
    #role;
    #active;
    
    constructor(name, email, birthDate, role, active = true) {
        this.#name = name;
        this.#email = email;
        this.#birthDate = birthDate;
        this.#role = role || 'student';
        this.#active = active;
    };

    get name() {
        return this.#name;
    };

    get email() {
        return this.#email;
    };

    get birthDate() {
        return this.#birthDate;
    };

    get role() {
        return this.#role;
    };

    get active() {
        return this.#active;
    };

    set name(newName) {
        if (newName === ''){
            throw new Error('invalid format')
        }
        return this.#name = newName;
    }

    showInfo() {
        return `${this.#name}, ${this.#email}`
    };
}