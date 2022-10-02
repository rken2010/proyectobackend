import { faker } from '@faker-js/faker';

faker.locale = 'es';

export function mockItem() {
  
    let item = {
      nombre: faker.commerce.product(),
      descripcion:faker.commerce.productDescription(),
      precio: faker.commerce.price(),
      imagen: faker.image.cats(240, 240, true),
    };

  return item;
}

export function mockMensaje() {
    let mensaje = {
        email: faker.internet.email(),
        tipo: "usuario",
        fyh: Date.now,
        mensaje: faker.lorem.paragraph()
    }
    return mensaje
}

export function mockUsuario(){
  let usuario = {
    username:"sano2010",
    nombre:"juan",
    direccion:"siempreviva 4848",
    correo:"juan@simpson.com",
    password: "haycaramba",
    admin: false,
    system: false,
  }
  return usuario
}

export function mockCarrito() {
  let carrito = {
      email: faker.internet.email(),
      fyh: Date.now,
      items: [],
      direccion: faker.address.direction()
  }  
  return carrito
}

export default { mockItem, mockMensaje };
