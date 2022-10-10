import express from "express"
const router = express.Router()

import ControladorUsuarios from "../controladores/Usuarios.js"

class RouterUsuarios {
    constructor(){
        this.controladorUsuarios = new ControladorUsuarios()
    }
    inicializar(){
        router.get("/api/usuarios", this.controladorUsuarios.obtenerTodos)
        router.get("/api/usuario/:id?", this.controladorUsuarios.obtenerPorId)
        router.get("/api/usuarioPorUsername/", this.controladorUsuarios.obtenerPorUsername)
        router.post("/api/usuario", this.controladorUsuarios.guardar)
        router.put("/api/usuario/:id?", this.controladorUsuarios.actualizar)
        router.delete("/api/usuario/:id?", this.controladorUsuarios.borrarPorId)
        router.delete("/api/usuarios", this.controladorUsuarios.borrarTodo)
        return router
    }
}
export default RouterUsuarios;