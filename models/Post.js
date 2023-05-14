const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    email: {
        type: String, 
        required: true
    },
    title: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('users', UserSchema)