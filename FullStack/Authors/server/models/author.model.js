const mongoose = require('mongoose');

//new mongoose schema to shape the data
const AuthorSchema = new mongoose.Schema({

    name: {
        type: String,
        //validators
        required: [true, "A name is required"],
        minlength: [3, "The title's length must be at least 3 characters"]
    }

    //use timestamps to get createdAt and updatedAt for each document
}, {timestamps: true})


//model takes in collection name (which will become lowercase plural) and schema
const Author = mongoose.model("Author",AuthorSchema);

//export model to be imported in controller
module.exports = Author;