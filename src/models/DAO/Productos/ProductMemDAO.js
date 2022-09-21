class ProductMemDAO {

    constructor() {
        this.products = []
    }

    getByID(id) {
        const elem = this.products.find(elem => elem.id == id)
        return elem || { error: `elemento no encontrado` }
    }

    getAll() {
        return [...this.products]
    }

    save(elem) {

        let newId
        if (this.products.length == 0) {
            newId = 1
        } else {
            newId = this.products[this.products.length - 1].id + 1
        }

        const newElem = { ...elem, id: newId }
        this.products.push(newElem)
        return newElem
    }

    update(elem) {
        const newElem = { ...elem, id: Number(elem.id) }
        const index = this.products.findIndex(p => p.id == elem.id)
        if (index == -1) {
            return { error: `elemento no encontrado` }
        } else {
            this.products[index] = newElem
            return newElem
        }
    }

    deleteById(id) {
        const index = this.products.findIndex(elem => elem.id == id)
        if (index == -1) {
            return { error: `elemento no encontrado` }
        } else {
            return this.products.splice(index, 1)
        }
    }

    deteleAll() {
        this.products = []
    }
}

export default ProductMemDAO