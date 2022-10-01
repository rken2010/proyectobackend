class UsuarioMemDAO {

    constructor() {
        this.usuarios = []
    }

    getByID(id) {
        const elem = this.usuarios.find(elem => elem.id == id)
        return elem || { error: `elemento no encontrado` }
    }

    getAll() {
        return [...this.usuarios]
    }

    save(elem) {

        let newId
        if (this.usuarios.length == 0) {
            newId = 1
        } else {
            newId = this.usuarios[this.usuarios.length - 1].id + 1
        }

        const newElem = { ...elem, id: newId }
        this.usuarios.push(newElem)
        return newElem
    }

    update(elem) {
        const newElem = { ...elem, id: Number(elem.id) }
        const index = this.usuarios.findIndex(p => p.id == elem.id)
        if (index == -1) {
            return { error: `elemento no encontrado` }
        } else {
            this.usuarios[index] = newElem
            return newElem
        }
    }

    deleteById(id) {
        const index = this.usuarios.findIndex(elem => elem.id == id)
        if (index == -1) {
            return { error: `elemento no encontrado` }
        } else {
            return this.usuarios.splice(index, 1)
        }
    }

    deteleAll() {
        this.usuarios = []
    }
}

export default UsuarioMemDAO