const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Song = require('./Song');

const Genre = sequelize.define('genre', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

Genre.belongsToMany(Song, { through: 'genreSong' })
Song.belongsToMany(Genre, { through: 'genreSong' })

module.exports = Genre;