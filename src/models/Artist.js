const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Genre = require('./Genre');

const Artist = sequelize.define('artists', {
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    country: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    formationYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});



module.exports = Artist;