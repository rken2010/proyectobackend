import mongoose from "mongoose";

const mensajeSchema = new mongoose.Schema({
    email: { type:String, require:true, max:100 },
    tipo: { type:String, require:true}, 
    mensaje: { type:String, require:true },
    timestamp:{ type: Date, default: Date.now, require:true},
});

const mensajes = mongoose.model( "mensajes", mensajeSchema)

export default mensajes;