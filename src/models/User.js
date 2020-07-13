const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'User name is required'],
        unique: true
    },
})

module.exports = model('users', UserSchema)