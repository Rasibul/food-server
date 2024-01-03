const mongoose = require('mongoose')
const { Schema } = mongoose

// create schema object for menuitems
const menuSchema = new Schema({
    name: {
        type: String,
        trim: true,
        require: true,
        minlength: 3,
    },
    recipe: String,
    image: String,
    category: String,
    price: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }

})

// create model
const menu = mongoose.model("Menu", menuSchema)
module.exports = menu;