const mongoose = require('mongoose');

//Schema with setup and punchline 
const JokeSchema = new mongoose.Schema(
    {
    setup: String,
    punchline: String
    },
    { timestamps: true }
);

//to create a db collection named jokes
const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;