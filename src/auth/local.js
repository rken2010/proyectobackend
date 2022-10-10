import passport from "passport";
import { Strategy } from "passport-local";
import UsuariosApi from "../service/UsuariosApi.js"

let apiUsuarios = new UsuariosApi()

passport.serializeUser( (user, done) => { done(null, user.id)})

passport.deserializeUser( async (id, done) => {
    const user = await apiUsuarios.obtenerPorId(id)
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
passport.use("login", new Strategy(  {
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true

} , async (  username, password, done ) => {

    const obtainUser = await apiUsuarios.obtenerUsuarioPorUsername(username)

    const user = async() => { await obtainUser}
    console.log(user);
    
    if(!user){
        console.log(user);
        return done( null, false)
    }
    if ( user.password === password ){
        console.log(user);
        return done(null, user)
    }
    
}))