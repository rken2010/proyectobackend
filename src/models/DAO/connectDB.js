import mongoose from "mongoose";
import config from "../../config/config.js";
import logger from "../../scripts/logger.js"

export function connectToDB() {
    try{
    const URI = `mongodb://localhost:27017/${config.MONGO_DB}`
    mongoose.connect( URI ,{ 
        useNewUrlParser: true,
        useUnifieldTopology: true
    } )
        logger.info("Conectado a la Base de datos")
    }
    catch(err){ logger.error(`Error al conectar a la Base de Datos`, err)}
}

export function  disconnectToDB() {
    try{
    mongoose.disconnect()
    logger.info('DB -> cerrado!')
    }
    catch(err){ logger.error(`Error al desconectar a la Base de Datos`, err)}

}

export default { connectToDB,disconnectToDB }