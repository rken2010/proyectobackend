import ProductosFactoryDAO from "../models/DAO/Productos/FactoryDAO.js"
import config from "../config/config.js"

class ProductosApi{
    constructor(){
        this.productosDAO = ProductosFactoryDAO.get( config.PERSISTENCIA )
    }
    async obtenerProductos() { return await this.productosDAO.getAll()}
    async obtenerProductoPorId(id) { return await this.productosDAO.getByID(id)}
    async guardarProductos( producto ) { return await this.productosDAO.save( producto )}
    async actualizarProducto(id, producto) { return await this.productosDAO.update(id, producto)}
    async borrarProductoPorId(id ) { return await this.productosDAO.deleteById(id)}
    async borrarTodo() { return await this.productosDAO.deleteAll()}
}

export default ProductosApi