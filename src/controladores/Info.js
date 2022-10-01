import InfoApi from "../service/InfoApi.js"
import logger from "../scripts/logger.js"


class ControladorInfo{
  constructor(){
    this.infoApi = new InfoApi()
  }
    
  obtenerInfo = async ( req, res) => {
    try{
      let info = await this.infoApi.obtenerInfo()
      res.render( "info", { data:info })
  }
  catch(error){
      logger.error(error)
  }
        
    }
  
}

export default ControladorInfo