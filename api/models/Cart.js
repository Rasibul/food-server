const mongoose = require('mongoose')
const { Schema } = mongoose

const cartSchema = new Schema({
    menuItemId: String,
    name: {
        type: String,
        trim: true,
        require: true,
        minlength: 3,
    },
    recipe: String,
    image: String,
    price: Number,
    quinty:Number,
    email:{
        type:String,
        trim:true,
        require:true,
    }
})

const Carts = mongoose.model('Carts',cartSchema)
module.exports = Carts