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
        return usuario;
    }

    async getAll() {
        try {
            const usuarios = await this.model.find()
            return usuarios
            
        } catch (error) {
            logger.error(`${error} - Fail to read database`)
        }
    }

    async save(elem) {
      const nuevoUsuario = new this.model(elem);
      await nuevoUsuario.save();
      return nuevoUsuario
       
    }

    async update(id, elem) {
        await this.model.findByIdAndUpdate(id, elem);
    }

    async deleteById(id) {
        const usuarioBorrado= await this.model.findOneAndDelete(id);
        return usuarioBorrado
    
    }

    async deleteAll() {
       
    }
}

export default UserDbDAO
