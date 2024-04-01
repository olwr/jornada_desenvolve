function showInfo(name, email) {
    console.log(`user: ${name}, email: ${email}`)
};

const user = {
    name: 'Oliwer',
    email: 'olwr@mail.com',
    role: 'student',
    myFunction: function (fn) {
        fn.call(user, this.name, this.email)
    //  fn.apply(user, [this.name, this.email])
    }
};

const admin = {
    name: 'Lua',
    email: 'lua@mail.com',
    role: 'admin',
    createsCourse() {
        console.log('new course created!')
    }
}

Object.setPrototypeOf(admin, user);

user.myFunction(showInfo);
admin.myFunction(showInfo);
admin.createsCourse();