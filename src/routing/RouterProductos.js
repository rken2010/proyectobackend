import express from "express"
const router = express.Router()

import ControladorProductos from "../controladores/Productos.js"

class RouterProductos {
    constructor(){
        this.controladorProductos = new ControladorProductos()
    }
    inicializar(){
        router.get("/api/productos", this.controladorProductos.obtenerTodos)
        router.get("/api/productos/:id?", this.controladorProductos.obtenerPorId)
        router.post("/api/productos", this.controladorProductos.guardar)
        router.put("/api/productos/:id?", this.controladorProductos.actualizar)
        router.delete("/api/productos/:id?", this.controladorProductos.borrarPorId)
        router.delete("/api/productos/:id?", this.controladorProductos.borrarTodo)
        return router
    }
}
export default RouterProductos;