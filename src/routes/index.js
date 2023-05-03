const express = require('express');
const genreRouter = require('./genre.router');
const artistRouter = require('./artist.router');
const songRouter = require('./song.router');
const albumRouter = require('./album.router');
const router = express.Router();

// colocar las rutas aquí
router.use("/api/v1/genres", genreRouter)

router.use("/api/v1/artists", artistRouter)

router.use("/api/v1/songs", songRouter)

router.use("/api/v1/albums", albumRouter)

module.exports = router;