import UsuariosFactoryDAO from "../models/DAO/Usuarios/UsuariosFactoryDAO.js"
import config from "../../src/config/config.js"

class UsuariosApi{
    constructor(){
        this.usuariosDAO = UsuariosFactoryDAO.get( config.PERSISTENCIA )
    }
    async obtenerUsuarios() { return await this.usuariosDAO.getAll()}
    async obtenerUsuarioPorId(id) { return await this.usuariosDAO.getByID(id)}
    async guardarUsuario( usuario ) { return await this.usuariosDAO.save( usuario )}
    async actualizarUsuario(id, usuario) { return await this.usuariosDAO.update(id, usuario)}
    async borrarUsuarioPorId(id) { return await this.usuariosDAO.deleteById(id)}
    async borrarTodo() { return await this.usuariosDAO.deleteAll()}
}

export default UsuariosApi