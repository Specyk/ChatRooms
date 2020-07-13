const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'User name is required']
    },
})

module.exports = model('users', UserSchema)