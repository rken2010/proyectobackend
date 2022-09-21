import MessageFileDAO from "./MessageFileDAO.js"
import MessageMemDAO from "./MessageMemDAO.js"
import MessageDbDAO from "./MessageMongoDAO.js"


export class MensajesFactoryDAO {
    static get(tipoPersistencia){
        switch(tipoPersistencia){
          case "MEM": return new MessageMemDAO()
          case "FILE": return new MessageFileDAO( "./src/db/Mensajes.json")
          case "DBMONGO": return new MessageDbDAO( "ecommerce", "mensajes")
          default: return new MessageMemDAO()
        }
    }
  }

  export default MensajesFactoryDAO