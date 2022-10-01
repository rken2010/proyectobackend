import { promises as fs } from 'fs';
import logger from "../../../scripts/logger.js"

class MessageFileDAO {
    constructor(file) {
        this.file = file;
    }

    async getAll() {
        try {
            const messages = await fs.readFile(this.file, 'utf-8')
            return JSON.parse(messages)
        } catch (error) {
          await fs.promises.writeFile(this.file, [])
        }
    }

    async getByUser(email) {
        const messages = await this.getAll()
        let search = messages.find(element => element.email  === email)
                  if( search != null ){ return search }
                  else{ 
                    logger.error(`Product not found`)
                    return {error: "No se encontro el producto"} 
                  }
    }

    async save(obj) {
        const messages = await this.getAll()

        let newId
        let timestamp = Date.now()
        if (messages.length == 0) {
            newId = 1
        } else {
            newId = messages[messages.length - 1].id + 1
        }

        const newObj = { ...obj, id: newId, timestamp:timestamp }
        messages.push(newObj)

        try {
            await fs.writeFile(this.file, JSON.stringify(messages, null, 2))
            return newId
        } catch (error) {
          logger.error(`${error} - Fail to save archive`)
        }
    }

    async update(elem, id) {
        const messages = await this.getAll()
        const index = messages.findIndex(o => o.id == id)
        if (index == -1) {
          logger.error(` Fail to find message`)
        } else {
            messages[index] = elem
            try {
                await fs.writeFile(this.file, JSON.stringify(messages, null, 2))
            } catch (error) {
              logger.error(`${error} - Fail to update message`)
            }
        }
    }

    async deleteById(id) {
        const messages = await this.getAll()
        const index = messages.findIndex(o => o.id == id)
        if (index == -1) {
          logger.error(` Fail to find message`)
        }

        messages.splice(index, 1)
        try {
            await fs.writeFile(this.file, JSON.stringify(messages, null, 2))
            logger.info("sucess to delete product")
        } catch (error) {
          logger.error(`${error} - Fail to delete message`)
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

export default MessageFileDAO