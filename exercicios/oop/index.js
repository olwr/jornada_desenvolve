import User from "./User.js";
import Admin from "./Admin.js";
import Tutor from "./Tutor.js";

const newTutor = new Tutor('Kyle', 'kyle@mail.com', '1997-03-09');
console.log(newTutor.showInfo()); 
console.log(newTutor.approvesStudent('Alice', 'JS'));

const newAdmin = new Admin('Amanda', 'amanda@mail.com', '1993-01-03');
console.log(newAdmin.showInfo()); 
console.log(newAdmin.createCourse('JavaScript: OOP', 13));

const newUser = new User('lua', 'lua@mail.com', '1998-12-25');
newUser.name = 'Lua';
console.log(newUser.showInfo());