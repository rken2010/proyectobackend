import express from "express"
const router = express.Router()

import ControladorInfo from "../controladores/Info.js"

class RouterInfo {
    constructor(){
        this.controladorInfo = new ControladorInfo()
    }
    inicializar(){
        router.get("/api/info", this.controladorInfo.obtenerInfo)
       
        return router
    }
}
export default RouterInfo;