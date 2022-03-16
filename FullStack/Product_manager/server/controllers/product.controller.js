const Product = require('../models/product.model');

//export, to be imported in routes
module.exports = {

    findAllProducts: (req,res)=>{
        Product.find()
            .then((allProducts)=>{
                console.log(allProducts);
                res.json(allProducts);
            })
            .catch((err)=>{
                console.log("Something went wrong with find all query");
                res.json({message: "Something went wrong in findAll",error: err});
            })
    },

    createNewProduct: (req,res)=>{
        Product.create(req.body)
            .then((newProduct)=>{
                console.log(newProduct);
                res.json(newProduct);
            })
            .catch((err)=>{
                console.log("Something went wrong with create query");
                //400 status means client is talking to server fine but data failed validations
                res.status(400).json(err);
            })
    },

    findOneProduct: (req,res)=>{
        Product.findOne({_id: req.params.id})
            .then((oneProduct)=>{
                console.log(oneProduct);
                res.json(oneProduct);
            })
            .catch((err)=>{
                console.log("Something went wrong with find one query");
                res.json({message: "Something went wrong in findOne",error: err});
            })
    },

    deleteOneProduct: (req,res)=>{
        Product.deleteOne({_id: req.params.id})
            .then((deletedProduct)=>{
                console.log(deletedProduct);
                res.json(deletedProduct);
            })
            .catch((err)=>{
                console.log("Something went wrong with delete one query");
                res.json({message: "Something went wrong in deleteOne",error: err});
            })
    },

    updateProduct: (req,res)=>{
        Product.findOneAndUpdate({_id: req.params.id},
            req.body,
            //validators only run on post requests by default, so need to specify
            {new: true, runValidators: true}
            )
            .then((updatedProduct)=>{
                console.log(updatedProduct);
                res.json(updatedProduct);
            })
            .catch((err)=>{
                console.log("Something went wrong with update query");
                //400 status means client is talking to server fine but data failed validations
                res.status(400).json(err);
            })
    }

}
