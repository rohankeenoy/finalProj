const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model('users', UserSchema)