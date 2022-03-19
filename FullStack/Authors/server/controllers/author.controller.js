const Author = require('../models/author.model');

//export, to be imported in routes
module.exports = {

    findAllAuthors: (req,res)=>{
        Author.find()
            .then((allAuthors)=>{
                console.log(allAuthors);
                res.json(allAuthors);
            })
            .catch((err)=>{
                console.log("Something went wrong with find all query");
                res.json({message: "Something went wrong in findAll",error: err});
            })
    },

    createNewAuthor: (req,res)=>{
        Author.create(req.body)
            .then((newAuthor)=>{
                console.log(newAuthor);
                res.json(newAuthor);
            })
            .catch((err)=>{
                console.log("Something went wrong with create query");
                //400 status means client is talking to server fine but data failed validations
                res.status(400).json(err);
            })
    },

    findOneAuthor: (req,res)=>{
        Author.findOne({_id: req.params.id})
            .then((oneAuthor)=>{
                console.log(oneAuthor);
                res.json(oneAuthor);
            })
            .catch((err)=>{
                console.log("Something went wrong with find one query");
                res.json({message: "Something went wrong in findOne",error: err});
            })
    },

    deleteOneAuthor: (req,res)=>{
        Author.deleteOne({_id: req.params.id})
            .then((deletedAuthor)=>{
                console.log(deletedAuthor);
                res.json(deletedAuthor);
            })
            .catch((err)=>{
                console.log("Something went wrong with delete one query");
                res.json({message: "Something went wrong in deleteOne",error: err});
            })
    },

    updateAuthor: (req,res)=>{
        Author.findOneAndUpdate({_id: req.params.id},
            req.body,
            //validators only run on post requests by default, so need to specify
            {new: true, runValidators: true}
            )
            .then((updatedAuthor)=>{
                console.log(updatedAuthor);
                res.json(updatedAuthor);
            })
            .catch((err)=>{
                console.log("Something went wrong with update query");
                //400 status means client is talking to server fine but data failed validations
                res.status(400).json(err);
            })
    }

}