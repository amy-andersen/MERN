const AuthorController = require('../controllers/author.controller');

//export, to be imported in server.js
module.exports = (app)=> {
    //specify endpoint itself, and what happens when hit
    app.get("/api/authors", AuthorController.findAllAuthors);
    app.post("/api/authors", AuthorController.createNewAuthor);
    app.get("/api/authors/:id", AuthorController.findOneAuthor);
    app.delete("/api/authors/:id", AuthorController.deleteOneAuthor);
    app.put("/api/authors/:id", AuthorController.updateAuthor);
}