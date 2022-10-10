import ControladorMensajes from '../../controladores/Mensajes.js';
//import { normalizarMensajes } from '../../normalizacion/index.js'

const controladorMje = new ControladorMensajes()

export default async function configurarSocket(socket, sockets) {
    socket.emit('mensajes', await controladorMje.obtenerTodos);
    console.log( controladorMje.obtenerTodoshero);

    socket.on('nuevoMensaje', async mensaje => {
        controladorMje.guardar(mensaje)
        sockets.emit('mensajes', await controladorMje.obtenerTodos);
    })
}