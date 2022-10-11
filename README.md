# Curso de Backend - CoderHouse - Comisión 30960

# Brief
El desarrollo del curso consiste en la creación de una aplicación **e-commerce** que pueda utilizarse para la comercialización de productos de un rubro a elección


# Tecnologias

Para su desarrollo se utilizará **Node JS**, implementando una API RESTful con las rutas correspondientes para aplicar todas las funciones necesarias.
Para crear el servidor se aplicara **Express** (https://expressjs.com/es/) para el desarrollo de la aplicación Web.

## Librerias 

### Node JS y Express
Como se menciono anteriormente, seran la base de la Aplicación para la creación y manejo del servidor y la comunicación con el Frontend.
### Mongo DB
Se utilizará **Mongo DB** como base de datos para el almacenamiento del catalogo ( productos) del negoción, como tambien los usuarios que tienen acceso a la Aplicación.
### Handlebars
Como motor de plantillas se implementará **Handlebars** para la aplicación de plantillas del sitio. Se mostrará el listado de productos, los mensajes del chat y las páginas de registro y login a traves de este motor.
### express-session
Se implementa session como middleware para la manipulación de las sessiones
### Passport
Para la autorización y autenticación se utiliza **Passport** con sus estrategias locales (*passport-local*)

## Rutas
/api/docs - Contiene la documentación creada con Swagger para visualizar los endpoins
/login - Se muestra la pantalla de logueo para luego ser redirigido a /home
/home - Se presenta una vista de los productos con precios e imagenes.

## Heroku y Vercel

El proyecto se encuentra en el servidor de heroku
https://backendproyectocoder.herokuapp.com/

Y en Vercel 
https://proyectobackend-jade.vercel.app/
