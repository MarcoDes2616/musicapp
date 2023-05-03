const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

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


module.exports = Song;