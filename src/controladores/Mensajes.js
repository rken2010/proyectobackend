import MensajesApi from "../service/MensajesApi.js"
import { logger } from "../scripts/logger.js"

class ControladorMensajes{
    constructor() {
        this.apiMensajes = new MensajesApi()
    }
    obtenerTodos = async ( req, res) => {
        try{
            let mensajes = await this.apiMensajes.obtenerMensajes()
            return mensajes
        }
        catch(error){
            logger.error(error)
        }
    }
    obtenerPorUsuario = async ( req, res) => {
        try{
            let id = req.params.email
            let mensaje = await this.apiMensajes.obtenermensajePorUsuario(email)
            res.json( mensaje )

        }
        catch(error){
            logger.error(error)
        }
    }
    guardar(mensaje) { async ( req, res) => {
        try{
            
            let mensajeGuardado = await this.apiMensajes.guardarMensaje( mensaje )
            console.log(mensajeGuardado);
            res.json( mensajeGuardado )

        }
        catch(error){
            logger.error(error)
        }
    }
    }
    actualizar = async ( req, res) => {
        try{
            let mensaje = req.body
            let id = req.params.id
            let mensajeModificado = await this.apiMensajes.actualizarmensaje(id , mensaje)
            res.json( mensajeModificado )

        }
        catch(error){
            logger.error(error)
        }
    }
    borrarPorId = async ( req, res) => {
        try{

            let id = req.params.id
            let mensajeBorrado = await this.apiMensajes.borrarMensajePorId( id )
            res.json( mensajeBorrado )
        }
        catch(error){
            logger.error(error)
        }
    }
    borrarTodo = async ( req, res) => {
        try{
            let mensajes = await this.apiMensajes.borrarTodoMjes()

        }
        catch(error){
            logger.error(error)
        }
    }
}

export default ControladorMensajes