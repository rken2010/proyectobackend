import UserFileDAO from "./UserFileDAO.js"
import UserMemDAO from "./UserMemDAO.js"
import UserDbDAO from "./UserMongoDAO.js"
import config from "../../../config/config.js"

export class UsuariosFactoryDAO {
    static get(){
        switch(config.PERSISTENCIA){
          case "MEM": return new UserMemDAO()
          case "FILE": return new UserFileDAO( "./src/DB/Usuarios.json")
          case "DBMONGO": return new UserDbDAO( "ecommerce", "usuarios")
          default: return new UserMemDAO()
        }
    }
  }

  export default UsuariosFactoryDAO