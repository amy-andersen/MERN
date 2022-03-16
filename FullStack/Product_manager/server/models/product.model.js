const mongoose = require('mongoose');

//new mongoose schema to shape the data
const ProductSchema = new mongoose.Schema({

    title: {
        type: String,
        //validators
        required: [true, "A product's title is required"],
        maxlength: [100, "The title's length can be no more than 100 characters"]
    },

    price: {
        type: Number,
        min: [1, "The product's price must be at least $1"]
    },

    description: {
        type: String
    }

    //use timestamps to get createdAt and updatedAt for each document
}, {timestamps: true})


//model takes in collection name (which will become lowercase plural) and schema
const Product = mongoose.model("Product",ProductSchema);

//export model to be imported in controller
module.exports = Product;