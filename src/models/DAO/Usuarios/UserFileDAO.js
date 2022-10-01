import { promises as fs } from 'fs';
import logger from "../../../scripts/logger.js"

class ProductFileDAO {
    constructor(file) {
        this.file = file;
    }

    async getAll() {
        try {
            const items = await fs.readFile(this.file, 'utf-8')
            return JSON.parse(items)
        } catch (error) {
          logger.error(`${error} - Fail to read archive`)
          return []
        }
    }

    async getByID(id) {
        const items = await this.getAll()
        let search = items.find(element => element.id  === parseInt(id))
                  if( search != null ){ return search }
                  else{ 
                    logger.error(`Product not found`)
                    return {error: "No se encontro el producto"} 
                  }
    }

    async save(obj) {
        const items = await this.getAll()

        let newId
        let timestamp = Date.now()
        if (items.length == 0) {
            newId = 1
        } else {
            newId = items[items.length - 1].id + 1
        }

        const newObj = { ...obj, id: newId, timestamp:timestamp }
        items.push(newObj)

        try {
            await fs.writeFile(this.file, JSON.stringify(items, null, 2))
            return newId
        } catch (error) {
          logger.error(`${error} - Fail to save archive`)
        }
    }

    async update(elem, id) {
        const items = await this.getAll()
        const index = items.findIndex(o => o.id == id)
        if (index == -1) {
          logger.error(` Fail to find product`)
        } else {
            items[index] = elem
            try {
                await fs.writeFile(this.file, JSON.stringify(items, null, 2))
            } catch (error) {
              logger.error(`${error} - Fail to update product`)
            }
        }
    }

    async deleteById(id) {
        const items = await this.getAll()
        const index = items.findIndex(o => o.id == id)
        if (index == -1) {
          logger.error(` Fail to find product`)
        }

        items.splice(index, 1)
        try {
            await fs.writeFile(this.file, JSON.stringify(items, null, 2))
            logger.info("sucess to delete product")
        } catch (error) {
          logger.error(`${error} - Fail to delete product`)
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

export default ProductFileDAO