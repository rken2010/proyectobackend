import express from "express"
import passport from "passport"
const router = express.Router()

import ControladorLogin from "../controladores/Login.js"
import "./../auth/local.js"



class RouterLogin {
    constructor(){
        this.controladorLogin = new ControladorLogin()
    }
    inicializar(){
        //router.get("/", this.ControladorLogin.getRoot)
        //?login
        router.get("/login", this.controladorLogin.getLogin)
        router.post("/login", passport.authenticate("signin", { successRedirect:"/api/productos", failureRedirect:"/faillogin"}), this.controladorLogin.getLogin)
        router.get("/faillogin", this.controladorLogin.getFaillogin)
        /*
        //?signup
        router.get("/signup", this.controladorLogin.getSignup);
        router.post("/signup", passport.authenticate("signup", {failureRedirect:"/failsignup"}))
        router.get("/failsignup", this.controladorLogin.getFailSignup)

        //?logout
        router.get("logout", this.controladorLogin.getlogout)
        */
        return router
    }
}
export default RouterLogin;