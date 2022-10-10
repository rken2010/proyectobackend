export default class UsuarioDTO {
    constructor( {username, nombre, direccion, email, admin, system} ){
        this.username = username,
        this.nombre  = nombre,
        this.direccion = direccion
        this.email = email,
        this.admin = admin,
        this.system = system
    }
}

export function transformarADTO( personas ) {
    if ( Array.isArray(personas)) {
        return personas.map( function (p) {
                return new UsuarioDTO(p)
            })
    } else {
        return new UsuarioDTO(personas)
    }
}