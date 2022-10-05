import CarritoApi from "../service/CarritoApi.js"
import { logger } from "../scripts/logger.js"

class ControladorCarritos{
    constructor() {
        this.apiCarrito = new CarritoApi()
    }
    obtenerTodos = async ( req, res) => {
        try{
            let carritos = await this.apiCarrito.obtenerCarritos()
            res.json( carritos )
        }
        catch(error){
            logger.error(error)
        }
    }
    obtenerPorId = async ( req, res) => {
        try{
            let id = req.params.id
            let carrito = await this.apiCarrito.obtenerCarritoPorId(id)
            res.json( carrito )

        }
        catch(error){
            logger.error(error)
        }
    }
    guardar = async ( req, res) => {
        try{
            let carrito = req.body
            let carritoGuardado = await this.apiCarrito.guardarCarritos( carrito )
            res.json( carritoGuardado )

        }
        catch(error){
            logger.error(error)
        }
    }
    actualizar = async ( req, res) => {
        try{
            let carrito = req.body
            let id = req.params.id
            let carritoModificado = await this.apiCarrito.actualizarCarrito(id , carrito)
            res.json( carritoModificado )

        }
        catch(error){
            logger.error(error)
        }
    }
    borrarPorId = async ( req, res) => {
        try{
            let id = req.params.id
            let CarritoBorrado = await this.apiCarrito.borrarCarritoPorId( id )
            res.json( CarritoBorrado )
        }
        catch(error){
            logger.error(error)
        }
    }
    borrarTodo = async ( req, res) => {
        try{ await this.apiCarrito.borrarTodo() }
        catch(error){
            logger.error(error)
        }
    }
}

export default ControladorCarritos