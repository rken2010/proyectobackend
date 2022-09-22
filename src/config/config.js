import dotenv from "dotenv"
import path from "path"

dotenv.config( {
    path: path.resolve( process.cwd(), process.env.NODE_ENV + ".env")
})

export default {
    NODE_ENV: process.env.NODE_ENV || "development",
    HOST: process.env.HOST || "localhost",
    PORT: process.env.PORT || 8080,
    PERSISTENCIA: process.env.PERSISTENCIA || "FILE",
    FILE_DB: process.env.FILE_DB,
    EMAIL: process.env.EMAIL,
    EMAIL_PASS: process.env.EMAIL_PASS
}