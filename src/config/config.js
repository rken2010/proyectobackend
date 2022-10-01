import * as dotenv from 'dotenv'
import path from "path";

const ENV = process.env.NODE_ENV == "prod" ? "src/config/prod.env" : "src/config/dev.env"

dotenv.config({
    path: path.resolve( ENV ),
    override: true 
})

export default {
    NODE_ENV: process.env.NODE_ENV  || "dev",
    HOST: process.env.HOST || "localhost",
    PORT: process.env.PORT || 8080,
    PERSISTENCIA: process.env.PERSISTENCIA || "MEM",
    FILE_DB: process.env.FILE_DB,
    MONGO_DB: process.env.MONGO_DB,
    EMAIL: process.env.EMAIL || "garrett.lind@ethereal.email" ,
    EMAIL_PASS: process.env.EMAIL_PASS || "MysJmfpQYXCe5amfEQ",
}

