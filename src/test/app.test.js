/*
import pkg from 'supertest';
let { request } = pkg;
import { expect } from "chai"


import { mockItem, mockMensaje } from "../scripts/mocks.js"


describe( "Test productos", () => {
    describe("GET test route /product" , () => {
        it("must return status 200", async() => {
            let response = await request("http://localhost:8080")
                .get("/api/productos")
            expect(response.status).eql.to(200)
        })
    })
    describe("POST test route /products", () => { 
        it("add Product", async () => {
            let product = mockItem()
            let response = await request
                .post("/api/productos")
                .send(product)
            let prod = response.body
            expect(response.status).to.eql(200)
            
    }
    )})
})

*/

import axios from "axios"
import { expect } from "chai"

import { mockItem , mockMensaje} from "../scripts/mocks.js"

let productoPrueba = mockItem()
let mensajePrueba = mockMensaje()

describe(" TEST RUTA PRODUCTO ", () => {
    describe("ruta GET", ()=> {
        it("retorna un STATUS 200", async ()=> {
            let response = await axios('http://localhost:8080/api/productos')
            expect( response.status ).to.eql(200)
        })
    })
    describe("ruta POST", ()=> {
        it("retorna un STATUS 200", async ()=> {
            let response = await axios.post('http://localhost:8080/api/productos', { productoPrueba })
            expect( response.status ).to.eql(200)
        })
    })
})

describe(" TEST RUTA MENSAJES ", () => {
    describe("ruta GET", ()=> {
        it("retorna un STATUS 200", async ()=> {
            let response = await axios('http://localhost:8080/api/mensajes')
            expect( response.status ).to.eql(200)
        })
    })
    describe("ruta POST", ()=> {
        it("retorna un STATUS 200", async ()=> {
            let response = await axios.post('http://localhost:8080/api/mensajes', { mensajePrueba })
            expect( response.status ).to.eql(200)
        })
    })
})