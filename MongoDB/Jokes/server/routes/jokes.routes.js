const JokeController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes',JokeController.findAllJokes);
    app.post('/api/jokes',JokeController.createNewJoke);
    app.get('/api/jokes/:id',JokeController.findOneJoke);
    app.delete('/api/jokes/:id',JokeController.deleteExistingJoke);
    app.put('/api/jokes/:id',JokeController.updateExistingJoke);
};