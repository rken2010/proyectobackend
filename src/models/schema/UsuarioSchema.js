import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    username: { type: String, require:true},
    nombre: { type:String, require:true, max:100 },
    direccion: { type:String, require:true },
    email:{ type:String, require:true},
    password: { type: String, require:true },
    admin: { type:Boolean, require:true },
    system: { type:Boolean, require:true}

});
/*
usuarioSchema.set(`toJSON`, {
    transform: ( document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject._v
        delete returnedObject.password
    }
})
*/
const usuarios = mongoose.model( "usuarios", usuarioSchema)

export default usuarios;