import express from "express" 
import config from "../src/config/config.js"

//** -------------------SOCKET---------------- //
/*
import { Server as Socket } from 'socket.io'
import { Server as HttpServer } from 'http'
*/


import logger from "./scripts/logger.js"

import RouterProductos from "../src/routing/RouterProductos.js"
import RouterMensajes from "./routing/RouterMensajes.js"
import RouterInfo from "./routing/RouterInfo.js"
import RouterUsuarios from "./routing/RouterNuevoUsuario.js"
import RouterLogin from "./routing/RouterAuth.js"

import { swaggerSpecs } from "./docs/swaggerSpecs.js"
import SwaggerUI from "swagger-ui-express"

import { engine } from 'express-handlebars';
 
import session from "express-session"
import passport from "passport"



const app = express()
//const httpServer = new HttpServer(app)
//const io = new Socket(httpServer)

app.use( express.static("public"))
app.use( express.json())


app.use("/api/docs", SwaggerUI.serve, SwaggerUI.setup(swaggerSpecs) )

// TODO --------- agregar Session-------- //

app.use(
  session({
      secret: 'shhhhhhhhhhhhhh',
      resave: false,
      saveUninitialized: false,
      cookie: {
          maxAge: 60000
      },
  })
)

//---------------------------------------------------//
// MIDDLEWARES DE PASSPORT
app.use(passport.initialize())
app.use(passport.session())

//---------------RUTAS ------------------//
const routerProductos = new RouterProductos()
const routerMensajes = new RouterMensajes()
const routerUsuarios = new RouterUsuarios()
const routerInfo = new RouterInfo()
const routerLogin = new RouterLogin()


app.use("/", routerProductos.inicializar())
app.use("/", routerMensajes.inicializar())
app.use("/", routerInfo.inicializar())
app.use("/", routerUsuarios.inicializar())
app.use("/", routerLogin.inicializar())
//---------------------------------------//

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

//------------SOCKET---------------------//

//!-----VER COMO USAR APP.LISTEN Y HTTP----//
/*
io.on('connection', async socket => {
  console.log('Nuevo cliente conectado!');
  addProductosHandlers(socket, io.sockets)
  addMensajesHandlers(socket, io.sockets)
});
*/
//-----------SERVIDOR ESCUCHANDO---------//

app.all('*', (req, res) => {
    const { url, method } = req
    logger.warn(`Ruta ${method} ${url} no implementada`)
    res.send(`Ruta ${method} ${url} no implementada`)
  })
  
  app.listen(config.PORT, (error)  => {
    if(error){ logger.error(`Error Server - ${error}`)}
    logger.info(`App listening at http://localhost:${config.PORT} - PID ${process.pid} - MODO ${config.NODE_ENV} - PERSISTENCIA: ${config.PERSISTENCIA}`);
  });
  
