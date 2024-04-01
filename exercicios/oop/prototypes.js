// function User(name, email) {
//   this.name = name
//   this.email = email

//   this.showInfo = function() {
//     return `${this.name}, ${this.email}`
//   }
// }

// const otherUser = new User('Oliwer', 'o@l.com')
// console.log(otherUser.showInfo())

// function Admin(role) {
//   User.call(this, 'Oliwer', 'o@l.com')
//   this.role = role || 'student'
// }

// Admin.prototype = Object.create(User.prototype)
// const otherUser = new Admin('admin')
// console.log(otherUser.showInfo())
// console.log(otherUser.role)

const user = {
    init: function (name, email) {
        this.name = name
        this.email = email
    },

    showInfo: function () {
        return this.name
    }
}

const otherUser = Object.create(user)
otherUser.init('Oliwer', 'o@l.com')
console.log(otherUser.showInfo())

// console.log(user.isPrototypeOf(otherUser))







