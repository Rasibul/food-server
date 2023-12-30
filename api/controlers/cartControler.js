const Carts = require('../models/Cart')


const getCartByEmail = async (req, res) => {
    try {
        const email = req.query.email
        const query = { email: email }
        const result = await Carts.find(query).exec()
        res.status(200).json(result)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// post to cart when user click add to cart button

const addToCart = async (req, res) => {
    const { menuItemId, name, recipe, image, price, quinty, email } = req.body
    try {
        // existing menu item
        const exstingCardItem = await Carts.findOne({ menuItemId })
        if (exstingCardItem) {
            return res.status(400).json({ message: "Product alredy exist in the cart" })
        }

        const cartItem = await Carts.create({
            menuItemId, name, recipe, image, price, quinty, email
        })

        res.status(201).json(cartItem)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// delete card

const deleteCart = async (req, res) => {
    const cartId = req.params.id
    try {
        const deletedCart = await Carts.findByIdAndDelete(cartId)
        if (!deletedCart) {
            return res.status(400).json({ message: "Cart Item not found" })
        }
        res.status(200).json({ message: "Cart Irem Delted Successfuly" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// updata a cart item
const updateCart = async (req, res) => {
    const cartId = req.params.id;
    const { menuItemId, name, recipe, image, price, quinty, email } = req.body;

    try {
        const updatedCart = await Carts.findByIdAndUpdate(
            cartId, {  menuItemId, name, recipe, image, price, quinty, email }, {
            new: true, runValidators: true
        }
        )
        if (!updatedCart) {
            return res.status(404).json({ message: "Cart Item not found" })
        }
        res.status(200).json(updatedCart)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// get single recipe
const getSingleCart = async (req, res) => {
    const cartId = req.params.id;
    try {
        const cartItem = await Carts.findById(cartId)
        res.status(200).json(cartItem)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getCartByEmail, addToCart, deleteCart,updateCart,getSingleCart
}