import UsuariosApi from "../service/UsuariosApi.js"
import { logger } from "../scripts/logger.js"

class ControladorUsuarios{
    constructor() {
        this.apiUsuarios = new UsuariosApi()
    }
    obtenerTodos = async ( req, res) => {
        try{
            let mensajes = await this.apiUsuarios.obtenerUsuarios()
            res.send( mensajes )
        }
        catch(error){
            logger.error(error)
        }
    }
    obtenerPorId = async ( req, res) => {
        try{
            let id = req.params.id
            let usuario = await this.apiUsuarios.obtenerUsuarioPorId(id)
            res.json( usuario )

        }
        catch(error){
            logger.error(error)
        }
    }
    guardar = async ( req, res) => {
        try{
            let usuario = req.body
            let usuarioGuardado = await this.apiUsuarios.guardarUsuario( usuario )
            res.json( usuarioGuardado )

        }
        catch(error){
            logger.error(error)
        }
    }
    actualizar = async ( req, res) => {
        try{
            let usuario = req.body
            let id = req.params.id
            let usuariomodificado = await this.apiUsuarios.actualizarUsuario(id , usuario)
            res.json( usuariomodificado )

        }
        catch(error){
            logger.error(error)
        }
    }
    borrarPorId = async ( req, res) => {
        try{
            let id = req.params.id
            let usuarioBorrado = await this.apiUsuarios.borrarUsuarioPorId( id )
            res.json( usuarioBorrado )
        }
        catch(error){
            logger.error(error + " - No se pudo borrar")
        }
    }
    borrarTodo = async ( req, res) => {
        try{
            let mensajes = await this.apiUsuarios.borrarTodoMjes()

        }
        catch(error){
            logger.error(error)
        }
    }
}

export default ControladorUsuarios