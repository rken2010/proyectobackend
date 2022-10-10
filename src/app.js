import express from "express" 
import config from "../src/config/config.js"

//** -------------------SOCKET---------------- //

import { Server as Socket } from 'socket.io'
import { Server as HttpServer } from 'http'

import logger from "./scripts/logger.js"

import RouterProductos from "../src/routing/RouterProductos.js"
import RouterMensajes from "./routing/RouterMensajes.js"
import RouterInfo from "./routing/RouterInfo.js"
import RouterUsuarios from "./routing/RouterNuevoUsuario.js"
import RouterCarrito from "./routing/RouterCarrito.js"
import RouterLogin from "./routing/RouterAuth.js"

import { swaggerSpecs } from "./docs/swaggerSpecs.js"
import SwaggerUI from "swagger-ui-express"

import { engine } from 'express-handlebars';
 
import session from "express-session"
import sfs from 'session-file-store'
const FileStore = sfs(session)

import morgan from "morgan"

import passport from "passport"
import "./auth/local.js"

import configurarSocket from './routing/ws/mensajes.js'


const app = express()
const httpServer = new HttpServer(app)
const io = new Socket(httpServer)

app.use( express.static("public"))
app.use( express.json())
app.use(express.urlencoded({extended:true}))


app.use("/api/docs", SwaggerUI.serve, SwaggerUI.setup(swaggerSpecs) )

// TODO --------- agregar Session-------- //

app.use(
  session({
    store: config.NODE_ENV == "prod"
      ? MongoStore.create({
      mongoUrl: config.MONGO_DB,
      mongoOptions: {useNewUrlParser: true, useUnifiedTopology: true },
      ttl: 600,
      }) :
      new FileStore({ 
        path: './src/sessions', 
        ttl: 60
      }),
    
      secret: 'hayCaramba',
      resave: false,
      saveUninitialized: false,
      cookie: {
          maxAge: 60000
      },
  })
)

// TODO ----------- PASSPORT ------------------//


//---------------------------------------------------//
// MIDDLEWARES DE PASSPORT
app.use(passport.initialize())
app.use(passport.session())

//------------SOCKET---------------------//

io.on('connection', async socket => {
   console.log('Nuevo cliente conectado!');
   configurarSocket(socket, io.sockets)
});



//---------------RUTAS ------------------//
const routerProductos = new RouterProductos()
const routerMensajes = new RouterMensajes()
const routerUsuarios = new RouterUsuarios()
const routerInfo = new RouterInfo()
const routerLogin = new RouterLogin()
const routerCarrito = new RouterCarrito()

//app.use(morgan("dev"))

app.use("/", routerProductos.inicializar())
app.use("/", routerMensajes.inicializar())
app.use("/", routerInfo.inicializar())
app.use("/", routerCarrito.inicializar())
app.use("/", routerUsuarios.inicializar())
app.use("/", routerLogin.inicializar())
//---------------------------------------//

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');


//-----------SERVIDOR ESCUCHANDO---------//

app.all('*', (req, res) => {
    const { url, method } = req
    logger.warn(`Ruta ${method} ${url} no implementada`)
    res.send(`Ruta ${method} ${url} no implementada`)
  })
  
  httpServer.listen(config.PORT, (error)  => {
    if(error){ logger.error(`Error Server - ${error}`)}
    logger.info(`App listening at http://localhost:${config.PORT} - PID ${process.pid} - MODO ${config.NODE_ENV} - PERSISTENCIA: ${config.PERSISTENCIA}`);
  });
  


