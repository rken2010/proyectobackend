import mongoose, { SchemaType } from "mongoose";

const carritoSchema = new mongoose.Schema({
    email: { type:String, require:true, max:100 },
    fecha: { type:date, default: Date.now ,require:true },
    items: [ {type: Schema.Types.ObjectId, ref:`producto`}],
    precio: { type:Number, require:true }

});

const producto = mongoose.model( "carrito", carritoSchema)

export default producto;