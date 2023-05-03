const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

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


module.exports = Album;