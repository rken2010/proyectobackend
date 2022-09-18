import pkg from 'supertest';
let { request } = pkg;
import { expect } from "chai"
import { assert } from "chai"

import { mockItem, mockMensaje } from "../scripts/mocks.js"

request = "http://localhost:8080"
console.log("----------------------TESTEO RUTA DE PRODUCTOS ----------------")
describe( "Test productos", () => {
    describe("GET test route /product" , () => {
        it("must return status 200", async() => {
            let response = await request.get("/api/productos")
            expect(response.status).to.eql(200)
        })
    })
    describe("POST test route /products", () => { 
        it("add Product", async () => {
            let product = mockItem()
            let response = await request.post("/api/productos").send(product)
            let prod = response.body
            expect(response.status).to.eql(200)
            
    }
    )})
})

console.log("----------------------TESTEO RUTA DE MENSAJES ----------------")
describe( "Test Mensajes", () => {
    describe("GET test route /product" , () => {
        it("must return status 200", async() => {
            let response = await request.get("/api/chat")
            expect(response.status).to.eql(200)
        })
    })
    describe("POST test route /products", () => { 
        it("add Product", async () => {
            let mensaje = mockMensaje()
            let response = await request.post("/api/chat").send(mensaje)
            let prod = response.body
            expect(response.status).to.eql(200)
            
    }
    )})
})

console.log("----------------------TESTEO RUTA DE CARRITO ----------------")
describe( "Test Carrito", () => {
    describe("GET test route /product" , () => {
        it("must return status 200", async() => {
            let response = await request.get("/api/carrito")
            expect(response.status).to.eql(200)
        })
    })
    describe("POST test route /products", () => { 
        it("add Product", async () => {
            let carrito = mockItem()
            let response = await request.post("/api/carrito").send(carrito)
            let prod = response.body
            expect(response.status).to.eql(200)
            
    }
    )})
})