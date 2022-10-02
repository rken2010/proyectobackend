import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    nombre: { type:String, require:true, max:100 },
    descripcion: { type:String, require:true, max:200 },
    precio: { type:Number, require:true },
    imagen:{ type:String, require:true}
    //! FALTA TIMESTAMP//

});

const producto = mongoose.model( "producto", productoSchema)

export default producto;