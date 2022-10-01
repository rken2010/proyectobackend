import InfoDAO from "../models/DAO/Info/infoDAO.js"

class InfoApi{
    constructor(){
        this.info = new InfoDAO()
    }
    async obtenerInfo() { return await this.info.getAll()}
}

export default InfoApi