import mongoose from "mongoose";

const mensajeSchema = new mongoose.Schema({
    email: { type:String, require:true, max:100 },
    descripcion: { type:String, require:true, max:200 },
    tipo: { type:Boolean, require:true}, 
    fecha:{ type: Date, default: Date.now, require:true},
    mensaje: { type:String, require:true }

});

const mensajes = mongoose.model( "mensajes", mensajeSchema)

export default mensajes;