import { promises as fs } from 'fs';
import logger from "../../../scripts/logger.js"
import { transformarADTO } from '../../DTO/UsuariosDTO.js';

class UserFileDAO {
    constructor(file) {
        this.file = file;
    }

    async getAll() {
        try {
            const user = await fs.readFile(this.file, 'utf-8')
            return JSON.parse(user)
        } catch (error) {
          logger.error(`${error} - Fail to read archive`)
          return []
        }
    }
    async getAllByDTO() {
        try {
            const user = await this.getAll()
            return transformarADTO(user)
        } catch (error) {
          logger.error(`${error} - Fail to read archive`)
          return []
        }
    }

    async getByID(id) {
        const user = await this.getAll()
        let search = user.find(element => element.id  === parseInt(id))
        if( search != null ){ return transformarADTO(search) }
        else{ 
                    logger.error(`User not found`)
                    return {error: "No se encontro el usuario"} 
                  }
    }
    async getByUsername(username) {
        const users = await this.getAll()
       
        let search = users.find(users => users.username  == username)
        
                  if( search != null ){ return search }
                  else{ 
                    logger.error(`User not found`)
                    console.log(search);
                    return {error: "No se encontro el usuario"} 
                  }
    }

    async save(obj) {
        const user = await this.getAll()

        let newId
        let timestamp = Date.now()
        if (user.length == 0) {
            newId = 1
        } else {
            newId = user[user.length - 1].id + 1
        }

        const newObj = { ...obj, id: newId, timestamp:timestamp }
        user.push(newObj)

        try {
            await fs.writeFile(this.file, JSON.stringify(user, null, 2))
            return newId
        } catch (error) {
          logger.error(`${error} - Fail to save archive`)
        }
    }

    async update(elem, id) {
        const user = await this.getAll()
        const index = user.findIndex(o => o.id == id)
        if (index == -1) {
          logger.error(` Fail to find product`)
        } else {
            user[index] = elem
            try {
                await fs.writeFile(this.file, JSON.stringify(user, null, 2))
            } catch (error) {
              logger.error(`${error} - Fail to update product`)
            }
        }
    }

    async deleteById(id) {
        const user = await this.getAll()
        const index = user.findIndex(o => o.id == id)
        if (index == -1) {
          logger.error(` Fail to find product`)
        }

        user.splice(index, 1)
        try {
            await fs.writeFile(this.file, JSON.stringify(user, null, 2))
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

export default UserFileDAO