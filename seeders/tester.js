'use strict'
const model = require('./models');
const User  = model.User;

let user = new User();
user.email    = "a@b.com"
user.password = "123"
user.save().then( (result,err) => {
    result.compare_password("123", data => {
        console.log(" Ini dalam Seeder / tester")
        console.log(data);
    })
})

