import express from "express"
import passport from "passport"
const router = express.Router()

import ControladorLogin from "../controladores/Login.js"

class RouterLogin {
    constructor(){
        this.controladorLogin = new ControladorLogin()
    }
    inicializar(){
        router.get("/login", this.controladorLogin.getLogin)
        //router.post("/login", passport.authenticate("login", { failureRedirect:"/errorLogin"}), ControladorLogin.postLogin)
        
        return router
    }
}
export default RouterLogin;