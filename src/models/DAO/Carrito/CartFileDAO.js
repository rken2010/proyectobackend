import { promises as fs } from 'fs';
import logger from "../../../scripts/logger.js"

class CartFileDAO {
    constructor(file) {
        this.file = file;
    }

    async getAll() {
        try {
            const carts = await fs.readFile(this.file, 'utf-8')
            return JSON.parse(carts)
        } catch (error) {
          await fs.promises.writeFile(this.file, [])
        }
    }

    async getById( id ) {
        const carts = await this.getAll()
        let search = carts.find(element => element.id  === id)
                  if( search != null ){ return search }
                  else{ 
                    logger.error(`Cart not found`)
                    return {error: "No se encontro el carrito"} 
                  }
    }

    async save(obj) {
        const carts = await this.getAll()

        let newId
        let timestamp = Date.now()
        if (carts.length == 0) {
            newId = 1
        } else {
            newId = carts[carts.length - 1].id + 1
        }

        const newObj = { ...obj, id: newId, timestamp:timestamp }
        carts.push(newObj)

        try {
            await fs.writeFile(this.file, JSON.stringify(carts, null, 2))
            return newId
        } catch (error) {
          logger.error(`${error} - Fail to save archive`)
        }
    }

    async update(elem, id) {
        const carts = await this.getAll()
        const index = carts.findIndex(o => o.id == id)
        if (index == -1) {
          logger.error(` Fail to find cart`)
        } else {
            carts[index] = elem
            try {
                await fs.writeFile(this.file, JSON.stringify(carts, null, 2))
            } catch (error) {
              logger.error(`${error} - Fail to update cart`)
            }
        }
    }

    async deleteById(id) {
        const carts = await this.getAll()
        const index = carts.findIndex(o => o.id == id)
        if (index == -1) {
          logger.error(` Fail to find message`)
        }

        carts.splice(index, 1)
        try {
            await fs.writeFile(this.file, JSON.stringify(carts, null, 2))
            logger.info("sucess to delete cart")
        } catch (error) {
          logger.error(`${error} - Fail to delete cart`)
        }
    }

    async deleteAll() {
        try {
            await fs.writeFile(this.file, JSON.stringify([], null, 2))
            logger.info("sucess to delete all")
        } catch (error) {
            logger.error(`${error} - Fail to delete all`)
        }
    }
}

export default CartFileDAO