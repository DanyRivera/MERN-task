const moongose = require('mongoose');
require('dotenv').config({path: 'variables.env'});

const conectarDB = async () => {
    try {
        await moongose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });

        console.log('Conectada la db!')

    } catch (error) {
        console.log(error)
        process.exit(1) //Detener la app en caso de error
    }
}

module.exports = conectarDB;
