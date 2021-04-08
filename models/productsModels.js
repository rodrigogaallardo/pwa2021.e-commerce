const mongoose = require("../bin/mongodb");

//Estructura del modelo 
const productsSchema = new mongoose.Schema ({
    name : {
        type: String, //Tipo de dato
        index: true, //Que este indexado
        mixlegth:1, //Cantidad minimas de palabras a usar
        maxlength: 255, //Cantidad maxima de letras para usar
        trim: true, //Quita los espacios
        required:true //Obligatorio
    },
    sku: {
        type: String,
        unique: true, //Unico, no repetible
        minlength:1,
        maxlength:255,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true
    }
    ,

    status: {
        type: String,
        enum: ["pendiente", "en_estatus","activo"] //los tres tipos de estados
    },
    category:{
        type: mongoose.Schema.ObjectId,
        ref: "categories"
    },
    
    price: {
        type: Number,
        min: 1,
        required: true,
        set: function(price_get){
            return price_get * 1.21;
        }
    },
    quantity: Number
});

// get, modifica el dato cuando sale de la base de datos
// set, modifica el dato cuando ingresa a la base de datos
productsSchema.virtual("price_curency").get (function(){
    return "$ " + this.price;
});

productsSchema.set('toJSON', {getters: true, virtuals: true});
module.exports = mongoose.model("products",productsSchema)

