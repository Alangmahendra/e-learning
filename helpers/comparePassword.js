const bcrypt = require('bcrypt');

function comparePassword(plain_password, hash_password, cb) {
    // console.log(plain_password)
    // console.log(hash_password)
    bcrypt.compare(plain_password, hash_password)
    .then( res => {
        // console.log(" ini dalam checker");
        // console.log(res)
        cb(res)
      })
    .catch(err => {
        console.log(err)
    });
}

module.exports = comparePassword