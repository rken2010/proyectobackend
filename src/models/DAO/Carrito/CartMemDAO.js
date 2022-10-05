class CartMemDAO {

    constructor() {
        this.carts = []
    }

    getById(id) {
        const elem = this.carts.find(elem => elem.email == email)
        return elem || { error: `elemento no encontrado` }
    }

    getAll() {
        return [...this.carts]
    }

    save(elem) {

        let newId
        if (this.carts.length == 0) {
            newId = 1
        } else {
            newId = this.carts[this.carts.length - 1].id + 1
        }

        const newElem = { ...elem, id: newId }
        this.carts.push(newElem)
        return newElem
    }

    update(elem) {
        const newElem = { ...elem, id: Number(elem.id) }
        const index = this.carts.findIndex(p => p.id == elem.id)
        if (index == -1) {
            return { error: `elemento no encontrado` }
        } else {
            this.carts[index] = newElem
            return newElem
        }
    }

    deleteById(id) {
        const index = this.carts.findIndex(elem => elem.id == id)
        if (index == -1) {
            return { error: `elemento no encontrado` }
        } else {
            return this.carts.splice(index, 1)
        }
    }

    deteleAll() {
        this.carts = []
    }
}

export default CartMemDAO