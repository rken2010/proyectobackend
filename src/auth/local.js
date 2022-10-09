import passport from "passport";
import { Strategy } from "passport-local";
import ControladorUsuarios from "./../controladores/Usuarios.js"

const controladorUsuario = new ControladorUsuarios()

passport.serializeUser( (user, done) => { done(null, user.id)})

passport.deserializeUser( async (id, done) => {
    const user = await controladorUsuario.obtenerPorId(id) //TODO ------ CAMBIAR POR EL CONTROLADOR --------------//
    done( null, user )
})
/*
passport.use("login", new Strategy({
    usernameField: "email",
    passwordField: "password",
    passReqToCallback: true
}, async (req, email, password, done) => {
    const existingUser = JSON.stringify( controladorUsuario.obtenerPorEmail(email))

    if( existingUser) {
        return done(null, false)
    } else{

    const newUser = new user(); //TODO ------ CAMBIAR POR EL CONTROLADOR --------------//
    newUser.email = email;
    newUser.password = password;
    await user.save(); //TODO ------ CAMBIAR POR EL CONTROLADOR --------------//
    done(null, user)
    }
}))
*/
passport.use("signin", new Strategy(  {
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true

} , async ( req, username, password, done ) => {
    const user = controladorUsuario.obtenerPorUsername(username)
    const data = req.body
    console.log(user);
    console.log(data);

    if(!user){
        return done( null, false)
    }
    if ( user.password == password ){
        return done(null, user)
    }
} ))