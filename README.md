# Curso de Backend - CoderHouse - Comisión 30960

# Brief
El desarrollo del curso consiste en la creación de una aplicación **e-commerce** que pueda utilizarse para la comercialización de productos de un rubro a elección


# Tecnologias

Para su desarrollo se utilizará **Node JS**, implementando una API RESTful con las rutas correspondientes para aplicar todas las funciones necesarias.
Para crear el servidor se aplicara **Express** (https://expressjs.com/es/) para el desarrollo de la aplicación Web.

## Librerias 

### Node JS y Express
Como se menciono anteriormente, seran la base de la Aplicación para la creación y manejo del servidor y la comunicación con el Frontend.
### dotenv
Para el manejo de variables de entorno
### Mongo DB
Se utilizará **Mongo DB** como base de datos para el almacenamiento del catalogo ( productos) del negoción, como tambien los usuarios que tienen acceso a la Aplicación.
### mongoose
Para la conexion de Base de Datos de Mongo DB
### Handlebars
Como motor de plantillas se implementará **Handlebars** para la aplicación de plantillas del sitio. Se mostrará el listado de productos, los mensajes del chat y las páginas de registro y login a traves de este motor.
### express-session
Se implementa session como middleware para la manipulación de las sessiones
### Passport
Para la autorización y autenticación se utiliza **Passport** con sus estrategias locales (*passport-local*)
### bcrypt
Para la encriptación de las contraseñas
### Nodemailer
Para el envio de email con la información del pedido (ver uso de variables de entorno)
### Faker-js, Mocha y Axios
Para el desarrollo de algunos test de prueba

## Rutas
/api/docs - Contiene la documentación creada con Swagger para visualizar los endpoins
/login - Se muestra la pantalla de logueo para luego ser redirigido a /home
/home - Se presenta una vista de los productos con precios e imagenes.
/api/productos - Se visualizan los productos en la base de datos con una vista de *Handlebars*


## Heroku y Vercel

El proyecto se encuentra en el servidor de heroku
https://backendproyectocoder.herokuapp.com/

Y en Vercel 
https://proyectobackend-jade.vercel.app/

## Pruebas
La API posee pruebas de estados de las rutas que se encuentran configuradas en **Mocha** con la creación de modelos con **Faker-js** y **Axios**

para acceder solo iniciamos la app y en otra terminal utilizamos 
`npm test`.
## Estructura
├── logs
├── public
│   ├── js
├── src
│   ├── auth
│   ├── config
│   ├── controladores
│   │   ├── Carrito
│   │   ├── Info
│   │   ├── Login
│   │   ├── Mensajes
│   │   ├── Productos
│   │   └── Usuarios
│   ├── db
│   ├── docs
│   │   ├── routes
│   │   └── schemas
│   ├── models
│   │   ├── DAO
│   │   ├── DTO
│   │   └── schemas
│   ├── routing
│   ├── scripts
│   ├── services
│   │   ├── Carrito
│   │   ├── Info
│   │   ├── Mensajes
│   │   ├── Productos
│   │   └── Usuarios
│   ├── sessions
│   │   ├── daos
│   │   ├── FileSystem
│   │   ├── firebase
│   │   ├── mongoDb
│   │   │   └── models
│   │   └── types
│   ├── views
│   └── test
└── app.js
## Scripts
Para inicializar la API usamos el comando
`npm start`.
Inicializar con variables de desarrollo
`npm run dev`.
Inicializar con variables de desarrollo
`npm run prod`.
Inicializar con los test de **Mocha**
`npm test`.
## Variables de entorno

`NODE_ENV`  para establecer  el entorno en *production* o *development*
En esta tabla se muestran las variables con ejemplos de lo utilizado para el desarrollo de la api
### dotenv
Se utiliza este modulo para el manejo de variables, la configuración permite utilizar un archivo *prod.env* y un archivo *dev.env* para las variables de **Produccion** y **Desarrollo**

Variables de entorno|production| development 
----------|-------- | -----
PERSISTENCIA | DBMONGO | FILE
EMAIL [^1] |garrett.lind@ethereal.email | garrett.lind@ethereal.email
EMAIL_PASS| MysJmfpQYXCe5amfEQ | MysJmfpQYXCe5amfEQ
FILE_DB | -----------|./src/db |
MONGO_DB| ecommerce | ---------- |

[^1]: Como correo electronico se utilizo un correo de prueba para la aplicación de **nodemailer**, se recomienda su uso solo de prueba

## Uso local 
Se puede descargar el proyecto con github o clonar el repositorio. Una vez descargado utilizar `npm install` para instalar los modulos de node. Una vez instalado utilizar `npm start` para probar el proyecto.

## Archivo de importación de Insomnia
Con el nombre **Insomnia-All_2022-10-09.json** podemos obtener los endpoins para probar la API en Insomnia ( https://insomnia.rest/download)
