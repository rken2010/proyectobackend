import express from "express"
const router = express.Router()

import ControladorMensajes from "../controladores/Mensajes.js"

class RouterMensajes {
    constructor(){
        this.controladorMensajes = new ControladorMensajes()
    }
    inicializar(){
        router.get("/api/mensajes", this.controladorMensajes.obtenerTodos)
        router.get("/api/mensajes/:id?", this.controladorMensajes.obtenerPorId)
        router.post("/api/mensajes", this.controladorMensajes.guardar)
        router.put("/api/mensajes/:id?", this.controladorMensajes.actualizar)
        router.delete("/api/mensajes/:id?", this.controladorMensajes.borrarPorId)
        router.delete("/api/mensajes/:id?", this.controladorMensajes.borrarTodo)
        return router
    }
}
export default RouterMensajes;