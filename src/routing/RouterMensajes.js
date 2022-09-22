import express from "express"
const router = express.Router()

import ControladorMensajes from "../controladores/Mensajes.js"

class RouterMensajes {
    constructor(){
        this.controladorMensajes = new ControladorMensajes()
    }
    inicializar(){
        router.get("/api/chat", this.controladorMensajes.obtenerTodos)
        router.get("/api/chat/:id?", this.controladorMensajes.obtenerPorId)
        router.post("/api/chat", this.controladorMensajes.guardar)
        router.put("/api/chat/:id?", this.controladorMensajes.actualizar)
        router.delete("/api/chat/:id?", this.controladorMensajes.borrarPorId)
        router.delete("/api/chat/:id?", this.controladorMensajes.borrarTodo)
        return router
    }
}
export default RouterMensajes;