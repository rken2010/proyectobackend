import express from "express" 
import config from "../src/config/config.js"
import enviarMail from "./scripts/mailer.js"



import logger from "./scripts/logger.js"

import RouterProductos from "../src/routing/RouterProductos.js"
import RouterMensajes from "./routing/RouterMensajes.js"
import RouterInfo from "./routing/RouterInfo.js"
import RouterUsuarios from "./routing/RouterNuevoUsuario.js"

import { swaggerSpecs } from "./docs/swaggerSpecs.js"
import SwaggerUI from "swagger-ui-express"

import { engine } from 'express-handlebars';

const app = express()

app.use( express.static("public"))
app.use( express.json())


app.use("/api/docs", SwaggerUI.serve, SwaggerUI.setup(swaggerSpecs) )

//---------------RUTAS ------------------//
const routerProductos = new RouterProductos()
const routerMensajes = new RouterMensajes()
const routerUsuarios = new RouterUsuarios()
const routerInfo = new RouterInfo()


app.use("/", routerProductos.inicializar())
app.use("/", routerMensajes.inicializar())
app.use("/", routerInfo.inicializar())
app.use("/", routerUsuarios.inicializar())
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
  
  app.listen(config.PORT, (error)  => {
    if(error){ logger.error(`Error Server - ${error}`)}
    logger.info(`App listening at http://localhost:${config.PORT} - PID ${process.pid} - MODO ${config.NODE_ENV} - PERSISTENCIA: ${config.PERSISTENCIA}`);
  });
  
