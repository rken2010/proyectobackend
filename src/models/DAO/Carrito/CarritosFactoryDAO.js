import CartFileDAO from "./CartFileDAO.js"
import CartMemDAO from "./CartMemDAO.js"
import CartDbDAO from "./CartMongoDAO.js"


export class CarritosFactoryDAO {
    static get(tipoPersistencia){
        switch(tipoPersistencia){
          case "MEM": return new CartMemDAO()
          case "FILE": return new CartFileDAO( "./src/DB/Carritos.json")
          case "DBMONGO": return new CartDbDAO( "ecommerce", "carrito")
          default: return new CartMemDAO()
        }
    }
  }

  export default CarritosFactoryDAO