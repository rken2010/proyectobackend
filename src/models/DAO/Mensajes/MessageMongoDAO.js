import mensajes from "../../schema/MensajeSchema.js"
import logger from "../../../scripts/logger.js";
import { connectToDB, disconnectToDB,  } from "../connectDB.js";

class ProductDbDAO {
    constructor(nameCollection) {
        this.nameCollection = nameCollection;
        this.model = mensajes;
      }
    static{
        connectToDB()
    }
    async getByUser(email) {
        const mensajes = await this.model.findOne(email);
        disconnectToDB()
        return mensajes;
    }

    async getAll() {
        try {
            const mensajes = await this.model.find()
            disconnectToDB()
            return mensajes
            
        } catch (error) {
            logger.error(`${error} - Fail to read database`)
        }
    }

    async save(elem) {
      const nuevoMensaje = new this.model(elem);
      await nuevoMensaje.save();
      disconnectToDB()
      return nuevoMensaje 
    }

    async update(id, elem) {
        try{
        await this.modelo.findByIdAndUpdate(id, elem);
        disconnectToDB()
        logger.info("Cambio realizado")
        } catch (error) {
            logger.error(`${error} - Fail to update element`)
        }
        
    }

    async deleteById(id) {
       try { return await this.model.findByIdAndDelete(id);}
       catch (error) {
        logger.error(`${error} - Fail to delete element`)
    }
    disconnectToDB()
        
    }

    async deleteAll() {
        try { return await this.model.deleteMany({});}
        catch (error) {
         logger.error(`${error} - Fail to delete elements`)
     }  
     disconnectToDB()     
    }
}

export default ProductDbDAO
