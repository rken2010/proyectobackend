import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    titulo: { type:String, require:true, max:100 },
    categoria: { type:String, require:true, max:100 },
    descripcion: { type:String, require:true, max:200 },
    imagen:{ type:string, require:true},
    precio: { type:Number, require:true }

});

const producto = mongoose.model( "producto", productoSchema)

export default producto;