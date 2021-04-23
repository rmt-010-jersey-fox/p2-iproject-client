const bcrypt = require('bcrypt')
const salt = +process.env.SALT

const hashPassword = (password) => {
    return bcrypt.hashSync(password, salt)
}

const comparePassword = (plainPassword, encryptedPassword) => {
    return bcrypt.compareSync(plainPassword, encryptedPassword)
}

module.exports = {
    hashPassword,
    comparePassword
};
