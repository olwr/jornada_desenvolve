// Verifying type of variables
const typeCheck = (type) => {
    const typeString = Reflect.apply(Object.prototype.toString, type, [])
    return typeString.slice(
        typeString.indexOf(' ') + 1,
        typeString.indexOf(']')
    ).toLowerCase();
};

console.log(typeCheck([])) // array
console.log(typeCheck(null)) // null
console.log(typeCheck({})) // object
console.log(typeCheck('teste')) // string
console.log(typeCheck(123)) // number

// Making the data immutable
const freeze = (data) => Object.freeze(data);

// Deep Clone of an Array
const cloneArray = (element) => {
    if (typeCheck(element) !== 'array') return element;
    return element.map(deepClone);
};

// Deep Clone of an Object
const cloneObject = (element) => {
    if (typeCheck(element) !== 'object') return element
    return Object.fromEntries(
        Object.keys(element).map((key) =>
            [key, deepClone(element[key])]
        )
    )
};

// Deep Clone for both array and object
const deepClone = (element) => {
    switch (typeCheck(element)) {
        case 'array':
            return freeze(cloneArray(element));
            break;
        case 'object':
            return freeze(cloneObject(element));
            break;
        default:
            return element;
    }
};

const person = {
    name: 'oliwer',
    age: 22,
    hobbies: [
        'movie',
        'music',
        'books'
    ]
}

// Tests 

const numbers = [1, 2, 3];
const numbersCopy = numbers;

if (numbers === numbersCopy) {
    console.log('É o mesmo array');
};
if (!(numbers === cloneArray(numbers))) {
    console.log('São arrays distintos');
};

const user = { name: 'oliwer', address: { country: 'Brazil', state: 'RS' } };
const clonedUser = user;

if (user.address === clonedUser.address) {
    console.log('É o mesmo objeto');
};
if (!(user.address === cloneObject(user).address)) {
    console.log('São objetos distintos');
};

if (!(deepClone(person).hobbies === person.hobbies)) {
    console.log('São referências distintas');
};
if (!(deepClone(person) === person)) {
    console.log('São referências distintas');
};

const clonedPerson = deepClone(person)
console.log(clonedPerson === person) // false
console.log(clonedPerson.name) // oliwer

const newClonedPerson = clonedPerson
newClonedPerson.name = 'daniel'

console.log(newClonedPerson.name) // oliwer
console.log(clonedPerson.name) // oliwer