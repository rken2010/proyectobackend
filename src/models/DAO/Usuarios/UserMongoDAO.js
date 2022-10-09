import usuarios from "../../schema/UsuarioSchema.js"
import { connectToDB } from "../connectDB.js";

class UserDbDAO {
    static{
       connectToDB()
    }
    constructor() {
        this.model = usuarios;
      }
    async getByID(id) {
        const usuario = await this.model.findById(id);
        mongoose.disconnect()
        return usuario;
    }
    async getByEmail( email ) {
        const usuario = await this.model.findOne({email:email});
        mongoose.disconnect()
        return usuario;
    }

    async getAll() {
        try {
            const usuarios = await this.model.find()
            mongoose.disconnect()
            return usuarios
            
        } catch (error) {
            logger.error(`${error} - Fail to read database`)
        }
    }

    async save(elem) {
      const nuevoUsuario = new this.model(elem);
      await nuevoUsuario.save();
      mongoose.disconnect()
      return nuevoUsuario
       
    }

    async update(id, elem) {
        const usuarioActualizado = await this.model.findByIdAndUpdate(id, elem);
        mongoose.disconnect()
        return usuarioActualizado
    }

    async deleteById(id) {
        const usuarioBorrado= await this.model.findOneAndDelete(id);
        mongoose.disconnect()
        return usuarioBorrado
    
    }

    async deleteAll() {
        try { return await this.model.deleteMany({});}
        catch (error) {
         logger.error(`${error} - Fail to delete elements`)
     }      
    }
}

export default UserDbDAO
