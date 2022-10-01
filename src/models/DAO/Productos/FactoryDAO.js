import ProductFileDAO from "./ProductFileDAO.js"
import ProductMemDAO from "./ProductMemDAO.js"
import ProductDbDAO from "./ProductMongoDAO.js"
import config from "../../../config/config.js"

export class ProductosFactoryDAO {
    static get(){
        switch(config.PERSISTENCIA){
          case "MEM": return new ProductMemDAO()
          case "FILE": return new ProductFileDAO( "./src/db/Productos.json")
          case "DBMONGO": return new ProductDbDAO( "ecommerce", "productos")
          default: return new ProductMemDAO()
        }
    }
  }

  export default ProductosFactoryDAO