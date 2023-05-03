const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Artist = require('./Artist');

const Song = sequelize.define('song', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    durantion: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    album: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Song.belongsToMany(Artist, { through: 'songArtist' })
Artist.belongsToMany(Song, { through: 'songArtist' })

module.exports = Song;