const productsModel = require("../models/productsModels");

module.exports= {

    getAll: async (req, res, next) => {
  
        //-esto saldria de la base de datos
        /**const productos = [
            {
                id: 1,
                name: "Moto G",     
                price: 1000
            },
            {
                id: 2,
                name: "Moto z",
                price: 2000
            }
        ]**/
         console.log(req.query)
         const productos = await productsModel.find({}).populate("category");   
         res.json(productos);
    },

    getbyID:  async function(req, res, next) {
  
        //esto saldria de la base de datos
        /**const producto = [
            {
                id: 1,
                name: "Moto G",
                price: 1000
            },
            {
                id: 2,
                name: "Moto z",
                price: 2000
            },
        ]**/
        console.log(req.params.id);
        const producto = await productsModel.findById(req.params.id);
        res.json(producto);
    },

    create: function(req, res, next) {
        console.log(req.body);
        
        const product = new productsModel({

            name: req.body.name,
            sku: req.body.sku,
            description: req.body.description,
            price: req.body.price,
            quantity: req.body.quantity,
            category:req.body.category

        })

        product.save();
        
        res.json(product);
    },

    update: function(req, res, next) {
        console.log(req.body, req.params.id) 
        res.json(req.body);
    },

    delete: function(req, res, next) {
        console.log(req.params.id) 
        res.json({});
    },

} 