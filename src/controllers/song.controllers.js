const catchError = require('../utils/catchError');
const Song = require('../models/Song');
const Album = require('../models/Album');
const Genre = require('../models/Genre');
const Artist = require('../models/Artist');

const getAll = catchError(async(req, res) => {
    const results = await Song.findAll({include: [Album, Genre, Artist]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Song.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Song.findByPk(id, {include: [Album, Genre, Artist]});
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Song.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Song.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

const setSongGenre = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Song.findByPk(id)
    await result.setGenres(req.body)
    const genre = await result.getGenres()
    return res.status(201).json(genre);
});

const setSongArtist = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Song.findByPk(id)
    await result.setArtists(req.body)
    const artist = await result.getArtists()
    return res.status(201).json(artist);
});



module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setSongGenre,
    setSongArtist
}