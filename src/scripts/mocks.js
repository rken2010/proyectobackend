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
    let mensaje =  faker.lorem.paragraph()
    let author = mockUsuario()
    let chat = { author, mensaje}
    return chat
}

export function mockUsuario(){
  let usuario = {
    username:faker.internet.userName(),
    nombre:faker.name.firstName(),
    direccion:faker.address.streetAddress(),
    email:faker.internet.email(),
    password: faker.internet.password(),
    admin: false,
    system: false,
  }
  return usuario
}

export function mockCarrito() {
  let carrito = {
      email: faker.internet.email(),
      fyh: Date.now,
      items: [
        {
          nombre: "Bicicleta",
          descripcion: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
          precio: "762.00",
          imagen: "https://loremflickr.com/240/240/cats?56523",
          id: 2,
          timestamp: 1665001795781,
          cantidad:8
        },
        {
          nombre: "Pelota",
          descripcion: "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
          precio: "773.00",
          imagen: "https://loremflickr.com/240/240/cats?2901",
          id: 3,
          timestamp: 1665004657467,
          cantidad:8
        },
      ],
      direccion: faker.address.direction()
  }  
  return carrito
}

export default { mockItem, mockMensaje };
