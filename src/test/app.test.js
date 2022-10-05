import axios from "axios"
import { expect } from "chai"

import { mockCarrito, mockItem , mockMensaje, mockUsuario} from "../scripts/mocks.js"



describe(" TEST RUTA PRODUCTO ", () => {
    describe("ruta GET", ()=> {
        it("retorna un STATUS 200", async ()=> {
            let response = await axios(`http://localhost:8080/api/productos`)
            expect( response.status ).to.eql(200)
        })
    })
    describe("ruta POST", ()=> {
        it("retorna un STATUS 200", async ()=> {
            let response = await axios.post(`http://localhost:8080/api/productos`,  mockItem() )
            expect( response.status ).to.eql(200)
        })
    })
})

describe(" TEST RUTA MENSAJES ", () => {
    describe("ruta GET", ()=> {
        it("retorna un STATUS 200", async ()=> {
            let response = await axios('http://localhost:8080/api/chat')
            expect( response.status ).to.eql(200)
        })
    })
    describe("ruta POST", ()=> {
        it("retorna un STATUS 200", async ()=> {
            let response = await axios.post('http://localhost:8080/api/chat',  mockMensaje() )
            expect( response.status ).to.eql(200)
        })
    })
})
describe(" TEST RUTA USUARIOS ", () => {
    describe("ruta GET", ()=> {
        it("retorna un STATUS 200", async ()=> {
            let response = await axios('http://localhost:8080/api/usuarios')
            expect( response.status ).to.eql(200)
        })
    })
    describe("ruta POST", ()=> {
        it("retorna un STATUS 200", async ()=> {
            let response = await axios.post('http://localhost:8080/api/usuario',  mockUsuario() )
            expect( response.status ).to.eql(200)
        })
    })
})
describe(" TEST RUTA CARRITO ", () => {
    describe("ruta GET", ()=> {
        it("retorna un STATUS 200", async ()=> {
            let response = await axios('http://localhost:8080/api/carritos')
            expect( response.status ).to.eql(200)
        })
    })
    describe("ruta POST", ()=> {
        it("retorna un STATUS 200", async ()=> {
            let response = await axios.post('http://localhost:8080/api/carritos',  mockCarrito() )
            expect( response.status ).to.eql(200)
        })
    })
})
