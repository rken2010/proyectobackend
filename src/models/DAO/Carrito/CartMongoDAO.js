import carritos from "../../schema/CarritoSchema.js"
import logger from "../../../scripts/logger.js";
import { connectToDB, disconnectToDB,  } from "../connectDB.js";

class CartDbDAO {
    constructor(nameCollection) {
        this.nameCollection = nameCollection;
        this.model = carritos;
      }
    static{
        connectToDB()
    }
    async getById(id) {
        const carrito = await this.model.findById(id);
        disconnectToDB()
        return carrito;
    }

    async getAll() {
        try {
            const carritos = await this.model.find()
            disconnectToDB()
            return carritos
            
        } catch (error) {
            logger.error(`${error} - Fail to read database`)
        }
    }

    async save(elem) {
      const nuevoCarrito = new this.model(elem);
      await nuevoCarrito.save();
      disconnectToDB()
      return nuevoCarrito 
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

export default CartDbDAO
