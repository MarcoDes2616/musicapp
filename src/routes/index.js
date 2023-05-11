const express = require('express');
const genreRouter = require('./genre.router');
const artistRouter = require('./artist.router');
const songRouter = require('./song.router');
const albumRouter = require('./album.router');
const router = express.Router();

// colocar las rutas aquí
router.use("/genres", genreRouter)

router.use("/artists", artistRouter)

router.use("/songs", songRouter)

router.use("/albums", albumRouter)

module.exports = router;