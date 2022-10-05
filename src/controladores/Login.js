import { logger } from "../scripts/logger.js"

export default class ControladorLogin{
    
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
    
    


}