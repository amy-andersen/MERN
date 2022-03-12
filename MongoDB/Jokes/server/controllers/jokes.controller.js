const Joke = require('../models/jokes.model');

module.exports = {

    findAllJokes: (req,res)=>{
        Joke.find()
            .then((allJokes)=>{
                console.log(allJokes);
                res.json(allJokes);
            })
            .catch((err)=>{
                console.log("Find all jokes failed");
                res.json({message: "Something went wrong in find all jokes", error: err});
            })
    },

    findOneJoke: (req,res)=>{
        Joke.findOne({_id: req.params.id})
            .then((oneJoke)=>{
                console.log(oneJoke);
                res.json(oneJoke);
            })
            .catch((err)=>{
                console.log("Find one joke failed");
                res.json({message: "Something went wrong in find one joke", error: err});
            })
    },

    createNewJoke: (req,res)=>{
        Joke.create(req.body)
            .then((newJoke)=>{
                console.log(newJoke);
                res.json(newJoke);
            })
            .catch((err)=>{
                console.log("Create new failed");
                res.status(400).json(err);
            })
    },

    updateExistingJoke: (req,res)=>{
        Joke.findOneAndUpdate({_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
        )
            .then((updateJoke)=>{
                console.log(updateJoke);
                res.json(updateJoke);
            })
            .catch((err)=>{
                console.log("Update joke failed");
                res.status(400).json(err);
            })
    },

    deleteExistingJoke: (req,res)=>{
        Joke.deleteOne({_id: req.params.id})
            .then((deletedJoke)=>{
                console.log(deletedJoke);
                res.json(deletedJoke);
            })
            .catch((err)=>{
                console.log("Delete joke failed");
                res.json({message: "Something went wrong in delete joke", error: err});
            })
    }

}