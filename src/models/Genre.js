const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Song = require('./Song');
const Artist = require('./Artist');

const Genre = sequelize.define('genre', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

Genre.belongsToMany(Song, { through: 'genreSong' })
Song.belongsToMany(Genre, { through: 'genreSong' })

Genre.belongsToMany(Artist, { through: 'genreArtist' })
Artist.belongsToMany(Genre, { through: 'genreArtist' })

module.exports = Genre;