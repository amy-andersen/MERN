const express = require('express');
const cors = require('cors');
const app = express();

//set up middleware
//allows us to recognized Request Objects as JSON objects
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//cors let's front end talk to back end
app.use(cors({
    origin: "http://localhost:3000"
}))

require('./config/mongoose.config')
require('./routes/product.routes')(app)

app.listen(8000, ()=>console.log("You are connected to port 8000"))