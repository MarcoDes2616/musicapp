const { getAll, create, getOne, remove, update, setSongGenre, setSongArtist } = require('../controllers/song.controllers');
const express = require('express');

const songRouter = express.Router();

songRouter.route('/')
    .get(getAll)
    .post(create);

songRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

songRouter.route("/:id/genres")
    .post(setSongGenre)

songRouter.route("/:id/artists")
    .post(setSongArtist)

module.exports = songRouter;