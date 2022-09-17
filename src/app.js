import express from "express" 
import config from "./config/config.js"

const app = express()

app.use( express.static("public"))
app.use( express.json())

//---------------RUTAS ------------------//

//---------------------------------------//


//-----------SERVIDOR ESCUCHANDO---------//

const server = app.listen( config.PORT, ()=>{ 
    console.log( `Servidor escuchando en http://${config.HOST}:${config.PORT} - MODO: ${config.NODE_ENV} - PERSISTENCIA: ${config.PERSISTENCIA}`)
})

server.on( "error", error => console.log("Error en servidor:", error))