const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* this is schema, which includes colomn names and their expected values */
const usersSchema = new Schema({
    username: {
        unique : true,
        type: String
    },
    password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

/* this is for create mongodb collection(table in general) based on created schema */
const usersModel = mongoose.model('users', usersSchema);

module.exports = {
    usersModel
}