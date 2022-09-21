import express from "express" 
import config from "./config/config.js"

import logger from "./scripts/logger.js"

import RouterProductos from "../src/routing/RouterProductos.js"
import RouterMensajes from "./routing/RouterMensajes.js"

/*
import swaggerSpecs from "./scripts/documentacion.js"
import SwaggerUI from "swagger-ui-express"
*/
const app = express()

app.use( express.static("public"))
app.use( express.json())

/*

app.use("api/docs", SwaggerUI.serve, SwaggerUI.setup(swaggerSpecs) )
*/
//---------------RUTAS ------------------//
const routerProductos = new RouterProductos()
const routerMensajes = new RouterMensajes()

app.use("/", routerProductos.inicializar())
app.use("/", routerMensajes.inicializar())
//---------------------------------------//


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
  

