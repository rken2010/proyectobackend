import mensajes from "../../schema/MensajeSchema.js"
import logger from "../../../scripts/logger.js";

class ProductDbDAO {
    constructor(nameCollection) {
        this.nameCollection = nameCollection;
        this.model = mensajes;
      }
    async getByUser(email) {
        const mensajes = await this.model.findOne(email);
        return mensajes;
    }

    async getAll() {
        try {
            const mensajes = await this.model.find()
            return mensajes
            
        } catch (error) {
            logger.error(`${error} - Fail to read database`)
        }
    }

    async save(elem) {
      const nuevoMensaje = new this.model(elem);
      await nuevoMensaje.save();
      return nuevoMensaje 
    }

    async update(id, elem) {
        try{
        await this.modelo.findByIdAndUpdate(id, elem);
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
        
    }

    async deleteAll() {
       
    }
}

export default ProductDbDAO
