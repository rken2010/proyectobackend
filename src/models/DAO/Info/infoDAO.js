import config from "../../../config/config.js"
import os from "node:os"

class InfoDAO{
    getAll(){
        const info = {
                mode: config.NODE_ENV,
                port: config.PORT,
                path: process.execPath,
                opSys: process.platform,
                process_ID: process.pid,
                nodeVersion: process.version,
                placeholder:process.cwd(),
                
                memoryUsage: {
                  rss : process.memoryUsage().rss,
                  heapTotal:process.memoryUsage().heapTotal,
                  heapUsed: process.memoryUsage().heapUsed,
                  external: process.memoryUsage().external,
                  arrayBuffers: process.memoryUsage().arrayBuffers,
                },
                numCPUs:os.cpus().length
                
        }
        return info
    }  
}

export default InfoDAO