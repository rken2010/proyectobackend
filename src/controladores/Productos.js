import ProductosApi from "../service/ProductosApi.js"
import { logger } from "../scripts/logger.js"

class ControladorProductos{
    constructor() {
        this.apiProductos = new ProductosApi()
    }
    obtenerTodos = async ( req, res) => {
        try{
            let productos = await this.apiProductos.obtenerProductos()
            res.render( "productosVista", { productos })
        }
        catch(error){
            logger.error(error)
        }
    }
    obtenerPorId = async ( req, res) => {
        try{
            let id = req.params.id
            let producto = await this.apiProductos.obtenerProductoPorId(id)
            res.json( producto )

        }
        catch(error){
            logger.error(error)
        }
    }
    guardar = async ( req, res) => {
        try{
            let producto = req.body
            let productoGuardado = await this.apiProductos.guardarProductos( producto )
            res.json( productoGuardado )

        }
        catch(error){
            logger.error(error)
        }
    }
    actualizar = async ( req, res) => {
        try{
            let producto = req.body
            let id = req.params.id
            let productoModificado = await this.apiProductos.actualizarProducto(id , producto)
            res.json( productoModificado )

        }
        catch(error){
            logger.error(error)
        }
    }
    borrarPorId = async ( req, res) => {
        try{
            let id = req.params.id
            let productoBorrado = await this.apiProductos.borrarProductoPorId( id )
            res.json( productoBorrado )
        }
        catch(error){
            logger.error(error)
        }
    }
    borrarTodo = async ( req, res) => {
        try{
            let productos = await this.apiProductos.borrarTodo()

        }
        catch(error){
            logger.error(error)
        }
    }
}

export default ControladorProductos