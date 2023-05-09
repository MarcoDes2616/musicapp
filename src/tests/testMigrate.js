const sequelize = require('../utils/connection');
const {
    createDataArtist,
    createDataGenre,
    createDataAlbum,
    createDataSong
} = require('./createData/data');


const main = async() => {
    try{
        await sequelize.sync({ force: true });
        await createDataAlbum()
        await createDataArtist()
        await createDataSong()
        await createDataGenre()
        process.exit();
    } catch(error){
        console.log(error);
    }
}

main();