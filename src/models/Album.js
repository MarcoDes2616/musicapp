const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Artist = require('./Artist');

const Album = sequelize.define('album', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    release_year: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Album.belongsTo(Artist)
Artist.hasMany(Album)

module.exports = Album;