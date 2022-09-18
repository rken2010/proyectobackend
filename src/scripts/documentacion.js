import SwaggerClient from 'swagger-client';

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Ecommerce con Express",
            description: "Creacion de un Ecommerce basado en Express"
        },
        apis: ['./docs/**/*.yaml']
    }
}

export const swaggerSpecs = SwaggerClient( options )

export default swaggerSpecs