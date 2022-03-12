const mongoose = require('mongoose');

//mongoose will create a new db called jokes_db since it doesn't already exist
mongoose.connect('mongodb://localhost/jokes_db',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection the the database'))
    .catch((err) => console.log('Something went wrong connecting to the database',err));
