import CarritosFactoryDAO from "../models/DAO/Carrito/CarritosFactoryDAO.js"
import config from "../config/config.js"

class CarritoApi{
    constructor(){
        this.carritoDAO = CarritosFactoryDAO.get( config.PERSISTENCIA )
    }
    async obtenerCarritos() { return await this.carritoDAO.getAll()}
    async obtenerCarritoPorId(id) { return await this.carritoDAO.getById(id)}
    async guardarCarritos( carrito ) { return await this.carritoDAO.save( carrito )}
    async actualizarCarrito(id, carrito) { return await this.carritoDAO.update(id, carrito)}
    async borrarCarritoPorId(id ) { return await this.carritoDAO.deleteById(id)}
    async borrarTodo() { return await this.carritoDAO.deleteAll()}
}

export default CarritoApi