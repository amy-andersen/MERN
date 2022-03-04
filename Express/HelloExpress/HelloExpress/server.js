//import the express module
const express = require("express");
//invoke express
const app = express();

//creat routes and send some data
//in this case, saying we want to handle GET requests on this route
//second arg is the callback function we want to run when browswer makes request to this route
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser. Test change to see if the site updates with nodemon w/out restarting the server");
});

//app.listen is the code that actually runs the server on a specified port 
const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

//now in terminal, use nodemon server.js to run the server! 