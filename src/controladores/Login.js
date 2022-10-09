import { logger } from "../scripts/logger.js"

export default class ControladorLogin{
    //getRoot( req, res) { res.render("home", {nombre: req.session?.nombre})}
    getLogin(req, res){
        if( req.isAuthenticated()) {
            let user = req.user
            logger.info("Usuario logueado")
            res.render("home", {nombre:user})
        }
        else {
            logger.info("Usuario no logueado")
            res.render("login")
        }
    }
    postLogin( req, res) { 
        var user = req.user;
        res.render("home", {nombre:user})
    }
    getFaillogin(req, res){
        
            logger.info("Usuario no logueado")
            res.render("loginError")
        }
}
    
    


