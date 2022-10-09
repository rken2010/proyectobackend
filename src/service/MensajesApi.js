import MensajesFactoryDAO from "../models/DAO/Mensajes/FactoryMjeDAO.js"
import config from "../../src/config/config.js"

class MensajesApi{
    constructor(){
        this.MensajesDAO = MensajesFactoryDAO.get( config.PERSISTENCIA )
    }
    async obtenerMensajes() { return await this.MensajesDAO.getAll()}
    async obtenerPorUsuario(email) { return await this.MensajesDAO.getByUser(email)}
    async guardarMensaje( mensaje ) { return await this.MensajesDAO.save( mensaje )}
    async actualizarMensaje(id, mensaje) { return await this.MensajesDAO.update(id, mensaje)}
    async borrarMensajePorId(id ) { return await this.MensajesDAO.deleteById(id)}
    async borrarTodoMjes() { return await this.MensajesDAO.deleteAll()}
}

export default MensajesApi