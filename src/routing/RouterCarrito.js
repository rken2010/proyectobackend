import express from "express"
const router = express.Router()

import ControladorCarritos from "../controladores/Carrito.js"

class RouterCarrito {
    constructor(){
        this.controladorCarrito = new ControladorCarritos()
    }
    inicializar(){
        router.get("/api/carritos", this.controladorCarrito.obtenerTodos)
        router.get("/api/carritos/:id?", this.controladorCarrito.obtenerPorId)
        router.post("/api/carritos", this.controladorCarrito.guardar)
        router.put("/api/carritos/:id?", this.controladorCarrito.actualizar)
        router.delete("/api/carritos/:id?", this.controladorCarrito.borrarPorId)
        router.delete("/api/carritos/:id?", this.controladorCarrito.borrarTodo)
        return router
    }
}
export default RouterCarrito;