import swaggerJsdoc from "swagger-jsdoc"

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Express API with Swagger",
            description: "Un simpre CRUD de productos"
        }
    },
    apis: ['./**/*.yaml']
}

export const swaggerSpecs = swaggerJsdoc(options)

export default { swaggerSpecs }