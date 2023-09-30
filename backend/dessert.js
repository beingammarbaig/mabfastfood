const mongoose = require("mongoose")
const { Schema } = mongoose;
const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    },
    desc:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Dessert',UserSchema)