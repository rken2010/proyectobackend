import producto from "../../schema/ProductoSchema.js"
import { connectToDB } from "../connectDB.js";

class ProductDbDAO {
    static{
       connectToDB()
    }
    constructor() {
        this.model = producto;
      }
    async getByID(id) {
        const item = await this.model.findById(id);
        return item;
    }

    async getAll() {
        try {
            const productos = await this.model.find()
            return productos
            
        } catch (error) {
            logger.error(`${error} - Fail to read database`)
        }
    }

    async save(elem) {
      const nuevoItem = new this.model(elem);
      await nuevoItem.save();
      return nuevoItem
       
    }

    async update(id, elem) {
        await this.modelo.findByIdAndUpdate(id, elem);
    }

    async deleteById(id) {
        const productoBorrado = await this.model.findByIdAndDelete(id);
        return productoBorrado
    
    }

    async deleteAll() {
       
    }
}

export default ProductDbDAO
