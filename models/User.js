const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: email,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});