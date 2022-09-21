class MessageMemDAO {

    constructor() {
        this.messages = []
    }

    getByID(id) {
        const elem = this.messages.find(elem => elem.id == id)
        return elem || { error: `elemento no encontrado` }
    }

    getAll() {
        return [...this.messages]
    }

    save(elem) {

        let newId
        if (this.messages.length == 0) {
            newId = 1
        } else {
            newId = this.messages[this.messages.length - 1].id + 1
        }

        const newElem = { ...elem, id: newId }
        this.messages.push(newElem)
        return newElem
    }

    update(elem) {
        const newElem = { ...elem, id: Number(elem.id) }
        const index = this.messages.findIndex(p => p.id == elem.id)
        if (index == -1) {
            return { error: `elemento no encontrado` }
        } else {
            this.messages[index] = newElem
            return newElem
        }
    }

    deleteById(id) {
        const index = this.messages.findIndex(elem => elem.id == id)
        if (index == -1) {
            return { error: `elemento no encontrado` }
        } else {
            return this.messages.splice(index, 1)
        }
    }

    deteleAll() {
        this.messages = []
    }
}

export default MessageMemDAO