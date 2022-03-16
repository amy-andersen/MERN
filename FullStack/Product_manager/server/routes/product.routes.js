const ProductController = require('../controllers/product.controller');

//export, to be imported in server.js
module.exports = (app)=> {
    //specify endpoint itself, and what happens when hit
    app.get("/api/products", ProductController.findAllProducts);
    app.post("/api/products", ProductController.createNewProduct);
    app.get("/api/products/:id", ProductController.findOneProduct);
    app.delete("/api/products/:id", ProductController.deleteOneProduct);
    app.put("/api/products/:id", ProductController.updateProduct);
}