import express from "express"
const router = express.Router()

import ControladorMensajes from "../controladores/Mensajes.js"

class RouterMensajes {
    constructor(){
        this.controladorMensajes = new ControladorMensajes()
    }
    inicializar(){
        router.get("/api/chat", ( req , res) => { res.render("chat")})
        
        router.get("/api/chat/:usuario?", this.controladorMensajes.obtenerPorUsuario)
       
        return router
    }
}
export default RouterMensajes;