const Album = require("./Album")
const Artist = require("./Artist")
const Genre = require("./Genre")
const Song = require("./Song")


Artist.belongsToMany(Genre, { through: "artistGenre"})
Genre.belongsToMany(Artist, { through: "artistGenre"})

Artist.hasMany(Album, {foreignKey: "artistId"})
Album.belongsTo(Artist, {foreignKey: "artistId"})

Album.hasMany(Song, {foreignKey: "albumId"})
Song.belongsTo(Album, {foreignKey: "albumId"})

Artist.belongsToMany(Song, {through: "songArtist"})
Song.belongsToMany(Artist, {through: "songArtist"})

Song.belongsToMany(Genre, {through: "songGenre"})
Genre.belongsToMany(Song, {through: "songGenre"})