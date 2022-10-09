import ControladorMensajes from '../../controladores/Mensajes.js';
//import { normalizarMensajes } from '../../normalizacion/index.js'

const controladorMje = new ControladorMensajes()

export default async function configurarSocket(socket, sockets) {
    socket.emit('messages', await controladorMje.obtenerTodos);

    socket.on('new-message', async mensaje => {
        mensaje.fyh = new Date().toLocaleString()
        controladorMje.guardar(mensaje)
        sockets.emit('messages', await controladorMje.obtenerTodos);
    })
}