import mongoose from "mongoose";

const carritoSchema = new mongoose.Schema({
    email: { type:String, require:true, max:100 },
    fecha: { type:Date, default: Date.now ,require:true },
    items: [],
    precio: { type:Number, require:true }

});

const carritos = mongoose.model( "carrito", carritoSchema)

export default carritos;